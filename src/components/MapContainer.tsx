import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { Waypoint, AncientKingdom, ModernRegion } from '../types';
import { ancientKingdoms } from '../data/ancientKingdoms';
import { modernRegions } from '../data/modernBoundaries';
import { routeSegments } from '../data/journeyRoutes';
import { getKandaColor } from '../utils/geoUtils';
import { Maximize2, Compass, Sun, Moon } from 'lucide-react';

interface MapContainerProps {
  selectedWaypoint: Waypoint | null;
  onSelectWaypoint: (wp: Waypoint) => void;
  onSelectKingdom: (kingdom: AncientKingdom) => void;
  showAncientKingdoms: boolean;
  showModernBoundaries: boolean;
  showRoutes: boolean;
  activeKandaFilter: string | null;
  allWaypoints: Waypoint[];
}

export const MapContainer: React.FC<MapContainerProps> = ({
  selectedWaypoint,
  onSelectWaypoint,
  onSelectKingdom,
  showAncientKingdoms,
  showModernBoundaries,
  showRoutes,
  activeKandaFilter,
  allWaypoints,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);

  // Layer groups refs
  const kingdomLayerGroup = useRef<L.LayerGroup | null>(null);
  const modernLayerGroup = useRef<L.LayerGroup | null>(null);
  const routesLayerGroup = useRef<L.LayerGroup | null>(null);
  const markersLayerGroup = useRef<L.LayerGroup | null>(null);
  const activeTileLayer = useRef<L.TileLayer | null>(null);

  const [mapTheme, setMapTheme] = useState<'dark' | 'voyager' | 'terrain'>('dark');

  // Initialize Map
  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return;

    // Create Leaflet map
    const map = L.map(mapRef.current, {
      center: [20.5937, 80.9629],
      zoom: 5,
      minZoom: 4,
      maxZoom: 14,
      zoomControl: false,
    });

    leafletMap.current = map;

    // Layer groups
    kingdomLayerGroup.current = L.layerGroup().addTo(map);
    modernLayerGroup.current = L.layerGroup().addTo(map);
    routesLayerGroup.current = L.layerGroup().addTo(map);
    markersLayerGroup.current = L.layerGroup().addTo(map);

    // Initial tile layer (CartoDB Dark Matter)
    const tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
    activeTileLayer.current = L.tileLayer(tileUrl, {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    // Cleanup
    return () => {
      map.remove();
      leafletMap.current = null;
    };
  }, []);

  // Update Map Tile Theme
  useEffect(() => {
    if (!leafletMap.current) return;
    if (activeTileLayer.current) {
      leafletMap.current.removeLayer(activeTileLayer.current);
    }

    let tileUrl = '';
    let attribution = '';

    if (mapTheme === 'dark') {
      tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
      attribution = '&copy; CARTO &copy; OpenStreetMap';
    } else if (mapTheme === 'voyager') {
      tileUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
      attribution = '&copy; CARTO &copy; OpenStreetMap';
    } else {
      // Topographic terrain
      tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}';
      attribution = '&copy; Esri &copy; USGS, NOAA';
    }

    activeTileLayer.current = L.tileLayer(tileUrl, {
      attribution,
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(leafletMap.current);
  }, [mapTheme]);

  // Render Ancient Kingdoms
  useEffect(() => {
    if (!leafletMap.current || !kingdomLayerGroup.current) return;
    kingdomLayerGroup.current.clearLayers();

    if (!showAncientKingdoms) return;

    ancientKingdoms.forEach((kingdom) => {
      const polygon = L.polygon(kingdom.polygonCoordinates as L.LatLngExpression[], {
        color: kingdom.color,
        fillColor: kingdom.color,
        fillOpacity: 0.18,
        weight: 1.5,
        dashArray: '4, 4',
      });

      polygon.bindTooltip(
        `<div class="p-1">
          <div class="font-serif font-bold text-amber-300 text-xs">${kingdom.name}</div>
          <div class="text-[10px] text-slate-300">${kingdom.sanskritName}</div>
          <div class="text-[9px] text-slate-400">Capital: ${kingdom.capital}</div>
        </div>`,
        { sticky: true, className: 'leaflet-custom-tooltip' }
      );

      polygon.on('click', () => {
        onSelectKingdom(kingdom);
      });

      polygon.on('mouseover', function(this: L.Polygon) {
        this.setStyle({ fillOpacity: 0.35, weight: 2.5 });
      });

      polygon.on('mouseout', function(this: L.Polygon) {
        this.setStyle({ fillOpacity: 0.18, weight: 1.5 });
      });

      polygon.addTo(kingdomLayerGroup.current!);

      // Capital Marker with Ancient Crest
      const capitalMarker = L.circleMarker(kingdom.capitalCoordinates as L.LatLngExpression, {
        radius: 4,
        fillColor: kingdom.color,
        color: '#fff',
        weight: 1.5,
        fillOpacity: 0.9,
      });

      capitalMarker.bindTooltip(
        `<div class="text-[10px] font-semibold text-amber-200">👑 ${kingdom.capital} (${kingdom.name})</div>`,
        { permanent: false, direction: 'top' }
      );

      capitalMarker.on('click', () => {
        onSelectKingdom(kingdom);
      });

      capitalMarker.addTo(kingdomLayerGroup.current!);
    });
  }, [showAncientKingdoms, onSelectKingdom]);

  // Render Modern Boundaries & Regions
  useEffect(() => {
    if (!leafletMap.current || !modernLayerGroup.current) return;
    modernLayerGroup.current.clearLayers();

    if (!showModernBoundaries) return;

    modernRegions.forEach((region) => {
      const isCountry = region.type === 'country';
      const markerHtml = `
        <div class="flex items-center gap-1 bg-slate-900/90 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40 text-[10px] whitespace-nowrap shadow-lg backdrop-blur-sm pointer-events-none">
          <span class="w-1.5 h-1.5 rounded-full ${isCountry ? 'bg-cyan-400' : 'bg-emerald-400'}"></span>
          <span>${region.name}</span>
        </div>
      `;

      const customIcon = L.divIcon({
        html: markerHtml,
        className: 'custom-modern-region-label',
        iconAnchor: [35, 10],
      });

      const marker = L.marker(region.coordinates as L.LatLngExpression, {
        icon: customIcon,
        interactive: false,
      });

      marker.addTo(modernLayerGroup.current!);
    });
  }, [showModernBoundaries]);

  // Render Routes
  useEffect(() => {
    if (!leafletMap.current || !routesLayerGroup.current) return;
    routesLayerGroup.current.clearLayers();

    if (!showRoutes) return;

    routeSegments.forEach((route) => {
      const isPushpaka = route.type === 'pushpaka_vimana';
      const isHanuman = route.type === 'hanuman_flight';

      const polyline = L.polyline(route.coordinates as L.LatLngExpression[], {
        color: route.color,
        weight: isPushpaka ? 3.5 : isHanuman ? 3 : 2.5,
        opacity: 0.85,
        dashArray: route.dashArray || undefined,
        lineCap: 'round',
        lineJoin: 'round',
      });

      polyline.addTo(routesLayerGroup.current!);
    });
  }, [showRoutes]);

  // Render Waypoint Markers
  useEffect(() => {
    if (!leafletMap.current || !markersLayerGroup.current) return;
    markersLayerGroup.current.clearLayers();

    const filteredWaypoints = activeKandaFilter
      ? allWaypoints.filter(wp => wp.kanda === activeKandaFilter)
      : allWaypoints;

    filteredWaypoints.forEach((wp) => {
      const isSelected = selectedWaypoint?.id === wp.id;
      const kandaColor = getKandaColor(wp.kanda);

      const markerHtml = `
        <div class="relative group cursor-pointer">
          <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-2xl transition-all duration-300 ${
            isSelected 
              ? 'ring-4 ring-amber-400 scale-125 z-40 bg-amber-500 text-slate-950 marker-active-pulse' 
              : 'scale-100 hover:scale-115 text-white'
          }" style="background-color: ${isSelected ? '#f59e0b' : kandaColor}; border: 2px solid ${isSelected ? '#fff' : '#1e293b'};">
            ${wp.order}
          </div>
          <div class="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-slate-950/90 text-amber-200 text-[9px] font-semibold px-1.5 py-0.2 rounded border border-amber-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            ${wp.ancientName}
          </div>
        </div>
      `;

      const customDivIcon = L.divIcon({
        html: markerHtml,
        className: 'custom-waypoint-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const marker = L.marker(wp.coordinates as L.LatLngExpression, {
        icon: customDivIcon,
        zIndexOffset: isSelected ? 1000 : wp.order,
      });

      marker.on('click', () => {
        onSelectWaypoint(wp);
      });

      marker.bindTooltip(
        `<div class="p-1 max-w-xs">
          <div class="text-[10px] font-semibold text-amber-400 uppercase tracking-wider">${wp.kanda} • #${wp.order}</div>
          <div class="font-serif font-bold text-xs text-white">${wp.ancientName}</div>
          <div class="text-[10px] text-slate-300 mt-0.5 line-clamp-2">${wp.title}</div>
          <div class="text-[9px] text-slate-400 mt-1">📍 ${wp.modernLocation}, ${wp.modernStateOrCountry}</div>
        </div>`,
        { direction: 'top', offset: [0, -12] }
      );

      marker.addTo(markersLayerGroup.current!);
    });
  }, [allWaypoints, activeKandaFilter, selectedWaypoint, onSelectWaypoint]);

  // Pan to selected waypoint when changed
  useEffect(() => {
    if (!leafletMap.current || !selectedWaypoint) return;
    leafletMap.current.flyTo(selectedWaypoint.coordinates as L.LatLngExpression, 7.5, {
      duration: 1.2,
      easeLinearity: 0.25,
    });
  }, [selectedWaypoint]);

  // Reset view to entire subcontinent
  const handleResetView = () => {
    if (!leafletMap.current) return;
    leafletMap.current.flyTo([20.5937, 80.9629], 5, { duration: 1 });
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div ref={mapRef} className="w-full h-full z-0" />

      {/* Floating Map Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        {/* Reset / Fit Subcontinent View */}
        <button
          onClick={handleResetView}
          className="p-2.5 rounded-xl bg-slate-900/85 hover:bg-slate-800 text-slate-200 hover:text-amber-300 border border-amber-500/20 backdrop-blur-md shadow-lg transition-all"
          title="Reset to Bharata Varsha Overview"
        >
          <Maximize2 size={16} />
        </button>

        {/* Map Theme Toggle */}
        <div className="flex flex-col bg-slate-900/85 border border-amber-500/20 rounded-xl overflow-hidden backdrop-blur-md shadow-lg">
          <button
            onClick={() => setMapTheme('dark')}
            className={`p-2 transition-colors ${mapTheme === 'dark' ? 'bg-amber-500/30 text-amber-300' : 'text-slate-400 hover:text-slate-200'}`}
            title="Cosmic Dark Map"
          >
            <Moon size={16} />
          </button>
          <button
            onClick={() => setMapTheme('voyager')}
            className={`p-2 transition-colors ${mapTheme === 'voyager' ? 'bg-amber-500/30 text-amber-300' : 'text-slate-400 hover:text-slate-200'}`}
            title="Parchment / Antique Light Map"
          >
            <Sun size={16} />
          </button>
          <button
            onClick={() => setMapTheme('terrain')}
            className={`p-2 transition-colors ${mapTheme === 'terrain' ? 'bg-amber-500/30 text-amber-300' : 'text-slate-400 hover:text-slate-200'}`}
            title="Topographical Mountain Terrain"
          >
            <Compass size={16} />
          </button>
        </div>
      </div>

      {/* Map Legend Overlay (Bottom Left) */}
      <div className="absolute bottom-24 left-4 z-20 hidden lg:block bg-slate-900/90 border border-amber-500/25 rounded-xl p-3 backdrop-blur-md shadow-xl text-xs max-w-xs pointer-events-auto">
        <div className="font-serif font-bold text-amber-300 mb-2 flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
          <span>📜</span> Map Cartography Legend
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span>Bala Kanda</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span>Ayodhya Kanda</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span>Aranya Kanda</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span>Kishkindha Kanda</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-pink-500"></span>
            <span>Sundara Kanda</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-600"></span>
            <span>Yuddha Kanda</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
            <span>Uttara Kanda</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 border-t border-dashed border-yellow-400"></span>
            <span className="text-[10px]">Pushpaka Aerial</span>
          </div>
        </div>
      </div>
    </div>
  );
};
