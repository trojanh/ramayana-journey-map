import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Square, 
  Volume2, 
  Languages, 
  Headphones,
  ChevronDown,
  ChevronUp,
  Sparkles
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
  const [showFullTranscript, setShowFullTranscript] = useState<boolean>(false);

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
    <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
      isPlaying
        ? 'bg-gradient-to-br from-amber-950/60 via-slate-900/90 to-[#0e1320] border-amber-500/50 shadow-xl shadow-amber-500/10'
        : 'bg-[#101524]/90 border-slate-800/90 hover:border-amber-500/30'
    } ${compact ? 'p-3' : 'p-4'}`}>
      
      {/* Background Ambient Glow when playing */}
      {isPlaying && !isPaused && (
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl pointer-events-none animate-pulse" />
      )}

      {/* Main Bar */}
      <div className="flex items-center justify-between gap-3">
        {/* Play/Pause Button with Soundwave */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleTogglePlay}
            className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200 shadow-md ${
              isPlaying && !isPaused
                ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 ring-4 ring-amber-400/30 scale-105'
                : 'bg-gradient-to-br from-amber-500/20 to-amber-600/30 text-amber-300 border border-amber-500/40 hover:bg-amber-500 hover:text-slate-950 hover:scale-105'
            }`}
            title={isPlaying && !isPaused ? "Pause Audio Narration" : "Play Audio Narration"}
          >
            {isPlaying && !isPaused ? (
              <Pause size={18} className="fill-current" />
            ) : (
              <Play size={18} className="fill-current ml-0.5" />
            )}
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-xs tracking-wide text-amber-200">
                {language === 'hi' ? 'स्वर कथा वाचन' : 'Voice Narration'}
              </span>
              
              {/* Animated Soundwave Equalizer */}
              {isPlaying && !isPaused && (
                <div className="flex items-center gap-0.5 h-4">
                  <span className="w-0.5 bg-amber-400 rounded-full wave-bar" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-0.5 bg-amber-400 rounded-full wave-bar" style={{ animationDelay: '200ms' }}></span>
                  <span className="w-0.5 bg-amber-400 rounded-full wave-bar" style={{ animationDelay: '400ms' }}></span>
                  <span className="w-0.5 bg-amber-400 rounded-full wave-bar" style={{ animationDelay: '100ms' }}></span>
                  <span className="w-0.5 bg-amber-400 rounded-full wave-bar" style={{ animationDelay: '300ms' }}></span>
                </div>
              )}
            </div>

            <div className="text-[11px] text-slate-400 font-sans flex items-center gap-1.5 mt-0.5">
              <span>{isPlaying ? (isPaused ? 'Paused' : 'Playing Narration...') : 'Narrated in Hindi & English'}</span>
            </div>
          </div>
        </div>

        {/* Right Controls: Language Selector & Speed */}
        <div className="flex items-center gap-1.5">
          {/* Language Toggle Pills */}
          <div className="flex items-center bg-slate-950/80 p-0.5 rounded-xl border border-slate-800">
            <button
              onClick={() => handleSwitchLanguage('hi')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                language === 'hi'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => handleSwitchLanguage('en')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                language === 'en'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              EN
            </button>
          </div>

          {/* Speed Toggle */}
          <button
            onClick={cycleSpeed}
            className="px-2 py-1 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-amber-300 transition-colors"
            title="Speech Rate"
          >
            {speed}x
          </button>

          {/* Stop Button */}
          {isPlaying && (
            <button
              onClick={handleStop}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Stop"
            >
              <Square size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Narration Transcript Box */}
      <div className="mt-3 pt-2.5 border-t border-slate-800/80">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] uppercase font-bold text-amber-400/90 tracking-wider flex items-center gap-1">
            <Sparkles size={11} /> {currentNarration.title}
          </span>
          <button
            onClick={() => setShowFullTranscript(!showFullTranscript)}
            className="text-[10px] text-slate-400 hover:text-amber-300 flex items-center gap-0.5 transition-colors"
          >
            {showFullTranscript ? 'Show less' : 'Read full'}
            {showFullTranscript ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>

        <p className={`text-xs leading-relaxed text-slate-200/90 font-serif italic ${
          showFullTranscript ? '' : 'line-clamp-2'
        }`}>
          "{currentNarration.text}"
        </p>
      </div>
    </div>
  );
};
