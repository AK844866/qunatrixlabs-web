'use client';
import React, { useEffect, useRef, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap: Record<string, { hue: number; sat: number; lit: number }> = {
  blue: { hue: 220, sat: 100, lit: 60 },
  cyan: { hue: 192, sat: 100, lit: 60 },
  purple: { hue: 270, sat: 100, lit: 65 },
  green: { hue: 142, sat: 80, lit: 55 },
  red: { hue: 0, sat: 100, lit: 60 },
  orange: { hue: 30, sat: 100, lit: 60 },
};

const sizeMap = { sm: 'w-48 h-64', md: 'w-64 h-80', lg: 'w-80 h-96' };

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { hue, sat, lit } = glowColorMap[glowColor];

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  const spotColor = `hsla(${hue}, ${sat}%, ${lit}%, 0.22)`;
  const borderGlow = `hsla(${hue}, ${sat}%, ${lit}%, 0.55)`;
  const bgColor = `hsla(${hue}, ${sat}%, ${lit}%, 0.06)`;

  const inlineStyle: React.CSSProperties & Record<string, string | number> = {
    '--mouse-x': '-999px',
    '--mouse-y': '-999px',
    position: 'relative',
    background: bgColor,
    ...(width !== undefined ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    ...(height !== undefined ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
  };

  return (
    <div
      ref={cardRef}
      style={inlineStyle}
      className={`
        glow-card
        ${customSize ? '' : sizeMap[size]}
        rounded-2xl
        ${className}
      `}
    >
      {/* Spotlight fill */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          borderRadius: 'inherit',
          background: `radial-gradient(
            380px circle at var(--mouse-x) var(--mouse-y),
            ${spotColor},
            transparent 65%
          )`,
        }}
      />
      {/* Border glow — single border line */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          borderRadius: 'inherit',
          background: `radial-gradient(
            280px circle at var(--mouse-x) var(--mouse-y),
            ${borderGlow},
            transparent 60%
          ), linear-gradient(to right, hsla(${hue}, ${sat}%, ${lit}%, 0.15), hsla(${hue}, ${sat}%, ${lit}%, 0.15))`,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor' as React.CSSProperties['WebkitMaskComposite'],
          maskComposite: 'exclude' as React.CSSProperties['maskComposite'],
        }}
      />
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export { GlowCard };
