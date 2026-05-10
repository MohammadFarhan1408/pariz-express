import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import HeroSection from '../../shared/sections/HeroSection';
import SectionWrapper from '../../shared/layout/SectionWrapper';
import CTASection from '../../shared/sections/CTASection';
import { STATS } from '../../utils/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { containerVariants, fadeInUp, cardVariants, staggerItem } from '../../utils/animations';
import { images } from '../../data/images';

export default function AboutPage() {
  return (
    <>
      <HeroSection
        headline={
          <>
            About <span className="text-gradient-sky">Pariz Express</span>
          </>
        }
        subtitle="Compassionate medical transportation built around safety, reliability, accessibility, and human-centered care."
        breadcrumb="About Us"
        backgroundImage={images.aboutHero}
        imageAlt="Healthcare professional supporting a patient with medical transportation"
        trustText="Serving patients, caregivers, families, and healthcare teams"
      />

      {/* Story Section */}
      <SectionWrapper id="our-story" variant="dark">
        <StorySection />
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper variant="dark" id="mission-vision">
        <MissionVision />
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper id="stats" variant="dark">
        <StatsSection />
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper variant="dark" id="values">
        <ValuesSection />
      </SectionWrapper>

      <CTASection
        headline="Transportation You Can Feel Confident About"
        subtitle="Let Pariz Express coordinate a safe, comfortable ride for your next medical appointment or care transition."
        ctaLabel="Book Transportation"
      />
    </>
  );
}

function StorySection() {
  const ref = useScrollAnimation();

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.div variants={fadeInUp}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 border border-primary-100 text-sm font-medium mb-4">
          Company Introduction
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-6">
          Patient-First Transportation with Professional Care
        </h2>
        <div className="space-y-4 text-neutral-600 leading-relaxed">
          <p>
            Pariz Express provides non-emergency medical transportation for people who need more than a standard ride.
            We help patients travel to appointments, treatments, discharges, and mobility-related destinations with care and reliability.
          </p>
          <p>
            Our approach is simple: arrive prepared, communicate clearly, and treat every passenger with dignity.
            From wheelchair transportation to recurring treatment rides, our team focuses on safe support and dependable timing.
          </p>
          <p>
            Families and care teams choose Pariz Express because we understand that medical transportation is personal.
            Comfort, accessibility, and peace of mind guide every trip we coordinate.
          </p>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div 
        className="relative rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={images.aboutStory}
          alt="Medical transportation support for a patient"
          className="w-full h-full object-cover rounded-2xl aspect-square"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent rounded-2xl" />
      </motion.div>
    </motion.div>
  );
}

function MissionVision() {
  const ref = useScrollAnimation();

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <motion.h2 
          className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4"
          variants={fadeInUp}
        >
          Mission & Transportation Approach
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          variants={cardVariants}
          className="rounded-2xl p-10 border border-neutral-200 bg-white shadow-sm shadow-slate-200/60 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/70 overflow-hidden group"
          whileHover="hover"
        >
          <div className="absolute inset-0 bg-linear-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div 
            className="w-14 h-14 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-all duration-300 relative z-10"
            whileHover={{ scale: 1.15 }}
          >
            <LucideIcons.Target className="text-primary-500 w-7 h-7" strokeWidth={1.5} />
          </motion.div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors relative z-10">Patient-First Care</h3>
          <p className="text-neutral-600 leading-relaxed relative z-10">
            To make medical transportation safer, easier, and more compassionate for patients, caregivers, and healthcare partners.
          </p>
        </motion.div>
        <motion.div 
          variants={cardVariants}
          className="rounded-2xl p-10 border border-neutral-200 bg-white shadow-sm shadow-slate-200/60 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/70 overflow-hidden group"
          whileHover="hover"
        >
          <div className="absolute inset-0 bg-linear-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div 
            className="w-14 h-14 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-all duration-300 relative z-10"
            whileHover={{ scale: 1.15 }}
          >
            <LucideIcons.Eye className="text-primary-500 w-7 h-7" strokeWidth={1.5} />
          </motion.div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors relative z-10">Safety & Reliability</h3>
          <p className="text-neutral-600 leading-relaxed relative z-10">
            To be a trusted transportation partner known for accessibility, professional service, and care that families can rely on.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function StatsSection() {
  const ref = useScrollAnimation();

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
          Company Standards
        </motion.span>
        <motion.h2 
          className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4"
          variants={fadeInUp}
        >
          Reliable Medical Transportation
        </motion.h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, idx) => (
          <motion.div 
            key={stat.label}
            variants={staggerItem}
            className="text-center p-8 rounded-2xl border border-neutral-200 bg-white shadow-sm shadow-slate-200/60 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/70 transition-all duration-300 group overflow-hidden"
            whileHover={{ y: -8 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div 
              className="text-4xl lg:text-5xl font-display font-bold text-gradient-sky mb-2 relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {stat.value}
            </motion.div>
            <div className="text-neutral-600 relative z-10">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ValuesSection() {
  const ref = useScrollAnimation();

  const values = [
    { icon: 'ShieldCheck', title: 'Safety', desc: 'Every ride is planned with passenger comfort and secure transportation in mind.' },
    { icon: 'Clock3', title: 'Reliability', desc: 'We coordinate pickup and arrival windows around medical schedules.' },
    { icon: 'UserRoundCheck', title: 'Professional Drivers', desc: 'Our team brings patience, preparation, and respectful communication to each trip.' },
    { icon: 'Accessibility', title: 'Accessibility', desc: 'We support wheelchair users, seniors, and passengers with mobility needs.' },
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
          Our Values
        </motion.span>
        <motion.h2 
          className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mb-4"
          variants={fadeInUp}
        >
          Why Choose Pariz Express
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((val, idx) => {
          const IconComponent = LucideIcons[val.icon as keyof typeof LucideIcons] as LucideIcon | undefined;
          return (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="text-center p-8 rounded-2xl border border-neutral-200 bg-white shadow-sm shadow-slate-200/60 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/70 transition-all duration-300 group overflow-hidden"
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div 
                className="relative z-10 w-12 h-12 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-all duration-300"
                whileHover={{ scale: 1.15 }}
              >
                {IconComponent && <IconComponent className="text-primary-500 w-6 h-6" strokeWidth={1.5} />}
              </motion.div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors relative z-10">{val.title}</h3>
              <p className="text-neutral-600 text-sm relative z-10">{val.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
