// Robust Web Speech API narration service for Hindi and English

export type NarrationLanguage = 'hi' | 'en';

class NarrationPlayerService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking: boolean = false;
  private isPausedState: boolean = false;
  private voices: SpeechSynthesisVoice[] = [];
  private resumeTimer: number | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  public getVoices(): SpeechSynthesisVoice[] {
    if (this.voices.length === 0 && this.synth) {
      this.loadVoices();
    }
    return this.voices;
  }

  private getVoiceForLanguage(lang: NarrationLanguage): SpeechSynthesisVoice | null {
    const allVoices = this.getVoices();
    if (allVoices.length === 0) return null;

    if (lang === 'hi') {
      // Look for Hindi voice
      const hindiVoice = allVoices.find(v => 
        v.lang.toLowerCase().startsWith('hi') || 
        v.name.toLowerCase().includes('hindi') ||
        v.name.toLowerCase().includes('lekha')
      );
      if (hindiVoice) return hindiVoice;
    } else {
      // Look for Indian English or natural English voice
      const indianEnglish = allVoices.find(v => v.lang.toLowerCase() === 'en-in');
      if (indianEnglish) return indianEnglish;

      const anyEnglish = allVoices.find(v => v.lang.toLowerCase().startsWith('en'));
      if (anyEnglish) return anyEnglish;
    }

    return allVoices[0] || null;
  }

  public speak({
    text,
    lang,
    rate = 1.0,
    onStart,
    onEnd,
    onError,
  }: {
    text: string;
    lang: NarrationLanguage;
    rate?: number;
    onStart?: () => void;
    onEnd?: () => void;
    onError?: (err: unknown) => void;
  }) {
    if (!this.synth) {
      console.warn('Speech synthesis not supported in this browser.');
      onError?.(new Error('Speech synthesis not supported'));
      return;
    }

    this.stop();

    // Clean text of special decorative emojis or symbols for natural speech
    const cleanText = text
      .replace(/[🕉️🏹✨📍👑📜📖]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.rate = rate;
    utterance.pitch = lang === 'hi' ? 1.05 : 1.0;

    const matchedVoice = this.getVoiceForLanguage(lang);
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.isPausedState = false;
      onStart?.();

      // Chrome speech synthesis GC workaround
      if (this.resumeTimer) clearInterval(this.resumeTimer);
      this.resumeTimer = window.setInterval(() => {
        if (this.synth && this.synth.speaking && !this.isPausedState) {
          this.synth.pause();
          this.synth.resume();
        }
      }, 10000);
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.isPausedState = false;
      if (this.resumeTimer) {
        clearInterval(this.resumeTimer);
        this.resumeTimer = null;
      }
      this.currentUtterance = null;
      onEnd?.();
    };

    utterance.onerror = (e) => {
      this.isSpeaking = false;
      this.isPausedState = false;
      if (this.resumeTimer) {
        clearInterval(this.resumeTimer);
        this.resumeTimer = null;
      }
      this.currentUtterance = null;
      onError?.(e);
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pause() {
    if (this.synth && this.synth.speaking && !this.isPausedState) {
      this.synth.pause();
      this.isPausedState = true;
    }
  }

  public resume() {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
      this.isPausedState = false;
    }
  }

  public stop() {
    if (this.resumeTimer) {
      clearInterval(this.resumeTimer);
      this.resumeTimer = null;
    }
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
    this.isPausedState = false;
    this.currentUtterance = null;
  }

  public getStatus() {
    return {
      isSpeaking: this.isSpeaking,
      isPaused: this.isPausedState,
      hasSynth: !!this.synth,
    };
  }
}

export const narrationPlayer = new NarrationPlayerService();
