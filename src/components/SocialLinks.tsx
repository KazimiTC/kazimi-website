import { FaSpotify, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

interface SocialLinksProps {
  className?: string;
  linkClassName?: string;
  glow?: boolean;
}

export default function SocialLinks({ className = '', linkClassName = '', glow = false }: SocialLinksProps) {
  
  // RESTORED LOGIC: If 'glow' is true, apply the neon shadow style
  const glowStyle = glow ? { 
    textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
    filter: 'drop-shadow(0 0 5px currentColor)' // Adds extra pop for icons specifically
  } : undefined;

  const links = [
    { 
      name: 'Spotify', 
      icon: FaSpotify, 
      url: 'https://open.spotify.com/artist/5CSHHIndRlzfQTDyRJVXGL?si=0GlQaUgfRIC9P_Ta1OyH2Q&nd=1&dlsi=34fc42f1f9db4c13' 
    },
    { 
      name: 'YouTube', 
      icon: FaYoutube, 
      url: 'https://www.youtube.com/@wearekazimi' 
    },
    { 
      name: 'Instagram', 
      icon: FaInstagram, 
      url: 'https://www.instagram.com/kazimi.music/#' 
    },
    { 
      name: 'TikTok', 
      icon: FaTiktok, 
      url: 'https://www.tiktok.com/@kazimiband' 
    },
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
          style={glowStyle} // This applies the glow!
        >
          <link.icon size={24} />
        </a>
      ))}
    </div>
  );
}