import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(error => {
          console.log('Audio play failed:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-32 z-50 bg-white/10 backdrop-blur-md rounded-xl p-3 shadow-2xl border border-white/20 md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-36 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:bottom-28">
      <audio
        ref={audioRef}
        src="/background-music.mp3"
        loop
        preload="auto"
      />
      
      <div className="flex items-center gap-2 md:gap-2 sm:gap-1">
        <button
          onClick={togglePlay}
          className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 md:w-10 md:h-10 sm:w-8 sm:h-8"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <FaPause className="text-white text-base md:text-base sm:text-xs" />
          ) : (
            <FaPlay className="text-white text-base ml-1 md:text-base md:ml-1 sm:text-xs sm:ml-0" />
          )}
        </button>

        <button
          onClick={toggleMute}
          className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 md:w-8 md:h-8 sm:w-6 sm:h-6"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <FaVolumeMute className="text-white text-xs md:text-xs sm:text-xs" />
          ) : (
            <FaVolumeUp className="text-white text-xs md:text-xs sm:text-xs" />
          )}
        </button>

        <div className="flex items-center gap-1 md:gap-1 sm:gap-0">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider md:w-16 sm:w-12"
            style={{
              background: `linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
