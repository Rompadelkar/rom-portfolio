'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlassIconProps {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  iconClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animateFloat?: boolean;
}

export function GlassIcon({
  icon: Icon,
  className = '',
  iconClassName = '',
  size = 'md',
  animateFloat = false,
}: GlassIconProps) {
  const sizeMap = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-11 h-11 p-2.5',
    lg: 'w-14 h-14 p-3.5',
    xl: 'w-16 h-16 p-4',
  };

  const iconSizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
    xl: 'w-8 h-8',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 6, y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`relative rounded-2xl glass glow-border flex items-center justify-center shadow-lg group overflow-hidden ${sizeMap[size]} ${animateFloat ? 'animate-float-slow' : ''} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute inset-0 bg-blue-500/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <Icon className={`text-blue-400 group-hover:text-blue-300 transition-colors duration-300 relative z-10 ${iconSizeMap[size]} ${iconClassName}`} />
    </motion.div>
  );
}
