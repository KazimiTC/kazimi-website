import { useAudioPlayer } from '../contexts/AudioPlayerContext';

interface Video {
  id: string;
  title: string;
}

interface Track {
  url: string;
  title: string;
  artist: string;
}

const videos: Video[] = [
  {
    id: "dQw4w9WgXcQ",
    title: "KAZIMI - Latest Music Video"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "KAZIMI - Live Performance"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "KAZIMI - Behind the Scenes"
  }
];

// Sample tracks - replace with actual Spotify URLs
const tracks: Track[] = [
  {
    url: "spotify:track:1234567890",
    title: "Neon Dreams",
    artist: "KAZIMI"
  },
  {
    url: "spotify:track:0987654321",
    title: "Digital Sunset",
    artist: "KAZIMI"
  },
  {
    url: "spotify:track:5432109876",
    title: "Cyber Dawn",
    artist: "KAZIMI"
  }
];

export default function VideosSection() {
  const { playTrack } = useAudioPlayer();

  return (
    <section id="videos" className="min-h-screen flex items-center scroll-snap-align-start bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Videos</h2>
        
        {/* Videos Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto mb-16">
          {videos.map((video) => (
            <div key={video.id} className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Tracks List */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Listen on Spotify</h3>
          <div className="grid gap-2">
            {tracks.map((track) => (
              <button
                key={track.url}
                onClick={() => playTrack(track)}
                className="w-full bg-zinc-800 hover:bg-zinc-700 p-4 rounded-lg text-left flex items-center gap-4 group"
              >
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-500 text-white group-hover:bg-blue-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">{track.title}</div>
                  <div className="text-sm text-white/60">{track.artist}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 