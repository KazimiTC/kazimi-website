import { motion } from 'framer-motion';

import Layout from './components/Layout';

import TourSection from './components/TourSection';

import VideosSection from './components/VideosSection';

import NewsletterSection from './components/NewsletterSection';

import Footer from './components/Footer';

import AboutSection from './components/AboutSection';

import heroImage from './assets/Glitch1.jpg';

import newestLogo from './assets/newest_Kazimi_logo.png';



export default function App() {

  return (

    <Layout>

      {/* HERO SECTION */}

      <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center">

        {/* Background Image */}

        <motion.img

          src={heroImage}

          alt="Kazimi band members"

          className="absolute inset-0 w-full h-full object-cover"

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ duration: 2.5, ease: "easeOut" }}

        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-10" />

        {/* Logo */}

        <motion.img

          src={newestLogo}

          alt="Kazimi logotype"

          className="relative z-20 w-[min(600px,90%)] max-w-full select-none"

          initial={{ opacity: 0, scale: 0.95 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ duration: 0.8 }}

        />

        {/* Tagline */}

        <p className="relative z-20 mt-0 text-2xl italic tracking-wider opacity-80 text-white text-center">

          Jazz recharged for the dancefloor

        </p>

        {/* SEO Heading */}

        <h1 className="sr-only">Kazimi</h1>

      </section>



      {/* OTHER PAGE SECTIONS */}

      <div className="relative z-10">

        <AboutSection />
        <TourSection />

        <VideosSection />

        <NewsletterSection />

        <Footer />

      </div>

    </Layout>

  );

}