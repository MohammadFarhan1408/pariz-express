import { useState } from 'react';
import { createElement } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Button from '../../shared/ui/Button';
import { COMPANY_INFO } from '../../utils/constants';
import { containerVariants, fadeInUp, staggerItem } from '../../utils/animations';
import { SERVICE_DETAILS } from './serviceDetailData';
import type { ServiceBenefit, ServiceDetail, ServiceFAQ, ServiceStep } from './serviceDetailData';

function getIcon(icon: string): LucideIcon {
  return (LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon | undefined) || LucideIcons.CircleCheck;
}

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = serviceId ? SERVICE_DETAILS[serviceId] : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceBenefits benefits={service.benefits} />
      <ServiceSteps steps={service.steps} />
      <ServiceAudience audience={service.audience} />
      <ServiceTrust items={service.trust} />
      <ServiceFAQ faqs={service.faqs} />
      <ServiceCTA service={service} />
    </>
  );
}

function ServiceHero({ service }: { service: ServiceDetail }) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-neutral-950">
      <img
        src={service.heroImage}
        alt={service.heroAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-900/55 to-primary-900/35" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-neutral-50 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-32 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.div className="mb-6 flex flex-wrap items-center gap-3" variants={fadeInUp}>
            <Link to="/services" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              Services
            </Link>
            <span className="text-white/40">/</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              {service.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl"
            variants={fadeInUp}
          >
            {service.title}
          </motion.h1>
          <motion.p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl" variants={fadeInUp}>
            {service.subtitle}
          </motion.p>

          <motion.div className="flex flex-col gap-3 sm:flex-row" variants={fadeInUp}>
            <Link to="/contact">
              <Button size="lg" isMotion>
                Book Transportation
              </Button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button variant="outline" size="lg" className="border-white/70 bg-white/10 text-white hover:bg-white hover:text-primary-700" isMotion>
                Call Now
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white backdrop-blur-md"
            variants={fadeInUp}
          >
            <LucideIcons.ShieldCheck className="h-5 w-5 text-primary-200" strokeWidth={1.8} />
            {service.trustBadge}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function ServiceOverview({ service }: { service: ServiceDetail }) {
  return (
    <section className="bg-neutral-50 py-20 lg:py-28">
      <motion.div
        className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={fadeInUp}>
          <span className="mb-4 inline-flex rounded-full border border-primary-100 bg-white px-4 py-1.5 text-sm font-medium text-primary-700 shadow-sm">
            Service Overview
          </span>
          <h2 className="text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
            {service.overviewTitle}
          </h2>
        </motion.div>

        <motion.div className="space-y-5 text-base leading-relaxed text-neutral-600 sm:text-lg" variants={fadeInUp}>
          {service.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServiceBenefits({ benefits }: { benefits: ServiceBenefit[] }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Key Benefits"
          title="Built Around Safety, Comfort, and Reliability"
          subtitle="Every ride is designed to make medical transportation feel clearer, calmer, and easier to coordinate."
        />
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {benefits.map((benefit) => (
            <IconCard key={benefit.title} item={benefit} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceSteps({ steps }: { steps: ServiceStep[] }) {
  return (
    <section className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="A Simple, Supportive Ride Process"
          subtitle="From scheduling to arrival, the experience is organized to reduce stress for patients and families."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/70"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-400 text-lg font-bold text-white shadow-sm shadow-primary-400/30">
                {index + 1}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute left-12 top-full hidden h-5 w-px bg-primary-200 lg:left-auto lg:right-[-14px] lg:top-10 lg:h-px lg:w-7 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAudience({ audience }: { audience: string[] }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-primary-100 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
              Who It Helps
            </span>
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 sm:text-4xl">Designed for Real Care Situations</h2>
            <p className="text-lg leading-relaxed text-neutral-600">
              This service supports patients, families, and care teams who need transportation that feels dependable,
              respectful, and easy to arrange.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {audience.map((item) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm font-semibold text-neutral-800 shadow-sm shadow-slate-200/50"
                variants={staggerItem}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <LucideIcons.Check className="h-4 w-4" strokeWidth={2.4} />
                </span>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceTrust({ items }: { items: ServiceBenefit[] }) {
  return (
    <section className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Professional Support Patients Can Trust"
          subtitle="A premium medical transportation experience depends on thoughtful coordination, calm communication, and safety-focused care."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <IconCard key={item.title} item={item} centered />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceFAQ({ faqs }: { faqs: ServiceFAQ[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions Before You Book"
          subtitle="Clear answers for patients, families, caregivers, and care coordinators."
        />
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `service-faq-${index}`;
            return (
              <div key={faq.question} className="rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm shadow-slate-200/60">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-neutral-900 transition-colors hover:text-primary-700 sm:px-6"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {faq.question}
                  <LucideIcons.ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    strokeWidth={2}
                  />
                </button>
                <div
                  id={panelId}
                  className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-neutral-600 sm:px-6 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCTA({ service }: { service: ServiceDetail }) {
  return (
    <section className="bg-neutral-50 px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary-100 bg-linear-to-br from-primary-50 via-white to-white p-8 text-center shadow-2xl shadow-primary-100/70 sm:p-12 lg:p-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="mb-4 inline-flex rounded-full border border-primary-100 bg-white px-4 py-1.5 text-sm font-semibold text-primary-700 shadow-sm">
          Compassionate transportation starts here
        </span>
        <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          {service.finalCtaTitle}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
          {service.finalCtaText}
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/contact">
            <Button size="lg" isMotion>
              Get Assistance
            </Button>
          </Link>
          <a href={`tel:${COMPANY_INFO.phone}`}>
            <Button variant="outline" size="lg" isMotion>
              <LucideIcons.Phone className="h-5 w-5" strokeWidth={2} />
              {COMPANY_INFO.phone}
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.span
        className="mb-4 inline-flex rounded-full border border-primary-100 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700"
        variants={fadeInUp}
      >
        {eyebrow}
      </motion.span>
      <motion.h2 className="mb-4 text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl" variants={fadeInUp}>
        {title}
      </motion.h2>
      <motion.p className="text-base leading-relaxed text-neutral-600 sm:text-lg" variants={fadeInUp}>
        {subtitle}
      </motion.p>
    </motion.div>
  );
}

function IconCard({ item, centered = false }: { item: ServiceBenefit; centered?: boolean }) {
  return (
    <motion.div
      className={`rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/70 ${centered ? 'text-center' : ''}`}
      variants={staggerItem}
    >
      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary-100 bg-primary-50 text-primary-600 ${centered ? 'mx-auto' : ''}`}>
        {createElement(getIcon(item.icon), { className: 'h-6 w-6', strokeWidth: 1.8 })}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-neutral-900">{item.title}</h3>
      <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>
    </motion.div>
  );
}
