import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="min-h-screen flex items-center scroll-snap-align-start bg-black py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <SocialLinks />
        </div>
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} KAZIMI. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 