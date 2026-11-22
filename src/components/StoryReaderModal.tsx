import React, { useState } from 'react';
import { X, BookOpen, ChevronRight, ChevronLeft, MapPin, Search } from 'lucide-react';
import { Waypoint, KandaType } from '../types';
import { getKandaBadgeClass } from '../utils/geoUtils';

interface StoryReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  waypoints: Waypoint[];
  onSelectWaypointOnMap: (wp: Waypoint) => void;
}

export const StoryReaderModal: React.FC<StoryReaderModalProps> = ({
  isOpen,
  onClose,
  waypoints,
  onSelectWaypointOnMap,
}) => {
  const [selectedKanda, setSelectedKanda] = useState<string | null>(null);
  const [readingIndex, setReadingIndex] = useState<number>(0);

  if (!isOpen) return null;

  const currentWp = waypoints[readingIndex];

  const handleNext = () => {
    if (readingIndex < waypoints.length - 1) {
      setReadingIndex(readingIndex + 1);
    }
  };

  const handlePrev = () => {
    if (readingIndex > 0) {
      setReadingIndex(readingIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl h-[88vh] bg-[#121622] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 md:p-5 border-b border-amber-500/20 bg-slate-900/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white text-lg shadow-md">
              📖
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg md:text-xl text-amber-200">
                रामायण महागाथा | The Sacred Epic Chronicle
              </h2>
              <p className="text-xs text-slate-400">
                Chronological narrative from Divine Advent to Sarayu Mahaprasthana
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Reader Layout: Left chapter index + Right reading page */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Chapters Sidebar */}
          <div className="w-full md:w-72 border-r border-slate-800 bg-slate-950/60 overflow-y-auto p-3 space-y-1.5 shrink-0 hidden md:block">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 py-1">
              All 28 Milestones
            </div>
            {waypoints.map((wp, idx) => (
              <button
                key={wp.id}
                onClick={() => setReadingIndex(idx)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                  idx === readingIndex
                    ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 font-semibold'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <span className="font-mono text-amber-400/80 text-[11px] mt-0.5">#{wp.order}</span>
                <div className="min-w-0">
                  <div className="truncate">{wp.ancientName}</div>
                  <div className="text-[10px] text-slate-500 truncate">{wp.kanda}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Main Reading Canvas */}
          {currentWp && (
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 bg-[#0f131e]">
              {/* Milestone Banner */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4">
                <div>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getKandaBadgeClass(currentWp.kanda)}`}>
                    {currentWp.kanda} • Milestone #{currentWp.order} of {waypoints.length}
                  </span>
                  <h1 className="font-serif font-bold text-2xl md:text-3xl text-amber-200 mt-2">
                    {currentWp.title}
                  </h1>
                  <div className="text-sm text-amber-400 font-medium mt-0.5">
                    {currentWp.ancientName} ({currentWp.sanskritName})
                  </div>
                </div>

                <button
                  onClick={() => {
                    onSelectWaypointOnMap(currentWp);
                    onClose();
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold transition-all"
                >
                  <MapPin size={14} /> Locate on Map
                </button>
              </div>

              {/* Modern Geography */}
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <span className="text-emerald-400 font-bold">📍 Modern Geography:</span>
                <span>{currentWp.modernLocation}, {currentWp.modernStateOrCountry}</span>
                {currentWp.presentDayTempleOrSite && (
                  <span className="text-slate-400">• Heritage: {currentWp.presentDayTempleOrSite}</span>
                )}
              </div>

              {/* Story Narrative */}
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-base text-slate-100 flex items-center gap-2">
                  <span>📜</span> Narrative Chronicle
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-slate-200 bg-slate-900/40 p-4 rounded-2xl border border-slate-800/80">
                  {currentWp.detailedNarrative}
                </p>
              </div>

              {/* Characters Involved */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Figures Involved in this Milestone:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentWp.charactersInvolved.map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-lg bg-slate-800 text-amber-200 text-xs border border-slate-700">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Canonical Shlokas & Verses */}
              <div className="space-y-4 pt-2">
                <h3 className="font-serif font-bold text-base text-amber-300 flex items-center gap-2">
                  <span>🕉️</span> Canonical Scripture Citations
                </h3>

                {/* Valmiki */}
                <div className="bg-amber-950/20 border border-amber-500/30 p-4 rounded-2xl space-y-2">
                  <div className="text-xs font-bold text-amber-400">
                    Valmiki Ramayana ({currentWp.scripture.valmiki.kanda}, Sarga {currentWp.scripture.valmiki.sarga})
                  </div>
                  <div className="font-serif text-sm md:text-base text-amber-100 italic leading-relaxed bg-amber-900/20 p-3 rounded-xl border border-amber-500/20">
                    "{currentWp.scripture.valmiki.text}"
                  </div>
                  <div className="text-xs text-slate-300">
                    <strong>Translation:</strong> {currentWp.scripture.valmiki.translation}
                  </div>
                </div>

                {/* Tulsidas */}
                {currentWp.scripture.tulsidas && (
                  <div className="bg-slate-900/60 border border-slate-700/80 p-4 rounded-2xl space-y-2">
                    <div className="text-xs font-bold text-amber-400">
                      Ramcharitmanas ({currentWp.scripture.tulsidas.kanda}, {currentWp.scripture.tulsidas.dohaOrChaupai})
                    </div>
                    <div className="font-serif text-sm text-slate-100 italic leading-relaxed bg-slate-950/40 p-3 rounded-xl border border-slate-800">
                      "{currentWp.scripture.tulsidas.text}"
                    </div>
                    <div className="text-xs text-slate-300">
                      <strong>Meaning:</strong> {currentWp.scripture.tulsidas.meaning}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Pagination Bar */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={readingIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-slate-200 text-xs font-semibold transition-colors"
          >
            <ChevronLeft size={16} /> Previous Milestone
          </button>

          <span className="text-xs text-slate-400 font-mono">
            {readingIndex + 1} / {waypoints.length}
          </span>

          <button
            onClick={handleNext}
            disabled={readingIndex === waypoints.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-slate-200 text-xs font-semibold transition-colors"
          >
            Next Milestone <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
