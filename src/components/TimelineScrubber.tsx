import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  ChevronUp, 
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { Waypoint, KandaType } from '../types';
import { getKandaBadgeClass, getKandaColor } from '../utils/geoUtils';

interface TimelineScrubberProps {
  waypoints: Waypoint[];
  currentIndex: number;
  onSelectIndex: (idx: number) => void;
  isPlayingTour: boolean;
  onTogglePlayTour: () => void;
  activeKandaFilter: string | null;
  onFilterKanda: (kanda: string | null) => void;
}

const kandas: { name: KandaType; label: string }[] = [
  { name: 'Bala Kanda', label: 'बाल' },
  { name: 'Ayodhya Kanda', label: 'अयोध्या' },
  { name: 'Aranya Kanda', label: 'अरण्य' },
  { name: 'Kishkindha Kanda', label: 'किष्किन्धा' },
  { name: 'Sundara Kanda', label: 'सुन्दर' },
  { name: 'Yuddha Kanda', label: 'युद्ध' },
  { name: 'Uttara Kanda', label: 'उत्तर' },
];

export const TimelineScrubber: React.FC<TimelineScrubberProps> = ({
  waypoints,
  currentIndex,
  onSelectIndex,
  isPlayingTour,
  onTogglePlayTour,
  activeKandaFilter,
  onFilterKanda,
}) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const currentWaypoint = waypoints[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectIndex(currentIndex - 1);
    } else {
      onSelectIndex(waypoints.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < waypoints.length - 1) {
      onSelectIndex(currentIndex + 1);
    } else {
      onSelectIndex(0);
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 bg-[#0e1320]/90 hover:bg-slate-900 border border-amber-500/40 px-4 py-2 rounded-full text-xs text-amber-200 font-semibold shadow-2xl backdrop-blur-xl transition-all hover:scale-105"
        >
          <span>🏹 Timeline: #{currentIndex + 1} {currentWaypoint?.ancientName}</span>
          <ChevronUp size={14} />
        </button>
      </div>
    );
  }

  return (
    <div className="relative z-20 bg-[#0d111c]/95 backdrop-blur-2xl border-t border-amber-500/20 px-4 py-2.5 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto flex flex-col gap-2">
        
        {/* Top Mini Header: Kandas & Minimize Button */}
        <div className="flex items-center justify-between gap-2">
          {/* Kanda Filter Badges */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none flex-1">
            <button
              onClick={() => onFilterKanda(null)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all shrink-0 ${
                activeKandaFilter === null
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-sm'
                  : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              All Kandas ({waypoints.length})
            </button>

            {kandas.map((k) => {
              const isSelected = activeKandaFilter === k.name;
              return (
                <button
                  key={k.name}
                  onClick={() => onFilterKanda(isSelected ? null : k.name)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all shrink-0 flex items-center gap-1 ${
                    isSelected
                      ? 'bg-amber-500/25 text-amber-300 border-amber-400/60 shadow-sm'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <span>{k.name}</span>
                  <span className="text-[10px] text-slate-500">({k.label})</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setIsMinimized(true)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
            title="Minimize timeline"
          >
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Stepper Controls, Playback & Scrubber */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-0.5">
          {/* Controls: Play/Pause, Next/Prev */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-slate-950/80 text-slate-300 hover:text-amber-300 border border-slate-800 hover:border-amber-500/40 transition-all shadow-sm"
              title="Previous Waypoint"
            >
              <SkipBack size={15} />
            </button>

            <button
              onClick={onTogglePlayTour}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-xl font-bold text-xs border transition-all ${
                isPlayingTour
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/25 animate-pulse'
                  : 'bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold border-amber-400/40 hover:brightness-110 shadow-sm'
              }`}
            >
              {isPlayingTour ? (
                <>
                  <Pause size={14} className="fill-current" />
                  <span>Pause Tour</span>
                </>
              ) : (
                <>
                  <Play size={14} className="fill-current ml-0.5" />
                  <span>Auto Tour</span>
                </>
              )}
            </button>

            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-slate-950/80 text-slate-300 hover:text-amber-300 border border-slate-800 hover:border-amber-500/40 transition-all shadow-sm"
              title="Next Waypoint"
            >
              <SkipForward size={15} />
            </button>

            <span className="text-xs text-slate-400 font-mono ml-1">
              <strong className="text-amber-300">{currentIndex + 1}</strong> / {waypoints.length}
            </span>
          </div>

          {/* Current Waypoint Information Badge */}
          {currentWaypoint && (
            <div className="flex items-center gap-3 bg-slate-950/80 border border-amber-500/20 px-3.5 py-1.5 rounded-xl max-w-lg w-full md:w-auto">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold text-xs shrink-0">
                #{currentWaypoint.order}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-amber-200 text-xs truncate">
                    {currentWaypoint.ancientName}
                  </span>
                  <span className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.2 rounded-full border ${getKandaBadgeClass(currentWaypoint.kanda)}`}>
                    {currentWaypoint.kanda}
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 truncate">
                  {currentWaypoint.title}
                </div>
              </div>
            </div>
          )}

          {/* Visual Progress Bar & Slider */}
          <div className="w-full md:w-56 flex items-center gap-2">
            <input
              type="range"
              min={0}
              max={waypoints.length - 1}
              value={currentIndex}
              onChange={(e) => onSelectIndex(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-950 rounded-lg border border-slate-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
