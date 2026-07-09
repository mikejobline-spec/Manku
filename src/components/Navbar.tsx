import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Sun, Moon } from 'lucide-react';
import Logo from './Logo';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  // Props are now empty since we removed the specs calculator
}

export default function Navbar({}: NavbarProps) {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Simple active section detection
      const sections = ['home', 'about', 'machinery', 'workshop', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Machinery', href: '#machinery', id: 'machinery' },
    { label: 'Workshop', href: '#workshop', id: 'workshop' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Inquiries', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-900 py-3'
            : 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a id="nav-logo" href="#home" className="flex items-center group">
            <Logo variant="horizontal" />
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`font-sans text-xs font-semibold tracking-wider uppercase transition-colors relative py-1 ${
                  activeSection === link.id
                    ? isDarkMode
                      ? 'text-cyan-400'
                      : 'text-cyan-600'
                    : isDarkMode
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${isDarkMode ? 'bg-cyan-400' : 'bg-cyan-600'}`} />
                )}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all border cursor-pointer ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-yellow-400 hover:bg-slate-800 hover:text-yellow-300'
                  : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              id="nav-cta-btn"
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-sans text-xs font-semibold rounded-lg shadow-md hover:shadow-cyan-500/10 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Button Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all border cursor-pointer ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-yellow-400 hover:bg-slate-800'
                  : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
              }`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none cursor-pointer ${
                isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className={`md:hidden border-b px-4 pt-2 pb-6 space-y-3 shadow-xl transition-all ${
          isDarkMode
            ? 'bg-slate-950 border-slate-900 text-slate-100'
            : 'bg-white border-slate-200 text-slate-800'
        }`}>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors ${
                  activeSection === link.id
                    ? isDarkMode
                      ? 'bg-slate-900 text-cyan-400'
                      : 'bg-slate-50 text-cyan-600'
                    : isDarkMode
                      ? 'text-slate-300 hover:bg-slate-900 hover:text-white'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className={`pt-4 border-t flex flex-col gap-3 ${isDarkMode ? 'border-slate-900' : 'border-slate-100'}`}>
            <a
              id="mobile-cta-btn"
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg w-full"
            >
              <PhoneCall className="w-4 h-4" />
              Request Instant Estimate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
