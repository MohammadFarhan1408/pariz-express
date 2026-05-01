import { motion } from 'framer-motion';
import { Zap, Shield, Globe } from 'lucide-react'; // import only what you use
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { containerVariants, staggerItem } from '../../utils/animations';

const iconMap = {
  zap: Zap,
  shield: Shield,
  globe: Globe,
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
  const IconComponent = iconMap[feature.icon];

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      whileHover={{ x: 8 }}
      className="flex items-start gap-4 p-6 rounded-xl border border-white/5 hover:border-secondary-500/20 hover:bg-neutral-900/50 transition-all duration-300 group cursor-pointer"
    >
      <motion.div 
        className="w-12 h-12 rounded-lg bg-linear-to-br from-secondary-500/20 to-secondary-500/5 flex items-center justify-center shrink-0 group-hover:from-secondary-500/30 group-hover:to-secondary-500/10 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
      >
        <IconComponent className="text-secondary-500 w-6 h-6" strokeWidth={1.5} />
      </motion.div>
      <div className="flex-1">
        <h4 className="text-white font-semibold mb-1 group-hover:text-secondary-400 transition-colors">
          {feature.title}
        </h4>
        <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}