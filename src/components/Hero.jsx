import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative w-full h-[70vh] sm:h-[78vh] overflow-hidden">
      {/* Spline 3D scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BL9Cjn3fkAdLBhXm/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to blend with the page theme; does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950/60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col items-center justify-end pb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/80 mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Neon cyber glow</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-cyan-200 via-emerald-200 to-white/80 drop-shadow-[0_0_30px_rgba(34,211,238,0.45)]">
          Animated Neon Buttons
        </h1>
        <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
          Interactions with neon borders and a futuristic vibe. Hover to see the glow.
        </p>
      </div>
    </header>
  );
}
