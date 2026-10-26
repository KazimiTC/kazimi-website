const LISTEN_URL = 'https://kazimi-app.vercel.app/l/errant-nodes-spotify?src=website';

export default function ListenNowSection() {
  const neonGlowStyle = {
    textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
  };

  return (
    <section className="w-full py-20 bg-black flex flex-col items-center justify-center px-4">
      <h2
        className="text-3xl md:text-5xl font-bold tracking-widest text-[#ff2ec7] mb-8 text-center uppercase"
        style={neonGlowStyle}
      >
        Errant Nodes - out now
      </h2>

      <a
        href={LISTEN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-transparent border border-[#ff2ec7] text-[#ff2ec7] font-bold tracking-[0.25em] shadow-[0_0_10px_#ff2ec7] hover:bg-[#00f3ff] hover:border-[#00f3ff] hover:text-black hover:shadow-[0_0_10px_#00f3ff] transition-all duration-300 uppercase"
        style={neonGlowStyle}
      >
        Listen now
      </a>
    </section>
  );
}
