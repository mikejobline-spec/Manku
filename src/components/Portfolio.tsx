import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data';
import { PortfolioItem, PortfolioCategory } from '../types';
import { Sparkles, ArrowLeftRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getAssetUrl } from '../utils';

export default function Portfolio() {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | 'all'>('all');

  // 3D Cylinder state and refs
  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(760);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const rotationRef = useRef(0);
  const targetRotationRef = useRef(0);
  const isInteractingRef = useRef(false);
  const lastXRef = useRef(0);

  const filteredPortfolio = selectedCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.category === selectedCategory);

  // Ensure we have at least 8 elements for a beautiful complete 3D cylinder
  let displayItems = [...filteredPortfolio];
  if (displayItems.length > 0) {
    while (displayItems.length < 8) {
      displayItems = [...displayItems, ...filteredPortfolio];
    }
  }

  const carouselItems = displayItems.map((item, idx) => ({
    ...item,
    carouselId: `${item.id}-${idx}`
  }));

  const categories: { label: string; val: PortfolioCategory | 'all' }[] = [
    { label: 'All Projects', val: 'all' },
    { label: 'Bespoke Publishing', val: 'publishing' },
    { label: 'Custom Packaging', val: 'packaging' },
    { label: 'Corporate & Institutional', val: 'corporate' }
  ];

  // Responsive radius calculation for wider, more relaxed layout
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRadius(380); // larger radius on mobile
      } else if (width < 1024) {
        setRadius(540); // tablet size
      } else {
        setRadius(760); // wider, spacious full-size desktop
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3D Physics Loop (Auto-rotate + Lerp inertia + Friction)
  useEffect(() => {
    let animationFrameId: number;
    const autoRotateSpeed = -0.05; // slower, more relaxed continuous drift

    const updatePhysics = () => {
      if (!isInteractingRef.current) {
        // Continuous auto-rotation when user is not actively dragging
        const currentSpeed = isHovered ? autoRotateSpeed * 0.15 : autoRotateSpeed; // Slow down on hover
        targetRotationRef.current += currentSpeed;
      }

      // Smooth inertia glide (Lerp)
      const diff = targetRotationRef.current - rotationRef.current;
      rotationRef.current += diff * 0.08; // Damping coefficient

      // Keep rotation state updated
      setRotation(rotationRef.current);

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  // Mouse Interaction Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isInteractingRef.current = true;
    setIsDragging(true);
    lastXRef.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isInteractingRef.current) return;
    const deltaX = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;

    // Convert pixels to rotation degrees relative to viewport size
    const sensitivity = 0.22; // relaxed, smooth control
    targetRotationRef.current += deltaX * sensitivity;
  };

  // Touch Interaction Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    isInteractingRef.current = true;
    setIsDragging(true);
    lastXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isInteractingRef.current) return;
    const deltaX = e.touches[0].clientX - lastXRef.current;
    lastXRef.current = e.touches[0].clientX;

    const sensitivity = 0.28;
    targetRotationRef.current += deltaX * sensitivity;
  };

  const handleMouseUpOrLeave = () => {
    isInteractingRef.current = false;
    setIsDragging(false);
  };

  return (
    <section 
      id="portfolio" 
      className={`py-24 sm:py-32 lg:py-40 border-t transition-colors duration-300 relative overflow-hidden ${
        isDarkMode 
          ? 'bg-slate-950 text-white border-t border-slate-900' 
          : 'bg-[#FAF9F5] text-slate-800 border-t border-slate-200/60'
      }`}
    >
      {/* Editorial Watermark background */}
      <div className={`absolute top-10 left-10 text-[10vw] font-display font-black tracking-tighter opacity-[0.02] pointer-events-none select-none uppercase ${
        isDarkMode ? 'text-white' : 'text-slate-900'
      }`}>
        Mankusa Press
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 relative z-10">
          <div className="max-w-3xl">
            {/* Soft Premium Badge */}
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest mb-4 border ${
              isDarkMode 
                ? 'bg-cyan-950/40 text-cyan-400 border-cyan-900/60' 
                : 'bg-cyan-50/80 text-cyan-700 border-cyan-100/80'
            }`}>
              <Sparkles className="w-3 h-3" />
              Prestige Portfolio • Est. 2001
            </div>

            <h2 className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Completed Publications <br className="hidden sm:inline" />
              & Printed Masterpieces
            </h2>
            <p className={`font-sans text-base mt-4 leading-relaxed font-light transition-colors duration-300 max-w-xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Browse our physically printed masterpieces. Hover or drag to spin the 3D circular display in a relaxed, continuous loop.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat.val}
                onClick={() => setSelectedCategory(cat.val)}
                className={`px-4 py-2 rounded-full font-sans text-[10px] font-bold tracking-widest uppercase border transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.val
                    ? isDarkMode
                      ? 'bg-cyan-950 text-cyan-400 border-cyan-500/50 shadow-md'
                      : 'bg-slate-900 border-slate-900 text-white shadow-md'
                    : isDarkMode
                      ? 'bg-slate-900 hover:bg-slate-850 border-slate-800 text-slate-400 hover:text-white'
                      : 'bg-white hover:bg-slate-100/80 border-slate-200/80 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- 3D CIRCULAR CAROUSEL SECTION --- */}
        <div className="relative py-20 z-10 overflow-visible flex flex-col items-center justify-center">
          
          {/* HANDWRITTEN ANNOTATION - LEFT */}
          <div className="absolute top-0 left-[5%] md:left-[10%] pointer-events-none select-none z-20 hidden md:block">
            <span className={`font-handwritten text-2xl rotate-[-6deg] inline-block transition-colors duration-300 ${
              isDarkMode ? 'text-cyan-400/80' : 'text-cyan-600/90'
            }`}>
              Muller Martini Perfect Bound 📖
            </span>
            <svg className={`w-16 h-16 ml-8 -mt-2 rotate-[-10deg] opacity-75 ${
              isDarkMode ? 'text-cyan-400' : 'text-cyan-500'
            }`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M10,20 Q40,10 50,55" />
              <path d="M42,48 L50,55 L52,43" />
            </svg>
          </div>

          {/* HANDWRITTEN ANNOTATION - RIGHT */}
          <div className="absolute top-2 right-[10%] pointer-events-none select-none z-20 hidden lg:block">
            <svg className={`w-20 h-16 mr-10 opacity-75 ${
              isDarkMode ? 'text-pink-400' : 'text-pink-500'
            }`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M90,15 Q40,5 35,50" />
              <path d="M43,45 L35,50 L32,40" />
            </svg>
            <span className={`font-handwritten text-2xl rotate-[5deg] inline-block -mt-4 transition-colors duration-300 ${
              isDarkMode ? 'text-pink-400/80' : 'text-pink-600/90'
            }`}>
              ✨ Vibrant Spot-UV & Gold Foil
            </span>
          </div>

          {/* Drag Instruction Banner */}
          <div className="flex justify-center mb-10">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wide ${
              isDarkMode ? 'bg-slate-900/60 text-slate-400' : 'bg-slate-100 text-slate-500'
            }`}>
              <ArrowLeftRight className="w-3.5 h-3.5 animate-pulse" />
              <span>Drag to spin the cylinder • Slides rotate in infinite loop</span>
            </div>
          </div>

          {/* 3D Viewport Container (Taller, wider, relaxed) */}
          <div 
            className="relative w-full h-[540px] sm:h-[620px] flex items-center justify-center overflow-visible select-none"
            style={{
              perspective: '2200px',
              perspectiveOrigin: '50% 35%', // Elevated camera angle to see the 3D rotating circle beautifully
            }}
          >
            {/* The 3D Rotating Cylinder / Spinner Wrapper */}
            <div 
              className={`relative w-[320px] sm:w-[380px] h-[400px] sm:h-[480px] cursor-grab ${
                isDragging ? 'cursor-grabbing' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: `translateZ(${-radius}px) rotateY(${rotation}deg)`,
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUpOrLeave}
            >
              {carouselItems.map((item, idx) => {
                const theta = idx * (360 / carouselItems.length);
                
                return (
                  <div 
                    key={item.carouselId}
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      transform: `rotateY(${theta}deg) translateZ(${radius}px)`,
                      transformOrigin: '50% 50%',
                      backfaceVisibility: 'hidden', // Hide card backs in 3D rotation
                    }}
                    onMouseEnter={() => {
                      setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                      setIsHovered(false);
                    }}
                  >
                    {/* Luxury Publication Card (Purely visual, zero overlapping text clutter) */}
                    <div className={`relative w-full h-full rounded-[2.5rem] overflow-hidden group/card shadow-2xl transition-all duration-500 border ${
                      isDarkMode 
                        ? 'bg-slate-900 border-slate-800 shadow-cyan-950/25' 
                        : 'bg-white border-slate-200/80 shadow-slate-200/50'
                    }`}>
                      
                      {/* Full Card Cover Image */}
                      <div className="absolute inset-0 overflow-hidden">
                        <img 
                          src={getAssetUrl(item.image)} 
                          alt={item.title}
                          className="w-full h-full object-cover opacity-95 group-hover/card:scale-[1.03] transition-transform duration-700 select-none pointer-events-none"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* HANDWRITTEN ANNOTATION - BOTTOM CENTRAL */}
          <div className="text-center mt-12 pointer-events-none select-none relative z-20">
            <span className={`font-handwritten text-2xl inline-block transition-colors duration-300 ${
              isDarkMode ? 'text-amber-400/80' : 'text-amber-700/80'
            }`}>
              🎨 Color-Calibrated Offset Quality
            </span>
          </div>

        </div>
        {/* --- END OF CAROUSEL --- */}

      </div>
    </section>
  );
}
