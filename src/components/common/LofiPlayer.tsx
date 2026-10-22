import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc } from 'lucide-react';

export const LofiPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Audio stream - Royalty Free Lofi Coding stream */}
      <audio
        ref={audioRef}
        src="https://stream.zeno.fm/f3wvbbqmdg8uv"
        preload="none"
        loop
      />

      <div className="glass-card p-3 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-3 backdrop-blur-md bg-slate-950/90 text-white">
        {/* Vinyl Disc Spin Animation */}
        <div className={`relative w-9 h-9 rounded-full bg-slate-900 border-2 border-emerald-500/50 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`}>
          <Disc className={`w-5 h-5 ${isPlaying ? 'text-emerald-400' : 'text-slate-500'}`} />
          <div className="absolute w-2 h-2 rounded-full bg-emerald-400"></div>
        </div>

        <div className="hidden sm:block text-xs pr-2">
          <div className="font-bold text-white flex items-center gap-1.5">
            <span>Chill Coding Radio</span>
            {isPlaying && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>}
          </div>
          <div className="text-[10px] text-slate-400 font-mono">Lo-Fi Beats • Focus Mode</div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={togglePlay}
            className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-colors"
            title={isPlaying ? 'Pause Lo-Fi' : 'Play Lo-Fi'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          <button
            onClick={toggleMute}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
