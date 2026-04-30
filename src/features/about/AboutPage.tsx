import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
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
            About <span className="text-gradient-orange">Pariz Express</span>
          </>
        }
        subtitle="We're on a mission to revolutionize logistics with technology, reliability, and an unwavering commitment to our clients."
        breadcrumb="About"
      />

      {/* Story Section */}
      <SectionWrapper id="our-story" variant="light">
        <StorySection />
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper variant="dark" id="mission-vision">
        <MissionVision />
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper id="stats" variant="light">
        <StatsSection />
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper variant="dark" id="values">
        <ValuesSection />
      </SectionWrapper>

      <CTASection
        headline="Join the Pariz Express Network"
        subtitle="Partner with us and experience logistics that truly moves at the speed of business."
        ctaLabel="Get Started Today"
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
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/10 text-secondary-400 text-sm font-medium mb-4">
          Our Story
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
          From a Single Van to a National Network
        </h2>
        <div className="space-y-4 text-neutral-300 leading-relaxed">
          <p>
            Pariz Express was founded with a simple belief: every package deserves to arrive on time, every time.
            What started as a small delivery operation has grown into one of the nation's most trusted logistics partners.
          </p>
          <p>
            Today, we serve thousands of businesses across 500+ cities, processing millions of deliveries annually.
            Our technology-first approach combined with operational excellence ensures that we don't just deliver packages
            — we deliver trust.
          </p>
          <p>
            From e-commerce startups to Fortune 500 retailers, our clients rely on us for the most critical leg of their
            supply chain: the last mile.
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
          alt="Warehouse team coordination"
          className="w-full h-full object-cover rounded-2xl aspect-square"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent rounded-2xl" />
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
          className="text-3xl sm:text-4xl font-display font-bold text-white mb-4"
          variants={fadeInUp}
        >
          Mission & Vision
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          variants={cardVariants}
          className="rounded-2xl p-10 border border-white/10 bg-linear-to-br from-neutral-900/50 to-neutral-800/30 hover:border-secondary-500/30 overflow-hidden group"
          whileHover="hover"
        >
          <div className="absolute inset-0 bg-linear-to-br from-secondary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div 
            className="w-14 h-14 rounded-xl bg-secondary-500/15 flex items-center justify-center mb-6 group-hover:bg-secondary-500/25 transition-all duration-300 relative z-10"
            whileHover={{ scale: 1.15 }}
          >
            <LucideIcons.Target className="text-secondary-500 w-7 h-7" strokeWidth={1.5} />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary-400 transition-colors relative z-10">Our Mission</h3>
          <p className="text-neutral-300 leading-relaxed relative z-10">
            To empower businesses with fast, reliable, and technology-driven logistics solutions that make last-mile
            delivery seamless and cost-effective.
          </p>
        </motion.div>
        <motion.div 
          variants={cardVariants}
          className="rounded-2xl p-10 border border-white/10 bg-linear-to-br from-neutral-900/50 to-neutral-800/30 hover:border-primary-500/30 overflow-hidden group"
          whileHover="hover"
        >
          <div className="absolute inset-0 bg-linear-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div 
            className="w-14 h-14 rounded-xl bg-primary-500/15 flex items-center justify-center mb-6 group-hover:bg-primary-500/25 transition-all duration-300 relative z-10"
            whileHover={{ scale: 1.15 }}
          >
            <LucideIcons.Eye className="text-primary-500 w-7 h-7" strokeWidth={1.5} />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors relative z-10">Our Vision</h3>
          <p className="text-neutral-300 leading-relaxed relative z-10">
            To become the most trusted logistics partner in the nation, setting the standard for speed, reliability,
            and innovation in every delivery we make.
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
          className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/10 text-secondary-400 text-sm font-medium mb-4"
          variants={fadeInUp}
        >
          By the Numbers
        </motion.span>
        <motion.h2 
          className="text-3xl sm:text-4xl font-display font-bold text-white mb-4"
          variants={fadeInUp}
        >
          Operational Strength
        </motion.h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, idx) => (
          <motion.div 
            key={stat.label}
            variants={staggerItem}
            className="text-center p-8 rounded-2xl border border-white/10 bg-linear-to-br from-neutral-900/50 to-neutral-800/30 hover:border-secondary-500/30 transition-colors duration-300 group overflow-hidden"
            whileHover={{ y: -8 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-secondary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div 
              className="text-4xl lg:text-5xl font-display font-bold text-gradient-orange mb-2 relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {stat.value}
            </motion.div>
            <div className="text-neutral-400 relative z-10">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ValuesSection() {
  const ref = useScrollAnimation();

  const values = [
    { icon: 'Gem', title: 'Integrity', desc: 'We operate with transparency and honesty in every interaction.' },
    { icon: 'Rocket', title: 'Innovation', desc: 'We constantly push boundaries to deliver smarter logistics.' },
    { icon: 'Handshake', title: 'Partnership', desc: 'Your success is our success — we grow together.' },
    { icon: 'Leaf', title: 'Sustainability', desc: 'Committed to reducing our environmental footprint.' },
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
          className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-300 text-sm font-medium mb-4"
          variants={fadeInUp}
        >
          Our Values
        </motion.span>
        <motion.h2 
          className="text-3xl sm:text-4xl font-display font-bold text-white mb-4"
          variants={fadeInUp}
        >
          What Drives Us
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((val, idx) => {
          const IconComponent = LucideIcons[val.icon as keyof typeof LucideIcons] as any;
          return (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="text-center p-8 rounded-2xl border border-white/10 bg-linear-to-br from-neutral-900/50 to-neutral-800/30 hover:border-secondary-500/30 transition-colors duration-300 group overflow-hidden"
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-secondary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div 
                className="relative z-10 w-12 h-12 rounded-lg bg-secondary-500/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-500/25 transition-all duration-300"
                whileHover={{ scale: 1.15 }}
              >
                {IconComponent && <IconComponent className="text-secondary-500 w-6 h-6" strokeWidth={1.5} />}
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-secondary-400 transition-colors relative z-10">{val.title}</h3>
              <p className="text-neutral-400 text-sm relative z-10">{val.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
