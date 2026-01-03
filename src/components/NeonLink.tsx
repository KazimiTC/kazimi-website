import { Link } from 'react-router-dom';

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
      <div
        className="absolute -bottom-1 left-0 h-[2px] bg-neonPink group-hover:bg-neonBlue transition-all duration-200 ease-in-out group-hover:w-full w-0"
        style={{
          boxShadow: "0 0 10px currentColor",
        }}
      />
    </Link>
  );
} 