interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  {
    id: "m_HqnOCHKkE",
    title: "Storming Jupiter - LIVE"
  }
];

export default function VideosSection() {
  return (
    /* Changed id to "watch" so the nav link #watch functions correctly */
    <section id="watch" className="min-h-screen flex items-center scroll-snap-align-start bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Changed heading text to "Watch" */}
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Watch</h2>
        
        {/* Videos Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                className="w-full h-full rounded-lg shadow-2xl shadow-pink-500/10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}