import React, { useState, useEffect } from 'react';
import { Printer, Menu, X, Layers, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
}

export default function Navbar({ onOpenEstimator }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Simple active section detection
      const sections = ['home', 'about', 'machinery', 'materials', 'portfolio', 'contact'];
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
    { label: 'Materials', href: '#materials', id: 'materials' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Inquiries', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a id="nav-logo" href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Overlapping CMYK Dots absolute positioning */}
              <span className="absolute top-1 left-1 w-5 h-5 rounded-full bg-cyan-400/80 blend-multiply animate-pulse" />
              <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-pink-400/80 blend-multiply animate-pulse delay-75" />
              <span className="absolute bottom-1 left-1 w-5 h-5 rounded-full bg-yellow-400/80 blend-multiply" />
              <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-slate-950/80 flex items-center justify-center z-10">
                <Printer className="w-3 h-3 text-white" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                AeroPress
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase leading-none">
                Offset & Co
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`font-sans text-sm font-medium tracking-wide transition-colors relative py-1 ${
                  activeSection === link.id
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="nav-calc-btn"
              onClick={onOpenEstimator}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 font-sans text-xs font-semibold rounded-lg border border-slate-700 transition-all cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              Specs Calculator
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
            <button
              id="mobile-estimator-trigger"
              onClick={onOpenEstimator}
              className="p-2 text-slate-300 hover:text-cyan-400"
              title="Specs Calculator"
            >
              <Layers className="w-5 h-5" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-xl transition-all">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-slate-800 text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              id="mobile-calc-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 text-cyan-400 text-sm font-semibold rounded-lg border border-slate-700 w-full"
            >
              <Layers className="w-4 h-4" />
              Paper & Specs Calculator
            </button>
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
