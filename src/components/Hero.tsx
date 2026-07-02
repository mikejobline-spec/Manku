import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Cpu, Flame, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix = "", duration = 1500 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutExpo easing function for ultra smooth deceleration
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easedProgress * target);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated, target, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

interface HeroProps {
  // Props are now empty
}

export default function Hero({}: HeroProps) {
  const { isDarkMode } = useTheme();

  const stats = [
    { label: 'Established In', val: '2001', desc: 'Book publishing & printing' },
    { label: 'Qualified Team', val: '50+ Experts', desc: 'Skilled professionals' },
    { label: 'Continuous Power', val: '130KV Generator', desc: 'Guaranteed prompt delivery' },
  ];

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center pt-20 overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-800'}`}>
      {/* Background Hero Image with light/dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/workshop pic (12).jpg"
          alt="Heavy-Duty Commercial Offset Press Machine in Action"
          className={`w-full h-full object-cover scale-105 motion-safe:animate-[pulse_10s_infinite_alternate] transition-opacity duration-300 ${isDarkMode ? 'opacity-35' : 'opacity-20'}`}
          referrerPolicy="no-referrer"
        />
        <div className={`absolute inset-0 transition-colors duration-300 bg-gradient-to-b ${isDarkMode ? 'from-slate-950 via-slate-900/80 to-slate-950' : 'from-white via-white/85 to-white'}`} />
        <div className={`absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l ${isDarkMode ? 'from-cyan-500/10' : 'from-cyan-500/5'} to-transparent pointer-events-none`} />
      </div>

      {/* Grid Pattern overlay */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,${isDarkMode ? '#1e293b12' : '#1e293b05'}_1px,transparent_1px),linear-gradient(to_bottom,${isDarkMode ? '#1e293b12' : '#1e293b05'}_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 self-center lg:self-start px-3 py-1.5 backdrop-blur border rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 ${isDarkMode ? 'bg-slate-900/80 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
              <span className="flex h-2 w-2 relative">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDarkMode ? 'bg-cyan-400' : 'bg-cyan-500'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isDarkMode ? 'bg-cyan-400' : 'bg-cyan-600'}`}></span>
              </span>
              Ethiopia's Premier Book & Offset Press
            </div>

            <h1 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Where Precision Meets <br />
              <span className={`bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 via-pink-400 to-yellow-300' : 'from-cyan-600 via-pink-500 to-amber-500'} bg-clip-text text-transparent`}>
                High-Volume Book Mastery
              </span>
            </h1>

            <p className={`font-sans text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Mankusa Printing and Publishing (Print House) is Addis Ababa's leading commercial press with over 50 qualified professionals. Since 2001, we have undertaken all printing-related assignments—including books, catalogs, brochures, folders, packaging boxes, newsletters, envelopes, forms, and calendars—guaranteeing competitive rates and excellent quality.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-sans text-sm font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all w-full sm:w-auto cursor-pointer"
              >
                Initiate Project Inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#machinery"
                className={`flex items-center justify-center gap-2 px-6 py-3.5 font-sans text-sm font-semibold rounded-lg border backdrop-blur transition-all w-full sm:w-auto cursor-pointer ${
                  isDarkMode
                    ? 'bg-slate-900/85 hover:bg-slate-800 text-slate-200 hover:text-white border-slate-700'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-200'
                }`}
              >
                Explore Production Fleet
              </a>
            </div>

            {/* Key credentials bar */}
            <div className={`pt-6 border-t flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-8 text-xs font-mono transition-colors duration-300 ${isDarkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className={`w-4 h-4 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                130KV Generator Backup
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className={`w-4 h-4 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`} />
                Prompt Service Delivery
              </div>
              <div className="flex items-center gap-1.5">
                <Flame className={`w-4 h-4 ${isDarkMode ? 'text-yellow-400' : 'text-amber-500'}`} />
                50+ Qualified Employees
              </div>
            </div>
          </div>

          {/* CMYK Interactive overlapping display card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-96 sm:w-96 sm:h-[26rem] flex items-center justify-center">
              
              {/* Radial backdrop light */}
              <div className={`absolute inset-0 blur-3xl rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-cyan-500/10' : 'bg-cyan-500/5'}`} />

              {/* Offset Simulation Rings */}
              <div className={`absolute top-8 left-8 w-44 h-44 sm:w-56 sm:h-56 rounded-full border backdrop-blur-[1px] flex items-center justify-center group transition-all duration-500 ${
                isDarkMode
                  ? 'border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-400 hover:bg-cyan-500/10'
                  : 'border-cyan-200 bg-cyan-50/40 hover:border-cyan-400 hover:bg-cyan-50/60'
              }`}>
                <span className={`absolute top-2 font-mono text-[9px] tracking-wider transition-colors duration-300 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>CYAN / C</span>
              </div>

              <div className={`absolute top-8 right-8 w-44 h-44 sm:w-56 sm:h-56 rounded-full border backdrop-blur-[1px] flex items-center justify-center group transition-all duration-500 ${
                isDarkMode
                  ? 'border-pink-500/30 bg-pink-500/5 hover:border-pink-400 hover:bg-pink-50/10'
                  : 'border-pink-200 bg-pink-50/40 hover:border-pink-400 hover:bg-pink-50/60'
              }`}>
                <span className={`absolute top-2 font-mono text-[9px] tracking-wider transition-colors duration-300 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>MAGENTA / M</span>
              </div>

              <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-44 h-44 sm:w-56 sm:h-56 rounded-full border backdrop-blur-[1px] flex items-center justify-center group transition-all duration-500 ${
                isDarkMode
                  ? 'border-yellow-500/30 bg-yellow-500/5 hover:border-yellow-400 hover:bg-yellow-50/10'
                  : 'border-yellow-200 bg-yellow-50/30 hover:border-yellow-400 hover:bg-yellow-50/50'
              }`}>
                <span className={`absolute bottom-2 font-mono text-[9px] tracking-wider transition-colors duration-300 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>YELLOW / Y</span>
              </div>

              {/* Central high precision dot matrix alignment chart */}
              <div className={`absolute w-20 h-20 border-2 rounded-full flex items-center justify-center shadow-lg z-20 group hover:border-cyan-400 hover:scale-105 transition-all ${
                isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
              }`}>
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <span className={`absolute w-10 h-0.5 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'} animate-[spin_12s_linear_infinite]`} />
                  <span className={`absolute h-10 w-0.5 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'} animate-[spin_12s_linear_infinite]`} />
                  <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-cyan-400' : 'bg-cyan-600'}`} />
                  </div>
                  <span className={`absolute text-[8px] font-mono font-bold -top-4 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>ALIGN / K</span>
                </div>
              </div>

              {/* Tiny floating info bubbles */}
              <div className={`absolute bottom-12 right-2 sm:right-6 border p-3 rounded-lg shadow-lg backdrop-blur max-w-[140px] z-30 transition-all duration-300 ${
                isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
              }`}>
                <div className={`text-[10px] font-mono font-bold uppercase tracking-wide ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Heavy stock</div>
                <div className={`text-xs font-semibold mt-0.5 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Up to 400 gsm</div>
              </div>

              <div className={`absolute top-16 left-0 sm:-left-4 border p-3 rounded-lg shadow-lg backdrop-blur max-w-[140px] z-30 transition-all duration-300 ${
                isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
              }`}>
                <div className={`text-[10px] font-mono font-bold uppercase tracking-wide ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>Plates feed</div>
                <div className={`text-xs font-semibold mt-0.5 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Continuous auto</div>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Stats Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 sm:mt-24">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`border p-6 rounded-xl transition-all flex flex-col justify-between ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-850 hover:border-slate-750 hover:bg-slate-900/80 hover:shadow-lg text-white'
                  : 'bg-slate-50 border-slate-200/80 hover:border-slate-300/80 hover:bg-white hover:shadow-lg text-slate-900'
              }`}
            >
              <div className={`text-sm font-sans font-medium transition-colors duration-300 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</div>
              <div className={`text-3xl sm:text-4xl font-display font-bold tracking-tight mt-2 mb-1 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {stat.label === 'Qualified Team' ? (
                  <AnimatedCounter target={50} suffix="+ Experts" />
                ) : stat.label === 'Established In' ? (
                  <AnimatedCounter target={2001} duration={1200} />
                ) : stat.label === 'Continuous Power' ? (
                  <span>
                    <AnimatedCounter target={130} />
                    <span className="text-xl sm:text-2xl font-semibold ml-1">KV Generator</span>
                  </span>
                ) : (
                  stat.val
                )}
              </div>
              <div className={`text-xs font-mono tracking-wide uppercase transition-colors duration-300 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{stat.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
