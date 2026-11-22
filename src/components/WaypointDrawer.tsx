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
  Share2,
  Compass
} from 'lucide-react';
import { Waypoint } from '../types';
import { getKandaBadgeClass } from '../utils/geoUtils';

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
  const [scriptureTab, setScriptureTab] = useState<'valmiki' | 'tulsidas'>('valmiki');

  if (!waypoint) return null;

  return (
    <aside className="fixed top-16 bottom-24 right-4 z-30 w-full max-w-md bg-[#131724]/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="relative p-4 border-b border-amber-500/20 bg-gradient-to-r from-amber-950/40 via-slate-900/60 to-slate-900/40">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-bold text-white shadow-lg shadow-amber-500/20 border border-amber-400/40 shrink-0">
              #{waypoint.order}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getKandaBadgeClass(waypoint.kanda)}`}>
                  {waypoint.kanda}
                </span>
              </div>
              <h2 className="font-serif font-bold text-lg text-amber-200 mt-0.5 leading-snug">
                {waypoint.ancientName}
              </h2>
              <div className="text-xs text-amber-400/90 font-medium">
                {waypoint.sanskritName}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modern Location Tag */}
        <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-300 bg-slate-950/50 px-2.5 py-1.5 rounded-lg border border-slate-800">
          <MapPin size={13} className="text-emerald-400 shrink-0" />
          <span>Modern: <strong>{waypoint.modernLocation}</strong>, {waypoint.modernStateOrCountry}</span>
        </div>
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Title & Key Event */}
        <div className="bg-amber-500/10 border border-amber-500/25 p-3 rounded-xl">
          <div className="text-xs font-semibold text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
            <span>✨</span> Key Event
          </div>
          <div className="font-serif font-bold text-sm text-slate-100 mt-1">
            {waypoint.title}
          </div>
          <div className="text-xs text-amber-200/90 mt-0.5 font-medium">
            {waypoint.keyEvent}
          </div>
        </div>

        {/* Detailed Narrative */}
        <div className="space-y-1.5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Scroll size={13} className="text-amber-400" /> Narrative & Context
          </div>
          <p className="text-xs leading-relaxed text-slate-200 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            {waypoint.detailedNarrative}
          </p>
        </div>

        {/* Characters Involved */}
        <div className="space-y-1.5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Users size={13} className="text-amber-400" /> Characters Present
          </div>
          <div className="flex flex-wrap gap-1.5">
            {waypoint.charactersInvolved.map((char) => (
              <span
                key={char}
                className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/80 text-amber-200/90 border border-slate-700"
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Scripture References (Dual Tabs) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen size={13} className="text-amber-400" /> Scripture Source
            </div>
            <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800">
              <button
                onClick={() => setScriptureTab('valmiki')}
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-md transition-all ${
                  scriptureTab === 'valmiki'
                    ? 'bg-amber-500 text-slate-950'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Valmiki Ramayana
              </button>
              {waypoint.scripture.tulsidas && (
                <button
                  onClick={() => setScriptureTab('tulsidas')}
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-md transition-all ${
                    scriptureTab === 'tulsidas'
                      ? 'bg-amber-500 text-slate-950'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Ramcharitmanas
                </button>
              )}
            </div>
          </div>

          {/* Valmiki Tab */}
          {scriptureTab === 'valmiki' && (
            <div className="bg-slate-900/80 border border-amber-500/20 p-3 rounded-xl space-y-2">
              <div className="text-[10px] text-amber-400 font-mono">
                {waypoint.scripture.valmiki.kanda} • Sarga {waypoint.scripture.valmiki.sarga}
                {waypoint.scripture.valmiki.shloka && `, Shloka ${waypoint.scripture.valmiki.shloka}`}
              </div>
              <div className="text-xs text-amber-100 font-serif leading-relaxed italic bg-amber-950/20 p-2.5 rounded-lg border border-amber-500/20">
                "{waypoint.scripture.valmiki.text}"
              </div>
              <div className="text-[11px] text-slate-300 leading-normal">
                <strong>Translation:</strong> {waypoint.scripture.valmiki.translation}
              </div>
            </div>
          )}

          {/* Tulsidas Tab */}
          {scriptureTab === 'tulsidas' && waypoint.scripture.tulsidas && (
            <div className="bg-slate-900/80 border border-amber-500/20 p-3 rounded-xl space-y-2">
              <div className="text-[10px] text-amber-400 font-mono">
                {waypoint.scripture.tulsidas.kanda} • {waypoint.scripture.tulsidas.dohaOrChaupai}
              </div>
              <div className="text-xs text-amber-100 font-serif leading-relaxed italic bg-amber-950/20 p-2.5 rounded-lg border border-amber-500/20">
                "{waypoint.scripture.tulsidas.text}"
              </div>
              <div className="text-[11px] text-slate-300 leading-normal">
                <strong>Meaning:</strong> {waypoint.scripture.tulsidas.meaning}
              </div>
            </div>
          )}
        </div>

        {/* Present Day Heritage / Temple */}
        {waypoint.presentDayTempleOrSite && (
          <div className="space-y-1.5">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Landmark size={13} className="text-emerald-400" /> Present-Day Heritage Shrine
            </div>
            <div className="text-xs text-emerald-200 bg-emerald-950/30 border border-emerald-500/30 p-2.5 rounded-xl">
              📍 {waypoint.presentDayTempleOrSite}
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="p-3 border-t border-amber-500/20 bg-slate-900/90 flex items-center justify-between">
        <button
          onClick={onPrev}
          className="flex items-center gap-1 text-xs text-slate-300 hover:text-amber-300 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          <ChevronLeft size={14} /> Previous
        </button>

        <span className="text-[11px] text-slate-400 font-mono">
          Milestone {waypoint.order} of 28
        </span>

        <button
          onClick={onNext}
          className="flex items-center gap-1 text-xs text-slate-300 hover:text-amber-300 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          Next <ChevronRight size={14} />
        </button>
      </div>
    </aside>
  );
};
