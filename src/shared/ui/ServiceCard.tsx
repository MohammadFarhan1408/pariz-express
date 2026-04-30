import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { cardVariants } from '../../utils/animations';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features?: readonly string[];
  delay?: number;
}

export default function ServiceCard({ icon, title, description, features, delay = 0 }: ServiceCardProps) {
  const ref = useScrollAnimation();
  
  // Get the icon component from lucide-react
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as any;
  const iconColor = 'text-secondary-500';

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-50px' }}
      className="rounded-2xl p-8 border border-white/10 bg-linear-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm hover:border-secondary-500/30 group overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <motion.div 
        className="relative w-16 h-16 rounded-xl bg-secondary-500/15 flex items-center justify-center mb-6 group-hover:bg-secondary-500/25 transition-all duration-300"
        whileHover={{ scale: 1.15 }}
      >
        {IconComponent && <IconComponent className={`${iconColor} w-8 h-8`} strokeWidth={1.5} />}
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary-400 transition-colors duration-300 relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-neutral-400 leading-relaxed mb-4 relative z-10">{description}</p>

      {/* Features List */}
      {features && features.length > 0 && (
        <ul className="space-y-2 relative z-10">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300 hover:text-neutral-200 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-secondary-500 to-secondary-400 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
