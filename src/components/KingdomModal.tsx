import React from 'react';
import { X, Crown, MapPin, Landmark, BookOpen } from 'lucide-react';
import { AncientKingdom } from '../types';

interface KingdomModalProps {
  kingdom: AncientKingdom | null;
  onClose: () => void;
}

export const KingdomModal: React.FC<KingdomModalProps> = ({
  kingdom,
  onClose,
}) => {
  if (!kingdom) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#141824] border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="relative p-5 border-b border-amber-500/20"
          style={{ background: `linear-gradient(135deg, ${kingdom.color}25 0%, #141824 100%)` }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xs font-semibold text-amber-300 uppercase tracking-widest flex items-center gap-1.5">
                <Crown size={14} /> Ancient Janapada / Realm
              </div>
              <h2 className="font-serif font-bold text-2xl text-white mt-1">
                {kingdom.name}
              </h2>
              <div className="text-sm text-amber-300/90 font-medium">
                {kingdom.sanskritName}
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 overflow-y-auto max-h-[70vh]">
          {/* Quick stats grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase tracking-wide flex items-center gap-1">
                <Landmark size={12} className="text-amber-400" /> Capital City
              </div>
              <div className="font-semibold text-sm text-slate-100 mt-0.5">
                {kingdom.capital}
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase tracking-wide flex items-center gap-1">
                <Crown size={12} className="text-amber-400" /> Sovereign / Ruler
              </div>
              <div className="font-semibold text-xs text-slate-100 mt-0.5 line-clamp-2">
                {kingdom.rulerDuringRamayana}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              About the Realm
            </div>
            <p className="text-xs leading-relaxed text-slate-200 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              {kingdom.description}
            </p>
          </div>

          {/* Ramayana Significance */}
          <div className="space-y-1.5">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen size={13} /> Significance in Ramayana
            </div>
            <p className="text-xs leading-relaxed text-amber-100/90 bg-amber-950/20 p-3.5 rounded-xl border border-amber-500/25">
              {kingdom.significance}
            </p>
          </div>

          {/* Modern Territory */}
          <div className="space-y-1.5">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin size={13} /> Modern Geographic Extent
            </div>
            <div className="text-xs text-emerald-200 bg-emerald-950/30 p-3 rounded-xl border border-emerald-500/30">
              📍 {kingdom.modernTerritory}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
