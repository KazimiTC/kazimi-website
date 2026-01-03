import { FaSpotify, FaYoutube, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';

interface SocialLinksProps {
  className?: string;
  linkClassName?: string;
  glow?: boolean;
}

export default function SocialLinks({ className = '', linkClassName = '', glow = false }: SocialLinksProps) {
  // We use this 'void' line to tell the compiler: "Yes, we know 'glow' exists, ignore it if we don't use it logic-wise."
  void glow;

  const links = [
    { name: 'Spotify', icon: FaSpotify, url: 'https://open.spotify.com/artist/YOUR_ID' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com/@YOUR_HANDLE' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/YOUR_HANDLE' },
    { name: 'TikTok', icon: FaTiktok, url: 'https://tiktok.com/@YOUR_HANDLE' },
    { name: 'Facebook', icon: FaFacebookF, url: 'https://facebook.com/YOUR_HANDLE' },
  ];

  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-transform duration-300 hover:scale-110 ${linkClassName}`}
          aria-label={link.name}
        >
          <link.icon size={24} />
        </a>
      ))}
    </div>
  );
}