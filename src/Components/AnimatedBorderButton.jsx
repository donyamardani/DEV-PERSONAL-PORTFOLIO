import React, { useRef, useState, useEffect } from 'react'

export default function AnimatedBorderButton({ children, onClick, disabled, className = "" }) {
  const buttonRef = useRef(null);
  const [size, setSize] = useState({ width: 200, height: 60 });

  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;

    const measure = () => {
    
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setSize({ width: rect.width, height: rect.height });
      }
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const radius = size.height / 2 - 1;
  const w = size.width;
  const h = size.height;

  const path = `M ${radius + 1},1
    A ${radius},${radius} 0 0 0 1,${radius + 1}
    L 1,${h - radius - 1}
    A ${radius},${radius} 0 0 0 ${radius + 1},${h - 1}
    L ${w - radius - 1},${h - 1}
    A ${radius},${radius} 0 0 0 ${w - 1},${h - radius - 1}
    L ${w - 1},${radius + 1}
    A ${radius},${radius} 0 0 0 ${w - radius - 1},1
    Z`;

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      className={`relative bg-transparent border border-border 
        text-foreground hover:border-primary/50 transition-all 
        duration-1000 focus:outline-none focus-visible:ring-2 
        focus-visible:ring-primary focus-visible:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed group 
        px-8 py-4 text-lg font-medium rounded-full overflow-visible 
        animated-border ${className}`}
    >
     
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
        viewBox={`0 0 ${w} ${h}`}
        style={{ overflow: "visible" }}
      >
        <path
          d={path}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}