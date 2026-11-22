import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Square, 
  Volume2, 
  VolumeX, 
  Languages, 
  Gauge, 
  Sparkles,
  Headphones
} from 'lucide-react';
import { Waypoint } from '../types';
import { narrationPlayer, NarrationLanguage } from '../utils/narrationPlayer';

interface AudioNarrationPlayerProps {
  waypoint: Waypoint;
  compact?: boolean;
}

export const AudioNarrationPlayer: React.FC<AudioNarrationPlayerProps> = ({
  waypoint,
  compact = false,
}) => {
  const [language, setLanguage] = useState<NarrationLanguage>('hi');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1.0);

  // Stop playback when waypoint changes
  useEffect(() => {
    narrationPlayer.stop();
    setIsPlaying(false);
    setIsPaused(false);
  }, [waypoint.id]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      narrationPlayer.stop();
    };
  }, []);

  const currentNarration = language === 'hi' 
    ? waypoint.narration.hindi 
    : waypoint.narration.english;

  const handleTogglePlay = () => {
    if (isPlaying) {
      if (isPaused) {
        narrationPlayer.resume();
        setIsPaused(false);
      } else {
        narrationPlayer.pause();
        setIsPaused(true);
      }
    } else {
      narrationPlayer.speak({
        text: `${currentNarration.title}. ${currentNarration.text}`,
        lang: language,
        rate: speed,
        onStart: () => {
          setIsPlaying(true);
          setIsPaused(false);
        },
        onEnd: () => {
          setIsPlaying(false);
          setIsPaused(false);
        },
        onError: () => {
          setIsPlaying(false);
          setIsPaused(false);
        },
      });
    }
  };

  const handleStop = () => {
    narrationPlayer.stop();
    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleSwitchLanguage = (newLang: NarrationLanguage) => {
    if (newLang === language) return;
    const wasPlaying = isPlaying;
    handleStop();
    setLanguage(newLang);
    if (wasPlaying) {
      setTimeout(() => {
        const nextNarration = newLang === 'hi' 
          ? waypoint.narration.hindi 
          : waypoint.narration.english;
        narrationPlayer.speak({
          text: `${nextNarration.title}. ${nextNarration.text}`,
          lang: newLang,
          rate: speed,
          onStart: () => {
            setIsPlaying(true);
            setIsPaused(false);
          },
          onEnd: () => {
            setIsPlaying(false);
            setIsPaused(false);
          },
          onError: () => {
            setIsPlaying(false);
            setIsPaused(false);
          },
        });
      }, 150);
    }
  };

  const cycleSpeed = () => {
    const speeds = [0.85, 1.0, 1.2];
    const nextIdx = (speeds.indexOf(speed) + 1) % speeds.length;
    const nextSpeed = speeds[nextIdx];
    setSpeed(nextSpeed);
    if (isPlaying && !isPaused) {
      handleStop();
      setTimeout(() => {
        narrationPlayer.speak({
          text: `${currentNarration.title}. ${currentNarration.text}`,
          lang: language,
          rate: nextSpeed,
          onStart: () => setIsPlaying(true),
          onEnd: () => setIsPlaying(false),
          onError: () => setIsPlaying(false),
        });
      }, 100);
    }
  };

  return (
    <div className={`rounded-2xl border transition-all ${
      isPlaying
        ? 'bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-slate-900/80 border-amber-500/50 shadow-lg shadow-amber-500/10'
        : 'bg-slate-900/70 border-slate-800'
    } ${compact ? 'p-3' : 'p-4'}`}>
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 rounded-lg ${
            isPlaying ? 'bg-amber-500 text-slate-950 animate-pulse' : 'bg-slate-800 text-amber-400'
          }`}>
            <Headphones size={15} />
          </div>
          <div>
            <div className="text-xs font-serif font-bold text-amber-200 flex items-center gap-1.5">
              <span>ऑडियो कथा | Audio Narration</span>
              {isPlaying && !isPaused && (
                <span className="flex items-center gap-0.5 ml-1">
                  <span className="w-1 h-3 bg-amber-400 animate-bounce rounded-full" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1 h-4 bg-amber-400 animate-bounce rounded-full" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1 h-2 bg-amber-400 animate-bounce rounded-full" style={{ animationDelay: '300ms' }}></span>
                </span>
              )}
            </div>
            <div className="text-[10px] text-slate-400">
              {isPlaying ? (isPaused ? 'Paused' : 'Playing Narration...') : 'Listen in Hindi or English'}
            </div>
          </div>
        </div>

        {/* Language Selector Pills */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => handleSwitchLanguage('hi')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              language === 'hi'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            हिन्दी
          </button>
          <button
            onClick={() => handleSwitchLanguage('en')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              language === 'en'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            English
          </button>
        </div>
      </div>

      {/* Playback Controls & Speed */}
      <div className="mt-3 flex items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
        <div className="flex items-center gap-2">
          {/* Main Play / Pause Button */}
          <button
            onClick={handleTogglePlay}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all shadow-md ${
              isPlaying && !isPaused
                ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                : 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white'
            }`}
          >
            {isPlaying && !isPaused ? (
              <>
                <Pause size={14} />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play size={14} />
                <span>{isPaused ? 'Resume' : 'Listen Now'}</span>
              </>
            )}
          </button>

          {/* Stop Button */}
          {isPlaying && (
            <button
              onClick={handleStop}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Stop Narration"
            >
              <Square size={13} />
            </button>
          )}

          {/* Speed Toggle */}
          <button
            onClick={cycleSpeed}
            className="px-2 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-amber-300 transition-colors"
            title="Narration Speed"
          >
            {speed}x
          </button>
        </div>

        <span className="text-[10px] text-slate-400 font-sans uppercase tracking-wider">
          {language === 'hi' ? 'हिंदी स्वर' : 'English Voice'}
        </span>
      </div>

      {/* Transcript Excerpt */}
      <div className="mt-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 text-[11px] leading-relaxed text-slate-300 font-sans">
        <span className="font-semibold text-amber-300 block mb-0.5">
          {currentNarration.title}
        </span>
        <p className="line-clamp-3 italic text-slate-300/90">
          "{currentNarration.text}"
        </p>
      </div>
    </div>
  );
};
