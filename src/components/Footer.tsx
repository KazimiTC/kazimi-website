import SocialLinks from './SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Changed pt-0 to pt-8 to create the "buffer" you requested
    <footer className="bg-black pt-8 pb-12 relative z-10">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        
        {/* Social Links */}
        <div className="mb-8">
          <SocialLinks 
            // Removed 'glow={true}' to keep it subtle
            // reverted to a grey color (text-white/50) that turns white on hover
            linkClassName="text-white/50 hover:text-white transition-colors duration-300"
          />
        </div>

        {/* Copyright */}
        <p className="text-white/40 text-xs tracking-widest uppercase">
          &copy; {currentYear} KAZIMI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}