import React from 'react';
import { X, Book, Compass, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#131724] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-amber-500/20 bg-gradient-to-r from-amber-950/40 to-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 text-lg">
              📜
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-amber-200">
                About the Ramayana Sacred Cartography
              </h2>
              <p className="text-xs text-slate-400">
                Bridging Ancient Treta Yuga Geography with Modern India
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 overflow-y-auto max-h-[70vh] text-xs leading-relaxed text-slate-300">
          <div className="bg-amber-500/10 border border-amber-500/25 p-4 rounded-2xl">
            <h3 className="font-serif font-bold text-sm text-amber-200 flex items-center gap-2">
              <Sparkles size={14} className="text-amber-400" /> Purpose of this Web Application
            </h3>
            <p className="mt-1.5 text-slate-200">
              This interactive application visually charts the epic journey of Bhagavan Sri Rama from His divine advent in Ayodhya, through the 14-year forest exile across the ancient subcontinent (Bharata Varsha), to the battle in Lanka and the concluding scriptural events in the Uttara Kanda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-1.5">
              <div className="font-serif font-bold text-amber-300 text-sm flex items-center gap-1.5">
                <Book size={14} /> Valmiki Ramayana
              </div>
              <p className="text-slate-300">
                The <em>Adi Kavya</em> (First Epic Poem) composed in Sanskrit by Sage Valmiki, comprising 7 Kandas and ~24,000 verses. It forms the canonical architectural foundation for every route and sarga cited here.
              </p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-1.5">
              <div className="font-serif font-bold text-amber-300 text-sm flex items-center gap-1.5">
                <Heart size={14} /> Ramcharitmanas
              </div>
              <p className="text-slate-300">
                The 16th-century Awadhi devotional classic by Goswami Tulsidas. Revered throughout daily spiritual life, offering beloved Chaupais and Dohas cross-referenced at key milestones.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2">
            <div className="font-serif font-bold text-amber-300 text-sm flex items-center gap-1.5">
              <Compass size={14} /> Cartography & Modern Geopolitical Reconciliation
            </div>
            <p className="text-slate-300">
              The map features two interactive layers:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>
                <strong>Ancient Janapadas Layer:</strong> Highlights ancient kingdoms and territories during the Treta Yuga, such as Kosala, Videha, Kekaya, Dandakaranya, Kishkindha, and Lanka.
              </li>
              <li>
                <strong>Modern Boundaries Layer:</strong> Overlays modern Indian states (Uttar Pradesh, Bihar, MP, Maharashtra, Karnataka, Tamil Nadu, etc.) and neighboring countries (Nepal, Sri Lanka, Pakistan, Bangladesh) to provide instant geographic context.
              </li>
            </ul>
          </div>

          <div className="text-[11px] text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            Dedicated with devotion to the timeless heritage of Sanatana Dharma and the universal values of Satya, Dharma, and Karuna.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors"
          >
            Explore Map
          </button>
        </div>
      </div>
    </div>
  );
};
