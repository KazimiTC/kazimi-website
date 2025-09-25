import { type ReactNode, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
// The unused 'HTMLMotionProps' import has been removed from here

const navLinks = [
  { name: 'About', path: '#about' },
  { name: 'Tour', path: '#tour' },
  { name: 'Videos', path: '#videos' },
  { name: 'Contact', path: '#contact' },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollPosition > 50);
  }, []);

  useEffect(() => {
    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative">
        {/* HEADER: Fixed at the top */}
        <header
          className={`
            fixed top-0 left-0 right-0 z-50 
            transition-colors duration-500
            ${isScrolled ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent'}
          `}
        >
          <nav className="container mx-auto px-4">
            <div className="grid grid-cols-3 items-center h-16">
              {/* Left: Logo */}
              <div className="flex items-center">
                <a href="#home" className="group">
                  <motion.div
                    className="text-2xl font-bold text-neonPink group-hover:text-neonBlue transition-colors uppercase tracking-wider"
                    style={{ textShadow: '0 0 10px currentColor, 0 0 20px currentColor' }}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    Kazimi
                  </motion.div>
                </a>
              </div>

              {/* Center: Social Icons */}
              <div className="flex justify-center">
                <SocialLinks linkClassName="text-neonPink hover:text-neonBlue transition-colors" glow />
              </div>

              {/* Right: Nav Links */}
              <div className="hidden md:flex justify-end space-x-8">
                {navLinks.map((link) => (
                  <a key={link.path} href={link.path} className="group">
                    <motion.div
                      className="text-neonPink group-hover:text-neonBlue transition-colors uppercase tracking-wide"
                      style={{ textShadow: '0 0 10px currentColor, 0 0 20px currentColor' }}
                    >
                      {link.name}
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="bg-black text-white">
          {children}
        </main>
      </div>
  );
}