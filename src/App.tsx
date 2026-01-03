import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import TourSection from './components/TourSection';
import VideosSection from './components/VideosSection'; 
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import SocialLinks from './components/SocialLinks';
import DesktopBottomImage from './components/DesktopBottomImage';

import heroImage from './assets/Glitch1.jpg';
import mobileHeroImage from './assets/Glitch1_Mobile.jpg';
import newestLogo from './assets/newest_Kazimi_logo.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WATCH', href: '#watch' },
    { name: 'TOUR', href: '#tour' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#newsletter' },
  ];

  // DYNAMIC GLOW STYLE
  const neonGlowStyle = { 
    textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' 
  };

  const pinkClass = "text-[#ff2ec7]";
  const blueHoverClass = "hover:text-[#00f3ff]"; 

  return (
    <Layout>
      {/* HEADER NAVIGATION */}
      <nav 
        className={`fixed top-0 w-full z-50 px-8 transition-all duration-500 ${
          isScrolled ? 'bg-black/95 backdrop-blur-md h-20' : 'bg-transparent h-24'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto h-full grid grid-cols-3 items-center">
          
          {/* Left: Branding */}
          <a 
            href="#home"
            className={`font-bold text-3xl tracking-widest uppercase select-none transition-colors duration-300 ${pinkClass} ${blueHoverClass} w-max`}
            style={neonGlowStyle}
          >
            KAZIMI
          </a>

          {/* Center: Social Links */}
          <div className="hidden md:flex justify-center mt-1">
            <SocialLinks 
              glow={true} 
              linkClassName={`transition-all duration-300 hover:scale-110 ${pinkClass} ${blueHoverClass}`}
              className="space-x-8" 
            />
          </div>

          {/* Right: Navigation Links */}
          <div className="hidden md:flex justify-end space-x-10 mt-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${pinkClass} ${blueHoverClass}`}
                style={neonGlowStyle}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex justify-end">
            <button 
              className={`p-2 transition-colors duration-300 focus:outline-none ${pinkClass} ${blueHoverClass}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={neonGlowStyle}
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            // @ts-ignore
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-12 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}
                className={`text-4xl font-bold tracking-widest uppercase transition-colors duration-300 ${pinkClass} ${blueHoverClass}`}
                style={neonGlowStyle}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-12 border-t border-white/10 w-2/3 flex justify-center">
               <SocialLinks 
                 glow={true}
                 linkClassName={`transition-colors duration-300 ${pinkClass} ${blueHoverClass}`}
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="relative w-full md:h-screen bg-black">
        
        {/* MOBILE IMAGE */}
        <img
          src={mobileHeroImage}
          alt="Kazimi band members mobile"
          className="relative w-full h-auto block md:hidden animate-[fadeIn_2.5s_ease-out_forwards]"
        />

        {/* DESKTOP IMAGE */}
        <img
          src={heroImage}
          alt="Kazimi band members desktop"
          className="absolute inset-0 w-full h-full object-cover object-top hidden md:block animate-[fadeIn_2.5s_ease-out_forwards]"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black z-10" />
        
        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <img
            src={newestLogo} alt="Kazimi logotype"
            className="w-[min(650px,85%)] max-w-full select-none opacity-0 animate-[fadeInScale_0.8s_ease-out_forwards]"
          />
          <p className="mt-2 text-xl md:text-2xl italic tracking-[0.15em] opacity-90 text-white text-center">
            Jazz recharged for the dancefloor
          </p>
        </div>
      </section>

      {/* PAGE SECTIONS */}
      <div className="relative z-10">
        <VideosSection />
        <TourSection />
        <AboutSection />
        <NewsletterSection />
        
        {/* DESKTOP ONLY IMAGE */}
        <DesktopBottomImage />
        
        <Footer />
      </div>
    </Layout>
  );
}