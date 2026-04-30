import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import HeroSection from '../../shared/sections/HeroSection';
import SectionWrapper from '../../shared/layout/SectionWrapper';
import FormInput from '../../shared/ui/FormInput';
import Button from '../../shared/ui/Button';
import { COMPANY_INFO } from '../../utils/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { containerVariants, fadeInUp, cardVariants, staggerItem } from '../../utils/animations';
import { images } from '../../data/images';

const SERVICE_OPTIONS = [
  { value: 'last-mile', label: 'Last Mile Delivery' },
  { value: 'ecommerce', label: 'E-commerce Fulfillment' },
  { value: 'retail', label: 'Retail Distribution' },
  { value: 'white-glove', label: 'White Glove Delivery' },
  { value: 'technology', label: 'Tracking & Technology' },
  { value: 'other', label: 'Other / Custom' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <HeroSection
        headline={<>Get in <span className="text-gradient-orange">Touch</span></>}
        subtitle="Have questions or need a custom logistics solution? Our team is ready to help."
        breadcrumb="Contact"
      />
      <SectionWrapper id="contact-form-section" variant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FormPanel submitted={submitted} onSubmit={handleSubmit} />
          <motion.div 
            className="hidden lg:block rounded-2xl overflow-hidden h-full min-h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={images.contactTeam}
              alt="Support team ready to help"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        </div>
      </SectionWrapper>
      
      {/* Info on mobile */}
      <SectionWrapper id="contact-info-section" variant="dark" className="lg:hidden">
        <InfoPanel />
      </SectionWrapper>

      {/* Info on desktop - separate section */}
      <motion.section 
        className="hidden lg:block py-20 bg-linear-to-b from-neutral-950 to-neutral-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InfoPanel />
        </div>
      </motion.section>
      {/* <MapPlaceholder /> */}
      <MobileCTA />
    </>
  );
}

function FormPanel({ submitted, onSubmit }: { submitted: boolean; onSubmit: (e: FormEvent) => void }) {
  const ref = useScrollAnimation();
  
  if (submitted) {
    return (
      <motion.div 
        ref={ref}
        className="rounded-2xl p-12 border border-white/10 bg-linear-to-br from-neutral-900/50 to-neutral-800/30 text-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle2 className="w-16 h-16 text-secondary-500" strokeWidth={1.5} />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-neutral-300">We'll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.h2 
        className="text-2xl font-display font-bold text-white mb-2"
        variants={fadeInUp}
      >
        Send Us a Message
      </motion.h2>
      <motion.p 
        className="text-neutral-400 mb-8"
        variants={fadeInUp}
      >
        We'll respond within one business day.
      </motion.p>
      <motion.form 
        onSubmit={onSubmit} 
        className="space-y-5" 
        id="contact-form"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <motion.div variants={staggerItem}>
            <FormInput id="contact-name" label="Full Name" placeholder="John Doe" required />
          </motion.div>
          <motion.div variants={staggerItem}>
            <FormInput id="contact-email" label="Email" type="email" placeholder="john@co.com" required />
          </motion.div>
        </div>
        <motion.div variants={staggerItem}>
          <FormInput id="contact-phone" label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
        </motion.div>
        <motion.div variants={staggerItem}>
          <FormInput id="contact-service" label="Service Type" as="select" options={SERVICE_OPTIONS} required />
        </motion.div>
        <motion.div variants={staggerItem}>
          <FormInput id="contact-message" label="Message" as="textarea" placeholder="Tell us about your needs..." required />
        </motion.div>
        <motion.div variants={staggerItem} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button type="submit" size="lg" fullWidth isMotion>Send Message →</Button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}

function InfoPanel() {
  const ref = useScrollAnimation();
  
  const items = [
    { icon: Mail, label: 'Email', value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
    { icon: Phone, label: 'Phone', value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone}` },
    { icon: MapPin, label: 'Address', value: COMPANY_INFO.address },
    { icon: Clock, label: 'Hours', value: 'Mon — Fri: 8AM — 8PM EST' },
  ];

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <motion.h2 
        className="text-2xl font-display font-bold text-white mb-2"
        variants={fadeInUp}
      >
        Contact Information
      </motion.h2>
      <motion.p 
        className="text-neutral-400 mb-8"
        variants={fadeInUp}
      >
        Reach out through any channel.
      </motion.p>
      <div className="space-y-6">
        {items.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <motion.div 
              key={i}
              variants={cardVariants}
              className="flex items-start gap-4 p-6 rounded-xl border border-white/10 bg-linear-to-br from-neutral-900/50 to-neutral-800/30 hover:border-secondary-500/30 overflow-hidden group"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-linear-to-br from-secondary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div 
                className="w-12 h-12 rounded-lg bg-secondary-500/15 flex items-center justify-center shrink-0 group-hover:bg-secondary-500/25 transition-all duration-300 relative z-10"
                whileHover={{ scale: 1.15 }}
              >
                <IconComponent className="text-secondary-500 w-6 h-6" strokeWidth={1.5} />
              </motion.div>
              <div className="relative z-10 flex-1">
                <p className="text-sm text-neutral-500 mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-white font-medium hover:text-secondary-400 transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white font-medium">{item.value}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function MapPlaceholder() {
  return (
    <motion.section 
      className="py-16 bg-linear-to-b from-neutral-50 to-neutral-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aspect-video rounded-2xl bg-linear-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-neutral-400 mx-auto mb-4" strokeWidth={1} />
            <p className="text-neutral-600 font-medium">Map integration coming soon</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function MobileCTA() {
  return (
    <SectionWrapper variant="dark">
      <motion.div 
        className="text-center max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl font-display font-bold text-white mb-4"
          variants={fadeInUp}
        >
          Prefer to Chat?
        </motion.h2>
        <motion.p 
          className="text-neutral-400 mb-6"
          variants={fadeInUp}
        >
          Call us directly or visit our office. We're here to help!
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href={`tel:${COMPANY_INFO.phone}`}>
            <Button size="lg" isMotion>
              <Phone className="w-5 h-5" /> Call Now
            </Button>
          </a>
          <a href={`mailto:${COMPANY_INFO.email}`}>
            <Button variant="outline" size="lg" isMotion>
              <Mail className="w-5 h-5" /> Email Us
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
