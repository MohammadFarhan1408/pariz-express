import { motion } from "framer-motion";
import HeroSection from "../../shared/sections/HeroSection";
import SectionWrapper from "../../shared/layout/SectionWrapper";
import ServiceCard from "../../shared/ui/ServiceCard";
import StepCard from "../../shared/ui/StepCard";
import TestimonialCard from "../../shared/ui/TestimonialCard";
import FeatureList from "../../shared/ui/FeatureList";
import CTASection from "../../shared/sections/CTASection";
import {
  SERVICES,
  PROCESS_STEPS,
  TESTIMONIALS,
  STATS,
} from "../../utils/constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { containerVariants, fadeInUp } from "../../utils/animations";

interface Feature {
  icon: "zap" | "shield" | "globe" | "cpu" | "headphones";
  title: string;
  description: string;
}

const WHY_US_FEATURES: Feature[] = [
  {
    icon: "zap",
    title: "Fast Coordination",
    description:
      "Simple booking support for one-time, recurring, and urgent ride requests.",
  },
  {
    icon: "shield",
    title: "Safety-Focused",
    description:
      "Careful boarding, secure transportation, and patient-first assistance.",
  },
  {
    icon: "cpu",
    title: "Accessible Rides",
    description:
      "Transportation options for wheelchair users, seniors, and mobility needs.",
  },
  {
    icon: "headphones",
    title: "Helpful Support",
    description:
      "Clear communication for patients, families, facilities, and caregivers.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headline={
          <>
            Safe & Reliable <br />
            <span className="text-gradient-sky">Medical Transportation</span>
          </>
        }
        subtitle="Compassionate non-emergency transportation designed for comfort, accessibility, and peace of mind."
        primaryCTA={{ label: "Get Assistance", to: "/contact" }}
        secondaryCTA={{ label: "Contact Us", to: "/contact" }}
        trustText="Professional rides for appointments, treatments, discharges, and mobility assistance"
      />

      {/* Stats Bar */}
      <StatsBar />

      {/* Services Overview */}
      <SectionWrapper id="services-overview" variant="dark">
        <SectionHeader
          label="Our Services"
          title="Medical Rides, Coordinated with Care"
          subtitle="Accessible, reliable transportation for appointments, treatments, discharges, and everyday mobility needs."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SERVICES.slice(0, 3).map((service, idx) => (
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

      {/* Why Choose Us */}
      <SectionWrapper variant="dark" id="why-us">
        <SectionHeader
          label="Why Families Choose Us"
          title="Professional Care Beyond the Ride"
          subtitle="We combine dependable scheduling, accessible support, and compassionate service for every passenger."
        />
        <div className="mt-12">
          <FeatureList features={WHY_US_FEATURES} />
        </div>
      </SectionWrapper>

      {/* Process Steps */}
      <SectionWrapper id="process" variant="dark">
        <SectionHeader
          label="How It Works"
          title="A Simple Path to Reliable Transportation"
          subtitle="Book your ride, confirm the details, and travel with confidence."
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
          title="Trusted by Patients and Families"
          subtitle="Real feedback from people who depend on safe, respectful medical transportation."
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

/* Sub-components */

function StatsBar() {
  const ref = useScrollAnimation(0.3);

  return (
    <motion.div
      ref={ref}
      className="relative -mt-16 z-20 max-w-5xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white/95 backdrop-blur-lg border border-primary-100 shadow-2xl shadow-slate-300/30">
        {STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            <div className="text-3xl lg:text-4xl font-display font-bold text-gradient-sky mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-neutral-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  const ref = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="text-center max-w-2xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.span
        className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 border border-primary-100 text-sm font-medium mb-4"
        variants={fadeInUp}
      >
        {label}
      </motion.span>
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4"
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-neutral-600 text-lg leading-relaxed"
        variants={fadeInUp}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
}
