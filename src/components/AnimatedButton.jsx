import React from 'react';
import { motion } from 'framer-motion';

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const baseStyles = 'inline-flex items-center gap-2 rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed';

const variants = {
  glow: 'bg-indigo-600 text-white shadow-[0_0_0_0_rgba(99,102,241,0.7)]',
  gradient: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white',
  outline: 'bg-transparent border border-indigo-500 text-indigo-600',
  glass: 'backdrop-blur bg-white/10 text-white border border-white/20',
};

const hoverAnimations = {
  glow: {
    boxShadow: [
      '0 0 0 0 rgba(99,102,241,0.7)',
      '0 0 25px 6px rgba(99,102,241,0.7)'
    ],
    scale: 1.03,
  },
  gradient: { scale: 1.04 },
  outline: { scale: 1.03, backgroundColor: 'rgba(99,102,241,0.06)' },
  glass: { scale: 1.03, backgroundColor: 'rgba(255,255,255,0.2)' },
};

const tapAnimation = { scale: 0.98 };

export default function AnimatedButton({
  children,
  variant = 'glow',
  size = 'md',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = '',
  ...rest
}) {
  const sizeCls = sizeStyles[size] || sizeStyles.md;
  const variantCls = variants[variant] || variants.glow;

  return (
    <motion.button
      whileHover={hoverAnimations[variant]}
      whileTap={tapAnimation}
      className={`${baseStyles} ${sizeCls} ${variantCls} ${className}`}
      {...rest}
    >
      {LeftIcon ? <LeftIcon className="h-4 w-4" /> : null}
      <span>{children}</span>
      {RightIcon ? <RightIcon className="h-4 w-4" /> : null}
    </motion.button>
  );
}
