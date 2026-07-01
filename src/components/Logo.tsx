import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'iconOnly';
  className?: string;
  height?: number | string;
}

export default function Logo({ variant = 'horizontal', className = '', height }: LogoProps) {
  // Brand Colors from the uploaded Logo:
  // - Vibrant Orange: #f26522
  // - Deep Navy Blue: #0a2540
  // - Cyan: #00aeef
  // - Magenta: #ec008c
  // - Yellow: #fff200

  // The custom responsive SVG Icon for the book replaced by decoded PNG image
  const renderIcon = (customClass = "h-full w-auto") => (
    <img
      src="/images/Mankusa Logo.png"
      alt="Mankusa Logo"
      className={`${customClass} object-contain`}
      referrerPolicy="no-referrer"
    />
  );

  if (variant === 'iconOnly') {
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={{ height: height || '100%', aspectRatio: '1.6 / 1' }}
      >
        {renderIcon("w-full h-full")}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div 
        className={`flex flex-col items-center text-center select-none group ${className}`} 
        style={{ height: height || 'auto' }}
      >
        {/* Logo Icon Mark on top */}
        <div className="w-48 h-30 flex items-center justify-center">
          {renderIcon("w-full h-full")}
        </div>

        {/* Company Name "Mankusa" */}
        <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white font-sans transition-colors mt-2">
          Mankusa
        </h2>

        {/* Tagline "Printing and Publishing" & Underline bar */}
        <div className="flex flex-col items-center w-full mt-2 max-w-[240px]">
          <span className="text-xs font-bold tracking-[0.1em] text-[#f26522] uppercase font-sans">
            Printing and Publishing
          </span>
          <div className="w-full h-[3px] bg-slate-900 dark:bg-white mt-1.5 rounded-sm"></div>
        </div>
      </div>
    );
  }

  // DEFAULT horizontal layout (Excellent for navbar and headers)
  return (
    <div className={`flex items-center gap-4 select-none group ${className}`}>
      {/* Icon portion (scaled beautifully) */}
      <div className="w-16 h-10 flex-shrink-0 flex items-center justify-center">
        {renderIcon("w-full h-full")}
      </div>

      {/* Text lockup portion */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1">
          <span className="font-sans text-2xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
            Mankusa
          </span>
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[10px] font-sans font-extrabold tracking-[0.06em] text-[#f26522] uppercase leading-none whitespace-nowrap">
            Printing and Publishing
          </span>
        </div>
      </div>
    </div>
  );
}
