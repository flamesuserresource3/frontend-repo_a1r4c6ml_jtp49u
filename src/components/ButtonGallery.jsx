import React from 'react';
import AnimatedButton from './AnimatedButton';
import { Rocket, Star, ArrowRight } from 'lucide-react';

export default function ButtonGallery() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-8">
      <h2 className="text-xl font-semibold text-white/90 mb-4">Gallery</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-white/60 mb-3">Neon</p>
          <div className="flex flex-wrap gap-3">
            <AnimatedButton variant="neon" leftIcon={Rocket}>Launch</AnimatedButton>
            <AnimatedButton variant="neon" rightIcon={ArrowRight} size="sm">Continue</AnimatedButton>
            <AnimatedButton variant="neon" size="lg">Get Started</AnimatedButton>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-white/60 mb-3">Glow</p>
          <div className="flex flex-wrap gap-3">
            <AnimatedButton variant="glow" leftIcon={Rocket}>Launch</AnimatedButton>
            <AnimatedButton variant="glow" rightIcon={ArrowRight} size="sm">Continue</AnimatedButton>
            <AnimatedButton variant="glow" size="lg">Get Started</AnimatedButton>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-white/60 mb-3">Gradient</p>
          <div className="flex flex-wrap gap-3">
            <AnimatedButton variant="gradient" leftIcon={Star}>Featured</AnimatedButton>
            <AnimatedButton variant="gradient" size="sm">Try it</AnimatedButton>
            <AnimatedButton variant="gradient" rightIcon={ArrowRight} size="lg">Explore</AnimatedButton>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-white/60 mb-3">Outline</p>
          <div className="flex flex-wrap gap-3">
            <AnimatedButton variant="outline">Primary</AnimatedButton>
            <AnimatedButton variant="outline" size="sm" leftIcon={Star}>Save</AnimatedButton>
            <AnimatedButton variant="outline" size="lg" rightIcon={ArrowRight}>Next</AnimatedButton>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-white/60 mb-3">Glass</p>
          <div className="flex flex-wrap gap-3">
            <AnimatedButton variant="glass">Frosted</AnimatedButton>
            <AnimatedButton variant="glass" size="sm" leftIcon={Rocket}>Boost</AnimatedButton>
            <AnimatedButton variant="glass" size="lg" rightIcon={ArrowRight}>Proceed</AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
