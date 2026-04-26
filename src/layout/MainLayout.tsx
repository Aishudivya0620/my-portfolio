import { ReactNode, useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MouseGlow from '../components/MouseGlow';

import CustomCursor from '../components/CustomCursor';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] relative transition-colors duration-300">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 via-transparent to-accent-500/5 dark:from-primary-950/20 dark:to-accent-950/20" />
      </div>

      <CustomCursor />
      <MouseGlow />

      <Header scrolled={scrolled} />


      <main className="flex-grow relative z-10 w-full h-full">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;