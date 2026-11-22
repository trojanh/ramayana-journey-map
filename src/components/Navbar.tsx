import React, { useState, useRef, useEffect } from 'react';
import { 
  Layers, 
  BookOpen, 
  Search, 
  Volume2, 
  VolumeX, 
  Info,
  Check,
  Compass,
  Map as MapIcon,
  Sun,
  Moon,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { Waypoint } from '../types';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showAncientKingdoms: boolean;
  setShowAncientKingdoms: (val: boolean) => void;
  showModernBoundaries: boolean;
  setShowModernBoundaries: (val: boolean) => void;
  showRoutes: boolean;
  setShowRoutes: (val: boolean) => void;
  onOpenStoryReader: () => void;
  onOpenAbout: () => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  searchResults: Waypoint[];
  onSelectWaypoint: (wp: Waypoint) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  showAncientKingdoms,
  setShowAncientKingdoms,
  showModernBoundaries,
  setShowModernBoundaries,
  showRoutes,
  setShowRoutes,
  onOpenStoryReader,
  onOpenAbout,
  isPlayingAudio,
  onToggleAudio,
  searchResults,
  onSelectWaypoint,
}) => {
  const [isLayersOpen, setIsLayersOpen] = useState<boolean>(false);
  const layersDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (layersDropdownRef.current && !layersDropdownRef.current.contains(event.target as Node)) {
        setIsLayersOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut '/' to search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="relative z-40 bg-[#0d111c]/95 backdrop-blur-xl border-b border-amber-500/20 px-4 md:px-6 py-2.5 shadow-xl transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Crest */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 border border-amber-400/30 shrink-0">
            <span className="text-xl">🏹</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif font-bold text-lg md:text-xl tracking-wide gold-text-gradient">
                श्रीराम चरित यात्रा
              </h1>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                Treta Yuga
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
              Sacred Cartography & Journey of Sri Rama
            </p>
          </div>
        </div>

        {/* Search Bar with Autocomplete Dropdown */}
        <div className="relative flex-1 max-w-sm hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={15} />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search place, character, or event... (Press /)"
              className="w-full bg-slate-950/70 border border-slate-800 focus:border-amber-500/60 rounded-xl pl-9 pr-8 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500/40 transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-200 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search Dropdown */}
          {searchQuery.trim().length > 0 && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#141926]/98 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden max-h-80 overflow-y-auto z-50 backdrop-blur-xl">
              <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-800 bg-slate-950/50">
                {searchResults.length} Waypoints Found
              </div>
              {searchResults.map((wp) => (
                <button
                  key={wp.id}
                  onClick={() => {
                    onSelectWaypoint(wp);
                    setSearchQuery('');
                  }}
                  className="w-full text-left px-3.5 py-2.5 hover:bg-amber-500/10 border-b border-slate-800/80 last:border-b-0 flex items-start gap-3 transition-colors group"
                >
                  <span className="text-amber-400 font-mono text-xs mt-0.5 group-hover:scale-110 transition-transform">
                    #{wp.order}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-amber-200 flex items-center gap-1.5">
                      <span className="truncate">{wp.ancientName}</span>
                      <span className="text-[10px] text-slate-400 font-normal shrink-0">({wp.kanda})</span>
                    </div>
                    <div className="text-[11px] text-slate-300 line-clamp-1">{wp.title}</div>
                    <div className="text-[10px] text-emerald-400/90 mt-0.5">📍 {wp.modernLocation}, {wp.modernStateOrCountry}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2">
          {/* Map Layers Dropdown Button */}
          <div className="relative" ref={layersDropdownRef}>
            <button
              onClick={() => setIsLayersOpen(!isLayersOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                isLayersOpen || showAncientKingdoms || showModernBoundaries
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              <Layers size={14} className="text-amber-400" />
              <span className="hidden md:inline">Map Layers</span>
              <ChevronDown size={13} className={`transition-transform duration-200 ${isLayersOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Layers Dropdown Menu */}
            {isLayersOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-[#141926]/98 border border-amber-500/30 rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                <div className="px-2.5 py-1 text-[10px] font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 mb-1">
                  Cartography Layers
                </div>

                {/* Ancient Kingdoms Toggle */}
                <button
                  onClick={() => setShowAncientKingdoms(!showAncientKingdoms)}
                  className="w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs text-slate-200 hover:bg-slate-850 hover:bg-amber-500/10 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Compass size={14} className="text-amber-400" />
                    <span>Ancient Janapadas</span>
                  </div>
                  {showAncientKingdoms && <Check size={14} className="text-amber-400" />}
                </button>

                {/* Modern Boundaries Toggle */}
                <button
                  onClick={() => setShowModernBoundaries(!showModernBoundaries)}
                  className="w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs text-slate-200 hover:bg-slate-850 hover:bg-amber-500/10 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MapIcon size={14} className="text-emerald-400" />
                    <span>Modern States & Countries</span>
                  </div>
                  {showModernBoundaries && <Check size={14} className="text-emerald-400" />}
                </button>

                {/* Route Lines Toggle */}
                <button
                  onClick={() => setShowRoutes(!showRoutes)}
                  className="w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs text-slate-200 hover:bg-slate-850 hover:bg-amber-500/10 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Layers size={14} className="text-indigo-400" />
                    <span>Sacred Journey Path</span>
                  </div>
                  {showRoutes && <Check size={14} className="text-indigo-400" />}
                </button>
              </div>
            )}
          </div>

          {/* Ambient Drone Audio Toggle */}
          <button
            onClick={onToggleAudio}
            className={`p-2 rounded-xl border transition-all ${
              isPlayingAudio 
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm ring-2 ring-amber-500/20' 
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
            title={isPlayingAudio ? "Mute Sacred Tanpura Drone" : "Play Sacred Tanpura Drone"}
          >
            {isPlayingAudio ? <Volume2 size={16} className="text-amber-400 animate-pulse" /> : <VolumeX size={16} />}
          </button>

          {/* Chronicle / Story Reader Button */}
          <button
            onClick={onOpenStoryReader}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold hover:brightness-110 shadow-md shadow-amber-500/20 transition-all shrink-0"
          >
            <BookOpen size={14} />
            <span className="hidden md:inline">Chronicle</span>
          </button>

          {/* About / Info */}
          <button
            onClick={onOpenAbout}
            className="p-2 rounded-xl bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700 transition-colors"
            title="About Canonical Sources & Cartography"
          >
            <Info size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};
