import { motion } from 'framer-motion';
import HeroSection from '../../shared/sections/HeroSection';
import SectionWrapper from '../../shared/layout/SectionWrapper';
import ServiceCard from '../../shared/ui/ServiceCard';
import StepCard from '../../shared/ui/StepCard';
import TestimonialCard from '../../shared/ui/TestimonialCard';
import FeatureList from '../../shared/ui/FeatureList';
import CTASection from '../../shared/sections/CTASection';
import { SERVICES, PROCESS_STEPS, TESTIMONIALS, STATS } from '../../utils/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { containerVariants, fadeInUp } from '../../utils/animations';

interface Feature {
  icon: 'zap' | 'shield' | 'globe' | 'cpu' | 'headphones';
  title: string;
  description: string;
}

const WHY_US_FEATURES: Feature[] = [
  { icon: 'zap', title: 'Lightning Fast', description: 'Same-day and next-day delivery options with industry-leading speed.' },
  { icon: 'shield', title: 'Reliable & Secure', description: '98.5% on-time delivery rate with full insurance coverage.' },
  { icon: 'cpu', title: 'Tech-Powered', description: 'AI route optimization and real-time tracking for total visibility.' },
  { icon: 'headphones', title: '24/7 Support', description: 'Dedicated account managers and round-the-clock customer service.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headline={
          <>
            Logistics That Move <br />
            <span className="text-gradient-orange">At Your Speed</span>
          </>
        }
        subtitle="Premium last-mile delivery, e-commerce fulfillment, and distribution solutions — powered by technology, driven by reliability."
        primaryCTA={{ label: 'Get a Quote', to: '/contact' }}
        // secondaryCTA={{ label: 'Track Package', to: '/tracking' }}
      />

      {/* Stats Bar */}
      <StatsBar />

      {/* Services Overview */}
      <SectionWrapper id="services-overview" variant="dark">
        <SectionHeader
          label="Our Services"
          title="End-to-End Logistics Solutions"
          subtitle="From warehouse to doorstep, we handle every mile with precision and care."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {SERVICES.slice(0, 4).map((service, idx) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={idx * 100}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper variant="dark" id="why-us">
        <SectionHeader
          label="Why Pariz Express"
          title="Built for Modern Commerce"
          subtitle="We combine logistics expertise with cutting-edge technology to deliver exceptional results."
        />
        <div className="mt-12">
          <FeatureList features={WHY_US_FEATURES} />
        </div>
      </SectionWrapper>

      {/* Process Steps */}
      <SectionWrapper id="process" variant="dark">
        <SectionHeader
          label="How It Works"
          title="Simple. Seamless. Swift."
          subtitle="Four easy steps to get your packages delivered."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {PROCESS_STEPS.map((step, idx) => (
            <StepCard
              key={step.step}
              {...step}
              delay={idx * 150}
              isLast={idx === PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper variant="dark" id="testimonials">
        <SectionHeader
          label="Testimonials"
          title="Trusted by Leading Brands"
          subtitle="See what our clients say about working with Pariz Express."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} delay={idx * 100} />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTASection />
    </>
  );
}

/* ── Sub-Components ── */

function StatsBar() {
  const ref = useScrollAnimation(0.3);

  return (
    <motion.div 
      ref={ref} 
      className="relative -mt-16 z-20 max-w-5xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-linear-to-r from-neutral-900/80 to-neutral-800/60 backdrop-blur-lg border border-white/10">
        {STATS.map((stat, idx) => (
          <motion.div 
            key={stat.label} 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            <div className="text-3xl lg:text-4xl font-display font-bold text-gradient-orange mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-neutral-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  const ref = useScrollAnimation();

  return (
    <motion.div 
      ref={ref} 
      className="text-center max-w-2xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.span 
        className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/10 text-secondary-400 text-sm font-medium mb-4"
        variants={fadeInUp}
      >
        {label}
      </motion.span>
      <motion.h2 
        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="text-neutral-400 text-lg"
        variants={fadeInUp}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
}
