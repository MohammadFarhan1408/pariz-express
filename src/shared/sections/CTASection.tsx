import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { fadeInUp, containerVariants } from '../../utils/animations';

interface CTASectionProps {
  headline?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export default function CTASection({
  headline = 'Ready to Transform Your Logistics?',
  subtitle = 'Get a custom quote in minutes. Our team is ready to design a solution that scales with your business.',
  ctaLabel = 'Get a Free Quote',
  ctaTo = '/contact',
}: CTASectionProps) {
  return (
    <motion.section 
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-primary-900/40 via-secondary-900/30 to-accent-900/40" />
      
      {/* Animated background orbs */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
          variants={fadeInUp}
        >
          {headline}
        </motion.h2>
        
        <motion.p 
          className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={ctaTo}>
            <Button
              size="lg"
              className="!bg-linear-to-r !from-secondary-500 !to-secondary-400 !text-white hover:!shadow-[0_0_40px_rgba(255,140,0,0.4)] !border-0"
            >
              {ctaLabel} →
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
