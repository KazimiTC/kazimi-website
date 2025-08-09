import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NeonLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function NeonLink({ to, children, className = '' }: NeonLinkProps) {
  return (
    <Link
      to={to}
      className={`relative group ${className}`}
    >
      {children}
      <motion.div
        className="absolute -bottom-1 left-0 h-[2px] bg-neonPink group-hover:bg-neonBlue"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 0.2,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: "0 0 10px currentColor",
        }}
      />
    </Link>
  );
} 