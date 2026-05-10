import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { cardVariants } from '../../utils/animations';

interface ServiceCardProps {
  icon?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  features?: readonly string[];
  ctaLabel?: string;
  ctaTo?: string;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  image,
  imageAlt,
  features,
  ctaLabel = 'Learn More',
  ctaTo = '/contact',
  delay = 0,
}: ServiceCardProps) {
  const ref = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ y: -6, scale: 1.01 }}
      viewport={{ once: true, margin: '-50px' }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm shadow-slate-200/70 transition-all duration-300 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/80"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-primary-50">
        {image && (
          <img
            src={image}
            alt={imageAlt || title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-5 flex-1">
          <h3 className="mb-3 text-xl font-semibold leading-tight text-neutral-900 transition-colors duration-300 group-hover:text-primary-700">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            {description}
          </p>
        </div>

        {features && features.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        <Link
          to={ctaTo}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-400 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-primary-400/20 transition-all duration-300 hover:scale-[1.02] hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
          aria-label={`${ctaLabel} for ${title}`}
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      </div>
    </motion.div>
  );
}
