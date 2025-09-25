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
    <section id="videos" className="min-h-screen flex items-center scroll-snap-align-start bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Videos</h2>
        
        {/* Videos Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
}