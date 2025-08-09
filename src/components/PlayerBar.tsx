import { useEffect, useRef } from 'react';
import { useAudioPlayer } from '../contexts/AudioPlayerContext';

export default function PlayerBar() {
  const { currentTrack, isPlaying, progress, togglePlay, setProgress } = useAudioPlayer();
  const progressInterval = useRef<ReturnType<typeof setInterval>>();

  // Simulate progress updates (in a real app, this would come from the Spotify SDK)
  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev: number) => {
          if (prev >= 100) {
            if (progressInterval.current) {
              clearInterval(progressInterval.current);
            }
            return 100;
          }
          return prev + 0.1;
        });
      }, 100);
    } else if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying, setProgress]);

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-12 md:bottom-4 left-4 z-50 w-64 h-12 bg-neutral-900/90 backdrop-blur rounded-lg shadow-lg flex items-center overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-neutral-800 w-full">
        <div 
          className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-white hover:text-blue-400 transition-colors"
      >
        {isPlaying ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          </svg>
        )}
      </button>

      {/* Track Info */}
      <div className="flex-1 min-w-0 px-3">
        <div className="truncate text-sm font-medium text-white">
          {currentTrack.title}
        </div>
        <div className="truncate text-xs text-white/60">
          {currentTrack.artist}
        </div>
      </div>
    </div>
  );
} 