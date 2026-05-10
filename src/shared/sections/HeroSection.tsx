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
  backgroundImage?: string;
  imageAlt?: string;
  trustText?: string;
}

export default function HeroSection({
  headline,
  subtitle,
  primaryCTA,
  secondaryCTA,
  breadcrumb,
  backgroundImage = images.hero,
  imageAlt = 'Professional medical transportation assistance',
  trustText = 'Trusted medical transportation for patients, families, and care teams',
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[78vh] flex items-center bg-neutral-50 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={backgroundImage}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/70 via-slate-900/45 to-primary-900/35 pointer-events-none" />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 w-full">
        {breadcrumb && (
          <motion.nav 
            className="flex items-center gap-2 text-sm text-white/70 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-primary-200 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">{breadcrumb}</span>
          </motion.nav>
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
            className="text-lg sm:text-xl text-white/85 max-w-2xl mb-10 leading-relaxed"
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
            className="mt-16 pt-8 border-t border-white/15"
            variants={fadeInUp}
          >
            <p className="text-sm text-white/70">
              {trustText}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
