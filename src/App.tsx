import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Machinery from './components/Machinery';
import WorkshopGallery from './components/WorkshopGallery';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Logo from './components/Logo';
import { Mail, Phone, MapPin, ShieldCheck, Globe } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'} flex flex-col justify-between select-none`}>
      
      {/* Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Machinery />
        <WorkshopGallery />
        <Portfolio />
        <Contact />
      </main>

      {/* Corporate Footer */}
      <footer className={`bg-slate-950 text-slate-400 border-t ${isDarkMode ? 'border-slate-900' : 'border-slate-800'}`}>
        
        {/* Top visual CMYK border bar representing print alignment channels */}
        <div className="h-2 w-full flex">
          <span className="h-full w-1/4 bg-cyan-500" />
          <span className="h-full w-1/4 bg-pink-500" />
          <span className="h-full w-1/4 bg-yellow-400" />
          <span className="h-full w-1/4 bg-slate-950" />
        </div>

        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Column 1: Brand & Certification */}
            <div className="space-y-4">
              <Logo variant="horizontal" />
              <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                High-volume, state-of-the-art sheet-fed offset and precision print press operations. Certified for FSC® paper chain of custody and ISO 12647-2 color management.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#00aeef] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#00aeef]" />
                FSC® C104928 Certified
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
                Capability Indexes
              </h4>
              <ul className="space-y-2 text-xs font-sans">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">Our Print Heritage</a>
                </li>
                <li>
                  <a href="#machinery" className="hover:text-white transition-colors">Offset & Production Fleet</a>
                </li>
                <li>
                  <a href="#workshop" className="hover:text-white transition-colors">Our Workshop Floor</a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">Our Works Gallery</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">Inquiries & Quote Estimations</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Channels */}
            <div>
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
                Direct Channels
              </h4>
              <ul className="space-y-3.5 text-xs font-sans text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Around Mekanisa Abo church<br />
                    Addis Ababa, Ethiopia
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span>+251 118 346305 <span className="text-[10px] text-slate-500">(Direct)</span></span>
                    <span>+251 911 624910 <span className="text-[10px] text-slate-500">(Quotes)</span></span>
                  </div>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <a href="mailto:quotes@mankusaprinting.com" className="hover:text-white transition-colors">
                    quotes@mankusaprinting.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Telegram & Social Links */}
            <div>
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
                Global Network
              </h4>
              <p className="font-sans text-xs text-slate-500 leading-normal mb-4 font-light">
                Submit raw design package files directly on our Telegram channel or request sample booklet portfolios.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://t.me/mankusa_printing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-cyan-400 text-xs font-mono font-bold rounded border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  Telegram Channels
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Design Credit */}
          <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-600">
            <div>
              © 2026 Mankusa Printing and Publishing. All operational rights reserved.
            </div>
            <div className="flex items-center gap-1">
              <span>Standard Calibration</span>
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span className="w-2 h-2 rounded-full bg-pink-500" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-slate-800" />
              <span className="text-slate-500 pl-1">ISO 12647-2</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
