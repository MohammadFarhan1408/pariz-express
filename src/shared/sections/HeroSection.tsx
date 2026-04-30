import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { fadeInUp, slideInUp, containerVariants } from '../../utils/animations';
import { images } from '../../data/images';

interface HeroSectionProps {
  headline: ReactNode;
  subtitle: string;
  primaryCTA?: { label: string; to: string };
  secondaryCTA?: { label: string; to: string };
  breadcrumb?: string;
}

export default function HeroSection({ headline, subtitle, primaryCTA, secondaryCTA, breadcrumb }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-neutral-950 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={images.hero}
          alt="Logistics background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70 pointer-events-none" />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-500/6 rounded-full blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/4 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 w-full">
        {breadcrumb && (
          <motion.div 
            className="flex items-center gap-2 text-sm text-neutral-400 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Link to="/" className="hover:text-secondary-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-neutral-300">{breadcrumb}</span>
          </motion.div>
        )}

        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6 text-white"
            variants={fadeInUp}
          >
            {headline}
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl text-neutral-300 max-w-2xl mb-10"
            variants={fadeInUp}
          >
            {subtitle}
          </motion.p>

          {(primaryCTA || secondaryCTA) && (
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={slideInUp}
            >
              {primaryCTA && (
                <Link to={primaryCTA.to}>
                  <Button size="lg" isMotion>
                    {primaryCTA.label}
                  </Button>
                </Link>
              )}
              {secondaryCTA && (
                <Link to={secondaryCTA.to}>
                  <Button variant="outline" size="lg" isMotion>
                    {secondaryCTA.label}
                  </Button>
                </Link>
              )}
            </motion.div>
          )}

          {/* Trust indicator */}
          <motion.div 
            className="mt-16 pt-8 border-t border-white/5"
            variants={fadeInUp}
          >
            <p className="text-sm text-neutral-500">
              ✓ Trusted by 500+ businesses across the nation
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
