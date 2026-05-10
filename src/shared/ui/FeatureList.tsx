import { motion } from 'framer-motion';
import { HeartPulse, ShieldCheck, Sparkles, Leaf, Headphones, HelpCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { containerVariants, staggerItem } from '../../utils/animations';

const iconMap = {
  zap: HeartPulse,
  shield: ShieldCheck,
  globe: Leaf,
  cpu: Sparkles,
  headphones: Headphones,
};

type IconName = keyof typeof iconMap;

interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {features.map((feature, idx) => (
        <FeatureItem key={idx} feature={feature} />
      ))}
    </motion.div>
  );
}

function FeatureItem({ feature }: { feature: Feature }) {
  const ref = useScrollAnimation();
  
  const IconComponent = iconMap[feature.icon] || HelpCircle;

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="flex items-start gap-4 p-6 rounded-xl border border-neutral-200 bg-white hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/60 transition-all duration-300 group cursor-pointer"
    >
      <motion.div 
        className="w-12 h-12 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
      >
        <IconComponent className="text-primary-500 w-6 h-6" strokeWidth={1.5} />
      </motion.div>
      <div className="flex-1">
        <h4 className="text-neutral-900 font-semibold mb-1 group-hover:text-primary-700 transition-colors">
          {feature.title}
        </h4>
        <p className="text-neutral-600 text-sm leading-relaxed group-hover:text-neutral-700 transition-colors">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
