import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface StepCardProps {
  step: number;
  icon: string;
  title: string;
  description: string;
  delay?: number;
  isLast?: boolean;
}

export default function StepCard({ step, icon, title, description, delay = 0, isLast = false }: StepCardProps) {
  const ref = useScrollAnimation();
  
  // Get the icon component from lucide-react
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon | undefined;

  return (
    <motion.div 
      className="flex flex-col items-center relative" 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: (delay || 0) / 1000, duration: 0.5, ease: 'easeOut' }}
    >
      {/* Connector line */}
      {!isLast && (
        <motion.div 
          className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-linear-to-r from-primary-300 to-transparent"
          initial={{ scaleX: 0, transformOrigin: 'left' }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: (delay || 0) / 1000 + 0.3, duration: 0.6 }}
        />
      )}

      <div className="flex flex-col items-center text-center">
        {/* Step Number + Icon */}
        <motion.div 
          className="relative mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="w-20 h-20 rounded-2xl bg-white border border-primary-100 shadow-sm shadow-slate-200/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group"
            whileHover={{ borderColor: 'rgba(56, 189, 248, 0.45)', boxShadow: '0 18px 30px rgba(56, 189, 248, 0.14)' }}
          >
            {IconComponent && <IconComponent className="text-primary-500 w-10 h-10" strokeWidth={1.5} />}
          </motion.div>
          <motion.div 
            className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary-400 text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-primary-400/25"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (delay || 0) / 1000 + 0.2, type: 'spring', stiffness: 400 }}
          >
            {step}
          </motion.div>
        </motion.div>

        {/* Title */}
        <h3 className="text-lg font-bold text-neutral-900 mb-2">{title}</h3>

        {/* Description */}
        <p className="text-neutral-600 text-sm max-w-[200px] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
