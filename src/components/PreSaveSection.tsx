import { useState } from 'react';
import { motion } from 'framer-motion';

const PRESAVE_WIDGET_URL = 'https://show.co/social-unlock/56QSibSuu2iqtKbM0aWIwI/widget';

export default function PreSaveSection() {
  const [isOpen, setIsOpen] = useState(false);

  const neonGlowStyle = {
    textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
  };

  return (
    <section className="w-full py-20 bg-black flex flex-col items-center justify-center px-4">
      <h2
        className="text-3xl md:text-5xl font-bold tracking-widest text-[#ff2ec7] mb-8 text-center uppercase"
        style={neonGlowStyle}
      >
        Errant Nodes - out 8th October
      </h2>

      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="presave-widget"
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-8 py-4 bg-transparent border border-[#ff2ec7] text-[#ff2ec7] font-bold tracking-[0.25em] shadow-[0_0_10px_#ff2ec7] hover:bg-[#00f3ff] hover:border-[#00f3ff] hover:text-black hover:shadow-[0_0_10px_#00f3ff] transition-all duration-300 uppercase"
        style={neonGlowStyle}
      >
        {isOpen ? 'Hide' : 'Pre-save now'}
      </button>

      <motion.div
        id="presave-widget"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden w-full flex justify-center"
      >
        {isOpen && (
          <div className="pt-8">
            <iframe
              src={PRESAVE_WIDGET_URL}
              width={300}
              height={380}
              frameBorder="0"
              title="Errant Nodes pre-save widget"
              loading="lazy"
            />
          </div>
        )}
      </motion.div>
    </section>
  );
}
