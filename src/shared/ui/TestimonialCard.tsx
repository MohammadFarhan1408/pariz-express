import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { cardVariants } from '../../utils/animations';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  delay?: number;
}

export default function TestimonialCard({ name, role, quote, rating, delay = 0 }: TestimonialCardProps) {
  const ref = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-50px' }}
      className="rounded-2xl p-8 border border-neutral-200 bg-white shadow-sm shadow-slate-200/60 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/70 relative overflow-hidden group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Decorative quote mark */}
      <motion.div 
        className="absolute top-4 right-6 text-6xl text-primary-200 font-serif select-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: (delay || 0) / 1000 + 0.3 }}
      >
        "
      </motion.div>

      {/* Rating */}
      <motion.div 
        className="flex gap-1 mb-4"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (delay || 0) / 1000 }}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (delay || 0) / 1000 + i * 0.05 }}
          >
            <Star
              size={18}
              className={`${i < rating ? 'fill-primary-400 text-primary-400' : 'text-neutral-300'}`}
              strokeWidth={1}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.p 
        className="text-neutral-700 leading-relaxed mb-6 italic relative z-10 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: (delay || 0) / 1000 + 0.1, duration: 0.5 }}
      >
        "{quote}"
      </motion.p>

      {/* Author */}
      <motion.div 
        className="flex items-center gap-3 relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (delay || 0) / 1000 + 0.2 }}
      >
        <motion.div 
          className="w-10 h-10 rounded-full bg-linear-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white font-bold text-sm shrink-0"
          whileHover={{ scale: 1.1 }}
        >
          {name.charAt(0)}
        </motion.div>
        <div>
          <p className="text-neutral-900 font-semibold text-sm group-hover:text-primary-700 transition-colors">{name}</p>
          <p className="text-neutral-500 text-xs">{role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
