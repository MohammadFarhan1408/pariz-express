import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import HeroSection from '../../shared/sections/HeroSection';
import SectionWrapper from '../../shared/layout/SectionWrapper';
import ServiceCard from '../../shared/ui/ServiceCard';
import CTASection from '../../shared/sections/CTASection';
import { SERVICES } from '../../utils/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { containerVariants, fadeInUp, cardVariants } from '../../utils/animations';

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        headline={
          <>
            Our <span className="text-gradient-orange">Services</span>
          </>
        }
        subtitle="Comprehensive logistics solutions tailored to your business needs — from last-mile delivery to full-scale distribution."
        breadcrumb="Services"
      />

      {/* Services Grid */}
      <SectionWrapper id="services-grid" variant="dark">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {SERVICES.map((service, idx) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={idx * 100}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* How We Differ */}
      <SectionWrapper variant="dark" id="differentiators">
        <DiffSection />
      </SectionWrapper>

      <CTASection
        headline="Need a Custom Solution?"
        subtitle="Our logistics experts will design a tailored package that fits your unique requirements."
        ctaLabel="Talk to an Expert"
      />
    </>
  );
}

function Header() {
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
        What We Offer
      </motion.span>
      <motion.h2 
        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
        variants={fadeInUp}
      >
        Logistics Solutions for Every Need
      </motion.h2>
      <motion.p 
        className="text-neutral-400 text-lg"
        variants={fadeInUp}
      >
        Whether you're a startup or an enterprise, we have the infrastructure and technology to power your deliveries.
      </motion.p>
    </motion.div>
  );
}

function DiffSection() {
  const ref = useScrollAnimation();
  const items = [
    { icon: 'Building2', title: 'Built for Scale', desc: 'Infrastructure that grows with your business — from 100 to 100,000 deliveries a day.' },
    { icon: 'Link', title: 'Seamless Integration', desc: 'API-first approach lets you plug our services into your existing tech stack.' },
    { icon: 'BarChart3', title: 'Data-Driven', desc: 'Real-time analytics and predictive insights to optimize your supply chain.' },
  ];

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <motion.span 
          className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/10 text-secondary-400 text-sm font-medium mb-4"
          variants={fadeInUp}
        >
          The Pariz Difference
        </motion.span>
        <motion.h2 
          className="text-3xl sm:text-4xl font-display font-bold text-white mb-4"
          variants={fadeInUp}
        >
          Why Businesses Choose Us
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => {
          const IconComponent = LucideIcons[item.icon as keyof typeof LucideIcons] as any;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="text-center p-8 rounded-2xl border border-white/10 bg-linear-to-br from-neutral-900/50 to-neutral-800/30 hover:border-secondary-500/30 transition-colors duration-300 group cursor-pointer overflow-hidden"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-linear-to-br from-secondary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div 
                className="relative z-10 w-12 h-12 rounded-lg bg-secondary-500/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-500/25 transition-all duration-300"
                whileHover={{ scale: 1.15 }}
              >
                {IconComponent && <IconComponent className="text-secondary-500 w-6 h-6" strokeWidth={1.5} />}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary-400 transition-colors relative z-10">{item.title}</h3>
              <p className="text-neutral-400 relative z-10">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
