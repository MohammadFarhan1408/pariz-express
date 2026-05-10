import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
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
            Our <span className="text-gradient-sky">Services</span>
          </>
        }
        subtitle="Professional non-emergency medical transportation designed around safety, punctuality, accessibility, and compassionate care."
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
              image={service.image}
              imageAlt={service.imageAlt}
              features={service.features}
              ctaLabel="Learn More"
              ctaTo={`/services/${service.id}`}
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
        headline="Need Help Choosing the Right Ride?"
        subtitle="Tell us about the appointment, mobility needs, and schedule. Our team will help coordinate dependable medical transportation."
        ctaLabel="Request Ride Support"
      />
    </>
  );
}

function Header() {
  const ref = useScrollAnimation();
  return (
    <motion.div 
      ref={ref} 
      className="text-center max-w-3xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.span 
        className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 border border-primary-100 text-sm font-medium mb-4"
        variants={fadeInUp}
      >
        Medical Transportation Services
      </motion.span>
      <motion.h2 
        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4"
        variants={fadeInUp}
      >
        Accessible Rides for Every Care Need
      </motion.h2>
      <motion.p 
        className="text-neutral-600 text-lg leading-relaxed"
        variants={fadeInUp}
      >
        Clean, coordinated transportation for appointments, treatments, discharges, and everyday mobility support.
      </motion.p>
      <motion.div
        className="mt-6 inline-flex items-center rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm shadow-slate-200/70"
        variants={fadeInUp}
      >
        Trusted support for patients, families, and care teams
      </motion.div>
    </motion.div>
  );
}

function DiffSection() {
  const ref = useScrollAnimation();
  const items = [
    { icon: 'BadgeCheck', title: 'Safety First', desc: 'Careful boarding, securement, and driver support for a smoother ride.' },
    { icon: 'Clock3', title: 'Reliable Timing', desc: 'Appointments, pickups, and recurring trips coordinated with punctuality in mind.' },
    { icon: 'HeartHandshake', title: 'Compassionate Care', desc: 'Respectful assistance for patients, seniors, caregivers, and families.' },
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
          className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 border border-primary-100 text-sm font-medium mb-4"
          variants={fadeInUp}
        >
          Why Families Choose Us
        </motion.span>
        <motion.h2 
          className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4"
          variants={fadeInUp}
        >
          Professional Care Beyond the Vehicle
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => {
          const IconComponent = LucideIcons[item.icon as keyof typeof LucideIcons] as LucideIcon | undefined;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="text-center p-8 rounded-2xl border border-neutral-200 bg-white shadow-sm shadow-slate-200/60 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/70 transition-all duration-300 group cursor-pointer overflow-hidden"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div 
                className="relative z-10 w-12 h-12 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-all duration-300"
                whileHover={{ scale: 1.15 }}
              >
                {IconComponent && <IconComponent className="text-primary-500 w-6 h-6" strokeWidth={1.5} />}
              </motion.div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors relative z-10">{item.title}</h3>
              <p className="text-neutral-600 relative z-10">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
