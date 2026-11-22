import React from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  MapPin,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { Waypoint, KandaType } from '../types';
import { getKandaBadgeClass } from '../utils/geoUtils';

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
  { name: 'Bala Kanda', label: 'बालकाण्ड' },
  { name: 'Ayodhya Kanda', label: 'अयोध्याकाण्ड' },
  { name: 'Aranya Kanda', label: 'अरण्यकाण्ड' },
  { name: 'Kishkindha Kanda', label: 'किष्किन्धाकाण्ड' },
  { name: 'Sundara Kanda', label: 'सुन्दरकाण्ड' },
  { name: 'Yuddha Kanda', label: 'युद्धकाण्ड' },
  { name: 'Uttara Kanda', label: 'उत्तरकाण्ड' },
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

  return (
    <div className="relative z-20 bg-[#121622]/95 backdrop-blur-md border-t border-amber-500/20 px-4 py-2.5 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-2">
        {/* Kanda Filter Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none justify-start md:justify-center">
          <button
            onClick={() => onFilterKanda(null)}
            className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all shrink-0 ${
              activeKandaFilter === null
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-sm shadow-amber-500/20'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
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
                className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all shrink-0 flex items-center gap-1 ${
                  isSelected
                    ? 'bg-amber-500/25 text-amber-300 border-amber-400/60 shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <span>{k.name}</span>
                <span className="text-[10px] text-slate-500">({k.label})</span>
              </button>
            );
          })}
        </div>

        {/* Stepper Controls & Waypoint Quick Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-amber-300 border border-slate-700/80 hover:border-amber-500/40 transition-all shadow-sm"
              title="Previous Waypoint"
            >
              <SkipBack size={16} />
            </button>

            <button
              onClick={onTogglePlayTour}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs border shadow-lg transition-all ${
                isPlayingTour
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/25 animate-pulse'
                  : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-400/40 hover:from-amber-500 hover:to-amber-600'
              }`}
            >
              {isPlayingTour ? (
                <>
                  <Pause size={15} />
                  <span>Pause Tour</span>
                </>
              ) : (
                <>
                  <Play size={15} />
                  <span>Auto Tour</span>
                </>
              )}
            </button>

            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-amber-300 border border-slate-700/80 hover:border-amber-500/40 transition-all shadow-sm"
              title="Next Waypoint"
            >
              <SkipForward size={16} />
            </button>

            <span className="text-xs text-slate-400 font-mono ml-1">
              <span className="text-amber-300 font-bold">{currentIndex + 1}</span> / {waypoints.length}
            </span>
          </div>

          {/* Current Waypoint Banner */}
          {currentWaypoint && (
            <div className="flex items-center gap-3 bg-slate-900/60 border border-amber-500/20 px-3.5 py-1.5 rounded-xl max-w-xl w-full sm:w-auto">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold text-xs shrink-0">
                #{currentWaypoint.order}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-amber-300 text-xs sm:text-sm truncate">
                    {currentWaypoint.ancientName}
                  </span>
                  <span className={`text-[10px] px-2 py-0.2 rounded-full border ${getKandaBadgeClass(currentWaypoint.kanda)}`}>
                    {currentWaypoint.kanda}
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 truncate">
                  {currentWaypoint.title}
                </div>
              </div>
            </div>
          )}

          {/* Timeline Slider / Scrubber */}
          <div className="w-full sm:w-48 flex items-center gap-2">
            <input
              type="range"
              min={0}
              max={waypoints.length - 1}
              value={currentIndex}
              onChange={(e) => onSelectIndex(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
