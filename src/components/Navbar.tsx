import React from 'react';
import { 
  Compass, 
  Map as MapIcon, 
  Layers, 
  BookOpen, 
  Search, 
  Volume2, 
  VolumeX, 
  Info,
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
  return (
    <header className="relative z-30 bg-[#121622]/95 backdrop-blur-md border-b border-amber-500/20 px-4 py-2.5 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Title */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 border border-amber-400/30">
              <span className="text-xl">🏹</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif font-bold text-lg md:text-xl tracking-wide gold-text-gradient">
                  श्रीराम चरित यात्रा
                </h1>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium">
                  Treta Yuga Map
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans hidden sm:block">
                Interactive Ancient India Cartography & Narrative Epic Route
              </p>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={onToggleAudio}
              className={`p-2 rounded-lg border transition-colors ${
                isPlayingAudio 
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' 
                  : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
              title={isPlayingAudio ? "Mute sacred drone" : "Play sacred drone"}
            >
              {isPlayingAudio ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <button
              onClick={onOpenStoryReader}
              className="p-2 rounded-lg bg-amber-600/30 text-amber-300 border border-amber-500/30"
              title="Story Reader"
            >
              <BookOpen size={16} />
            </button>
          </div>
        </div>

        {/* Search Bar with Autocomplete Dropdown */}
        <div className="relative w-full md:w-80">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search place, character, or event..."
              className="w-full bg-slate-900/80 border border-slate-700/80 focus:border-amber-500/60 rounded-lg pl-9 pr-4 py-1.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500/40 transition-all"
            />
          </div>

          {/* Search Dropdown */}
          {searchQuery.trim().length > 0 && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#161c2d] border border-amber-500/30 rounded-xl shadow-2xl overflow-hidden max-h-72 overflow-y-auto z-50">
              {searchResults.map((wp) => (
                <button
                  key={wp.id}
                  onClick={() => {
                    onSelectWaypoint(wp);
                    setSearchQuery('');
                  }}
                  className="w-full text-left px-3.5 py-2.5 hover:bg-amber-500/10 border-b border-slate-800/80 last:border-b-0 flex items-start gap-2.5 transition-colors"
                >
                  <span className="text-base mt-0.5">📍</span>
                  <div>
                    <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                      {wp.ancientName}
                      <span className="text-[10px] text-slate-400">({wp.kanda})</span>
                    </div>
                    <div className="text-[11px] text-slate-300 line-clamp-1">{wp.title}</div>
                    <div className="text-[10px] text-slate-400">{wp.modernLocation}, {wp.modernStateOrCountry}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Map Layers & Feature Toggles */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {/* Ancient Kingdoms Toggle */}
          <button
            onClick={() => setShowAncientKingdoms(!showAncientKingdoms)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all shrink-0 ${
              showAncientKingdoms
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm shadow-amber-500/10'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Compass size={14} />
            Ancient Janapadas
          </button>

          {/* Modern Boundaries Toggle */}
          <button
            onClick={() => setShowModernBoundaries(!showModernBoundaries)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all shrink-0 ${
              showModernBoundaries
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm shadow-emerald-500/10'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <MapIcon size={14} />
            Modern States & Countries
          </button>

          {/* Route Polyline Toggle */}
          <button
            onClick={() => setShowRoutes(!showRoutes)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all shrink-0 ${
              showRoutes
                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50 shadow-sm shadow-indigo-500/10'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Layers size={14} />
            Sacred Route
          </button>

          {/* Story Book Reader Button */}
          <button
            onClick={onOpenStoryReader}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-amber-600 to-amber-700 text-white border border-amber-400/40 hover:from-amber-500 hover:to-amber-600 shadow-md shadow-amber-900/30 transition-all shrink-0"
          >
            <BookOpen size={14} />
            Epic Chronicle
          </button>

          {/* Ambient Sound Drone Toggle */}
          <button
            onClick={onToggleAudio}
            className={`hidden md:flex items-center justify-center p-2 rounded-lg border transition-all ${
              isPlayingAudio 
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm' 
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
            title={isPlayingAudio ? "Mute Tanpura/Veena Drone" : "Play Ambient Sacred Drone"}
          >
            {isPlayingAudio ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* About / Info */}
          <button
            onClick={onOpenAbout}
            className="flex items-center justify-center p-2 rounded-lg bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 transition-all shrink-0"
            title="About this Project & Canonical Sources"
          >
            <Info size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};
