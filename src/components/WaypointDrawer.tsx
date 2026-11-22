import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  BookOpen, 
  Scroll, 
  Users, 
  Landmark, 
  ChevronRight, 
  ChevronLeft,
  Headphones,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { Waypoint } from '../types';
import { getKandaBadgeClass } from '../utils/geoUtils';
import { AudioNarrationPlayer } from './AudioNarrationPlayer';

interface WaypointDrawerProps {
  waypoint: Waypoint | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const WaypointDrawer: React.FC<WaypointDrawerProps> = ({
  waypoint,
  onClose,
  onNext,
  onPrev,
}) => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'scripture' | 'heritage'>('narrative');
  const [scriptureSubTab, setScriptureSubTab] = useState<'valmiki' | 'tulsidas'>('valmiki');

  if (!waypoint) return null;

  return (
    <aside className="fixed top-20 bottom-24 right-4 z-30 w-full max-w-md bg-[#0f1422]/95 backdrop-blur-2xl border border-amber-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300 transition-all">
      {/* Header */}
      <div className="relative p-4 md:p-5 border-b border-amber-500/20 bg-gradient-to-r from-amber-950/40 via-[#121727] to-[#0f1422]">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-amber-500/20 border border-amber-300/40 shrink-0 text-base">
              #{waypoint.order}
            </div>
            <div>
              <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${getKandaBadgeClass(waypoint.kanda)}`}>
                {waypoint.kanda}
              </span>
              <h2 className="font-serif font-bold text-lg text-amber-200 mt-1 leading-snug">
                {waypoint.ancientName}
              </h2>
              <div className="text-xs text-amber-400 font-medium">
                {waypoint.sanskritName}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Close panel"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modern Location Badge */}
        <div className="mt-3 flex items-center justify-between gap-2 text-xs text-slate-300 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-slate-800">
          <div className="flex items-center gap-1.5 truncate">
            <MapPin size={13} className="text-emerald-400 shrink-0" />
            <span className="truncate"><strong>{waypoint.modernLocation}</strong>, {waypoint.modernStateOrCountry}</span>
          </div>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono shrink-0">
            {waypoint.travelMode.replace('_', ' ')}
          </span>
        </div>

        {/* View Tabs */}
        <div className="flex items-center gap-1 mt-3 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('narrative')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'narrative'
                ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Scroll size={13} />
            <span>Story & Audio</span>
          </button>

          <button
            onClick={() => setActiveTab('scripture')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'scripture'
                ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen size={13} />
            <span>Scripture</span>
          </button>

          <button
            onClick={() => setActiveTab('heritage')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'heritage'
                ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Landmark size={13} />
            <span>Heritage</span>
          </button>
        </div>
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4">
        
        {/* TAB 1: NARRATIVE & AUDIO */}
        {activeTab === 'narrative' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Audio Narration Player */}
            <AudioNarrationPlayer waypoint={waypoint} />

            {/* Key Event Card */}
            <div className="bg-gradient-to-r from-amber-500/15 to-transparent border border-amber-500/25 p-3.5 rounded-2xl">
              <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <span>✨</span> Core Milestone
              </div>
              <div className="font-serif font-bold text-sm text-slate-100 mt-1">
                {waypoint.title}
              </div>
              <div className="text-xs text-amber-300/90 mt-0.5 font-medium">
                {waypoint.keyEvent}
              </div>
            </div>

            {/* Narrative Context */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Scroll size={13} className="text-amber-400" /> Complete Episode Chronicle
              </div>
              <p className="text-xs leading-relaxed text-slate-200 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 font-sans">
                {waypoint.detailedNarrative}
              </p>
            </div>

            {/* Characters Present */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Users size={13} className="text-amber-400" /> Sacred Figures Present
              </div>
              <div className="flex flex-wrap gap-1.5">
                {waypoint.charactersInvolved.map((char) => (
                  <span
                    key={char}
                    className="text-xs px-2.5 py-1 rounded-xl bg-slate-900/90 text-amber-200 border border-slate-800"
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SCRIPTURE */}
        {activeTab === 'scripture' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Scripture Sub-tabs */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setScriptureSubTab('valmiki')}
                className={`flex-1 text-xs font-semibold py-1.5 rounded-lg transition-all ${
                  scriptureSubTab === 'valmiki'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Valmiki Ramayana (मूल संस्कृत)
              </button>
              {waypoint.scripture.tulsidas && (
                <button
                  onClick={() => setScriptureSubTab('tulsidas')}
                  className={`flex-1 text-xs font-semibold py-1.5 rounded-lg transition-all ${
                    scriptureSubTab === 'tulsidas'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  रामचरितमानस (अवधी)
                </button>
              )}
            </div>

            {/* Valmiki Shloka */}
            {scriptureSubTab === 'valmiki' && (
              <div className="bg-slate-950/70 border border-amber-500/30 p-4 rounded-2xl space-y-3">
                <div className="text-xs font-bold text-amber-400 font-mono flex items-center justify-between border-b border-slate-800 pb-2">
                  <span>{waypoint.scripture.valmiki.kanda}</span>
                  <span>Sarga {waypoint.scripture.valmiki.sarga}{waypoint.scripture.valmiki.shloka ? `, Shloka ${waypoint.scripture.valmiki.shloka}` : ''}</span>
                </div>
                <div className="font-serif text-sm text-amber-100 leading-loose italic bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/20 text-center">
                  "{waypoint.scripture.valmiki.text}"
                </div>
                <div className="text-xs text-slate-300 leading-relaxed pt-1">
                  <span className="text-amber-400 font-semibold block mb-1">English Translation:</span>
                  {waypoint.scripture.valmiki.translation}
                </div>
              </div>
            )}

            {/* Tulsidas Chaupai */}
            {scriptureSubTab === 'tulsidas' && waypoint.scripture.tulsidas && (
              <div className="bg-slate-950/70 border border-amber-500/30 p-4 rounded-2xl space-y-3">
                <div className="text-xs font-bold text-amber-400 font-mono flex items-center justify-between border-b border-slate-800 pb-2">
                  <span>{waypoint.scripture.tulsidas.kanda}</span>
                  <span>{waypoint.scripture.tulsidas.dohaOrChaupai}</span>
                </div>
                <div className="font-serif text-sm text-amber-100 leading-loose italic bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/20 text-center">
                  "{waypoint.scripture.tulsidas.text}"
                </div>
                <div className="text-xs text-slate-300 leading-relaxed pt-1">
                  <span className="text-amber-400 font-semibold block mb-1">Hindi / English Meaning:</span>
                  {waypoint.scripture.tulsidas.meaning}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: HERITAGE & GEOGRAPHY */}
        {activeTab === 'heritage' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Present-day Temple */}
            {waypoint.presentDayTempleOrSite && (
              <div className="bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-2xl space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Landmark size={14} /> Sacred Temple / Pilgrimage Site Today
                </div>
                <div className="text-sm font-semibold text-emerald-200">
                  {waypoint.presentDayTempleOrSite}
                </div>
                <div className="text-xs text-slate-300">
                  Located in modern-day <strong>{waypoint.modernLocation}</strong>, {waypoint.modernStateOrCountry}.
                </div>
              </div>
            )}

            {/* Historical Significance */}
            <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-2xl space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Historical & Spiritual Significance
              </div>
              <p className="text-xs leading-relaxed text-slate-200">
                {waypoint.historicalSignificance}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation Bar */}
      <div className="p-3 md:p-4 border-t border-amber-500/20 bg-slate-950/90 flex items-center justify-between">
        <button
          onClick={onPrev}
          className="flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-amber-300 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 transition-colors"
        >
          <ChevronLeft size={15} /> Prev
        </button>

        <span className="text-xs font-mono text-slate-400">
          <strong className="text-amber-300">{waypoint.order}</strong> of 28
        </span>

        <button
          onClick={onNext}
          className="flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-amber-300 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 transition-colors"
        >
          Next <ChevronRight size={15} />
        </button>
      </div>
    </aside>
  );
};
