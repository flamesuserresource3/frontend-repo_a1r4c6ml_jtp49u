import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-purple-500/10 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Interactive UI</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
          Animated Buttons
        </h1>
        <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
          A compact collection of delightful, responsive buttons you can hover, press, and customize.
        </p>
      </div>
    </header>
  );
}
