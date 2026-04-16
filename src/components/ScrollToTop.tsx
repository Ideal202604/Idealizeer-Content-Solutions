import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleBackToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-electric-500 text-navy-950 shadow-[0_12px_30px_rgba(35,212,255,0.35)] transition-all duration-300 hover:scale-105 hover:bg-electric-400 hover:shadow-[0_16px_34px_rgba(35,212,255,0.45)] focus:outline-none focus:ring-2 focus:ring-electric-300 focus:ring-offset-2 focus:ring-offset-navy-900 ${
        showButton
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}