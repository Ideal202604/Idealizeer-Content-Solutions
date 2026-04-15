import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
const NAV_LINKS = [
{
  name: 'Home',
  path: '/'
},
{
  name: 'About',
  path: '/about'
},
{
  name: 'Services',
  path: '/services'
},
{
  name: 'Portfolio',
  path: '/portfolio'
},
{
  name: 'Blog',
  path: '/blog'
},
{
  name: 'Career',
  path: '/career'
},
{
  name: 'Contact',
  path: '/contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? `${theme === 'light' ? 'bg-white/90 border-b border-slate-200/90' : 'bg-navy-900/80 border-b border-white/5'} backdrop-blur-md py-4` : 'bg-transparent py-6'}`}>
      
      <div className="layout-container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={theme === 'light' ? '/logo-black.png' : '/logo-white.png'}
            alt="Idealizeer Logo"
            className="h-10 w-auto pt-[6px] pb-[6px]" />
          
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
          <Link
            key={link.name}
            to={link.path}
            className={`text-sm font-medium transition-colors hover:text-electric-400 ${location.pathname === link.path ? 'text-electric-500' : 'text-slate-300'}`}>
            
              {link.name}
            </Link>
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-11 h-11 rounded-full border border-white/10 bg-navy-800/70 text-slate-300 hover:text-white hover:border-electric-500/40 transition-colors flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-electric-500 hover:bg-electric-600 text-navy-900 text-sm font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(250,193,17,0.3)] hover:shadow-[0_0_25px_rgba(250,193,17,0.5)] hover:-translate-y-0.5">
            
            Get Started
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="text-slate-300 hover:text-white transition-colors p-2"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Toggle */}
          <button
            className="text-slate-300 hover:text-white transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

            {mobileMenuOpen ?
            <X className="w-6 h-6" /> :

            <Menu className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          transition={{
            duration: 0.2
          }}
          className={`absolute top-full left-0 right-0 ${theme === 'light' ? 'bg-white border-b border-slate-200/90' : 'bg-navy-800 border-b border-white/5'} shadow-2xl lg:hidden`}>
          
            <div className="flex flex-col px-6 py-4 space-y-4">
              {NAV_LINKS.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-medium py-2 border-b border-white/5 last:border-0 ${location.pathname === link.path ? 'text-electric-500' : 'text-slate-300'}`}>
              
                  {link.name}
                </Link>
            )}
              <Link
              to="/contact"
              className="w-full text-center px-6 py-3 bg-electric-500 text-navy-900 font-bold rounded-lg mt-4">
              
                Get Started
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}