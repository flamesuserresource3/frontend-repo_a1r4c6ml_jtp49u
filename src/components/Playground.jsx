import React, { useMemo, useState } from 'react';
import AnimatedButton from './AnimatedButton';
import { Rocket, ArrowRight, Star } from 'lucide-react';

const VARIANTS = [
  { key: 'neon', label: 'Neon' },
  { key: 'glow', label: 'Glow' },
  { key: 'gradient', label: 'Gradient' },
  { key: 'outline', label: 'Outline' },
  { key: 'glass', label: 'Glass' },
];

const SIZES = [
  { key: 'sm', label: 'Small' },
  { key: 'md', label: 'Medium' },
  { key: 'lg', label: 'Large' },
];

const ICONS = [
  { key: 'none', label: 'None' },
  { key: 'rocket', label: 'Rocket' },
  { key: 'star', label: 'Star' },
  { key: 'arrow', label: 'Arrow Right' },
];

export default function Playground() {
  const [variant, setVariant] = useState('neon');
  const [size, setSize] = useState('md');
  const [label, setLabel] = useState('Click me');
  const [leftIcon, setLeftIcon] = useState('rocket');
  const [rightIcon, setRightIcon] = useState('none');

  const LeftIconComp = useMemo(() => {
    switch (leftIcon) {
      case 'rocket':
        return Rocket;
      case 'star':
        return Star;
      case 'arrow':
        return ArrowRight;
      default:
        return undefined;
    }
  }, [leftIcon]);

  const RightIconComp = useMemo(() => {
    switch (rightIcon) {
      case 'rocket':
        return Rocket;
      case 'star':
        return Star;
      case 'arrow':
        return ArrowRight;
      default:
        return undefined;
    }
  }, [rightIcon]);

  return (
    <section className="max-w-5xl mx-auto px-6 py-8">
      <h2 className="text-xl font-semibold text-white/90 mb-4">Playground</h2>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/60 mb-2">Variant</label>
              <div className="flex flex-wrap gap-2">
                {VARIANTS.map(v => (
                  <button
                    key={v.key}
                    onClick={() => setVariant(v.key)}
                    className={`px-3 py-1.5 rounded-md text-sm border ${variant === v.key ? 'bg-white/20 text-white border-white/30' : 'text-white/70 border-white/10 hover:bg-white/10'}`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/60 mb-2">Size</label>
              <div className="flex flex-wrap gap-2">
                {SIZES.map(s => (
                  <button
                    key={s.key}
                    onClick={() => setSize(s.key)}
                    className={`px-3 py-1.5 rounded-md text-sm border ${size === s.key ? 'bg-white/20 text-white border-white/30' : 'text-white/70 border-white/10 hover:bg-white/10'}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/60 mb-2">Left Icon</label>
              <div className="flex flex-wrap gap-2">
                {ICONS.map(i => (
                  <button
                    key={i.key}
                    onClick={() => setLeftIcon(i.key)}
                    className={`px-3 py-1.5 rounded-md text-sm border ${leftIcon === i.key ? 'bg-white/20 text-white border-white/30' : 'text-white/70 border-white/10 hover:bg-white/10'}`}
                  >
                    {i.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/60 mb-2">Right Icon</label>
              <div className="flex flex-wrap gap-2">
                {ICONS.map(i => (
                  <button
                    key={i.key}
                    onClick={() => setRightIcon(i.key)}
                    className={`px-3 py-1.5 rounded-md text-sm border ${rightIcon === i.key ? 'bg-white/20 text-white border-white/30' : 'text-white/70 border-white/10 hover:bg-white/10'}`}
                  >
                    {i.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs text-white/60 mb-2">Label</label>
              <input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="Button text"
                className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              />
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 flex items-center justify-center">
          <AnimatedButton variant={variant} size={size} leftIcon={LeftIconComp} rightIcon={RightIconComp}>
            {label}
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
