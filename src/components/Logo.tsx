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

  // The custom responsive SVG Icon for the book
  const renderIcon = (customClass = "h-full w-auto") => (
    <svg
      viewBox="0 0 320 200"
      className={customClass}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 5 Orange Fanned Pages (Left side of the book) */}
      <g id="orange-fan">
        {/* Outermost left page */}
        <path
          d="M 138,160 C 122,128 90,105 74,107 L 64,110 C 76,120 100,148 132,160 Z"
          fill="#f26522"
        />
        {/* Page 4 */}
        <path
          d="M 144,160 C 130,125 100,98 87,99 L 77,102 C 87,112 110,143 138,160 Z"
          fill="#f26522"
        />
        {/* Page 3 */}
        <path
          d="M 150,160 C 138,122 110,92 100,91 L 90,94 C 98,104 122,138 144,160 Z"
          fill="#f26522"
        />
        {/* Page 2 */}
        <path
          d="M 155,160 C 145,120 120,85 112,83 L 102,86 C 110,96 132,132 150,160 Z"
          fill="#f26522"
        />
        {/* Innermost left page */}
        <path
          d="M 160,160 C 150,115 130,80 125,75 L 115,78 C 120,88 140,125 155,160 Z"
          fill="#f26522"
        />
      </g>

      {/* CMYK Fanned Pages (Right side of the book) */}
      <g id="cmyk-fan">
        {/* Yellow Page (Y) */}
        <path
          d="M 160,160 L 198,55 L 222,72 L 160,160"
          stroke="#fff200"
          strokeWidth="3.5"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Magenta Page (M) */}
        <path
          d="M 160,160 L 168,62 L 195,74 L 160,160"
          stroke="#ec008c"
          strokeWidth="3.5"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Cyan Page (C) - Innermost right page overlapping crease */}
        <path
          d="M 160,160 L 140,75 L 165,85 L 160,160"
          stroke="#00aeef"
          strokeWidth="3.5"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Black/Navy Cover & Spine (K) - Using currentColor to adapt to parent light/dark context */}
      <g id="black-cover" className="text-slate-900 dark:text-white">
        {/* Right Cover Boundary */}
        <path
          d="M 225,50 L 225,160 C 200,165 180,165 160,160"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Top Cover Hook */}
        <path
          d="M 225,50 L 200,58"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
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
          {/* Custom adaptive navy/white line matching the logo design lockup */}
          <div className="h-[2.5px] bg-slate-900 dark:bg-white group-hover:bg-cyan-400 flex-grow rounded-sm min-w-[32px] transition-colors"></div>
        </div>
      </div>
    </div>
  );
}
