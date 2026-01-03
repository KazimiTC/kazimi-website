import { type ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black">
      {/* We removed the <header> and mobile menu from here. 
          The navigation is now handled exclusively in App.tsx 
          to prevent overlapping and ensure the scroll-fade effect works. 
      */}
      <main className="bg-black text-white">
        {children}
      </main>
    </div>
  );
}