import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import HeroSection from "../../shared/sections/HeroSection";
import SectionWrapper from "../../shared/layout/SectionWrapper";
import FormInput from "../../shared/ui/FormInput";
import Button from "../../shared/ui/Button";
import { COMPANY_INFO } from "../../utils/constants";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  containerVariants,
  fadeInUp,
  cardVariants,
  staggerItem,
} from "../../utils/animations";
import { images } from "../../data/images";

const SERVICE_OPTIONS = [
  { value: "wheelchair", label: "Wheelchair Transportation" },
  { value: "ambulatory", label: "Ambulatory Transportation" },
  { value: "nemt", label: "Non-Emergency Medical Transport" },
  { value: "dialysis", label: "Dialysis Transportation" },
  { value: "discharge", label: "Hospital Discharge Transport" },
  { value: "appointment", label: "Doctor Appointment Rides" },
  { value: "airport", label: "Airport Medical Assistance Transport" },
  { value: "other", label: "Help Me Choose" },
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
        headline={
          <>
            Get in <span className="text-gradient-sky">Touch</span>
          </>
        }
        subtitle="Have a question or need to schedule medical transportation? Pariz Express is ready to help."
        breadcrumb="Contact"
        backgroundImage={images.contactHero}
        imageAlt="Professional medical transportation support team"
        trustText="Call or email Pariz Express for ride coordination and service questions"
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
              alt="Professional healthcare transportation coordination"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Info on mobile */}
      <SectionWrapper
        id="contact-info-section"
        variant="dark"
        className="lg:hidden"
      >
        <InfoPanel />
      </SectionWrapper>

      {/* Info on desktop - separate section */}
      <motion.section
        className="hidden lg:block py-24 bg-gradient-to-b from-white to-sky-50/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 50/50 Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            <MapPlaceholder />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <div className="h-full rounded-3xl border border-sky-100 bg-white p-10 shadow-xl">
                <InfoPanel />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <MobileCTA />
    </>
  );
}

function FormPanel({
  submitted,
  onSubmit,
}: {
  submitted: boolean;
  onSubmit: (e: FormEvent) => void;
}) {
  const ref = useScrollAnimation();

  if (submitted) {
    return (
      <motion.div
        ref={ref}
        className="rounded-2xl p-12 border border-neutral-200 bg-white shadow-xl shadow-primary-100/60 text-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle2
            className="w-16 h-16 text-primary-500"
            strokeWidth={1.5}
          />
        </motion.div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-4">Thank You</h3>
        <p className="text-neutral-600">
          We will get back to you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2
        className="text-2xl font-display font-bold text-neutral-900 mb-2"
        variants={fadeInUp}
      >
        Request Transportation
      </motion.h2>
      <motion.p className="text-neutral-600 mb-8" variants={fadeInUp}>
        Tell us about the passenger, appointment, and mobility needs. We will
        help coordinate the right ride.
      </motion.p>
      <motion.form
        onSubmit={onSubmit}
        className="space-y-5"
        id="contact-form"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <motion.div variants={staggerItem}>
            <FormInput
              id="contact-name"
              label="Full Name"
              placeholder="Your name"
              required
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <FormInput
              id="contact-email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </motion.div>
        </div>
        <motion.div variants={staggerItem}>
          <FormInput
            id="contact-phone"
            label="Phone"
            type="tel"
            placeholder="1-925-354-8122"
          />
        </motion.div>
        <motion.div variants={staggerItem}>
          <FormInput
            id="contact-service"
            label="Transportation Service"
            as="select"
            options={SERVICE_OPTIONS}
            required
          />
        </motion.div>
        <motion.div variants={staggerItem}>
          <FormInput
            id="contact-message"
            label="Message"
            as="textarea"
            placeholder="Tell us the appointment date, pickup location, mobility needs, or questions."
            required
          />
        </motion.div>
        <motion.div
          variants={staggerItem}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button type="submit" size="lg" fullWidth isMotion>
            Send Request
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}

function InfoPanel() {
  const ref = useScrollAnimation();

  const items = [
    {
      icon: Mail,
      label: "Email",
      value: COMPANY_INFO.email,
      href: `mailto:${COMPANY_INFO.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: COMPANY_INFO.phone,
      href: `tel:${COMPANY_INFO.phone}`,
    },
    { icon: MapPin, label: "Address", value: COMPANY_INFO.address },
    { icon: Clock, label: "Hours", value: "Ride requests accepted 24/7" },
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h2
        className="text-2xl font-display font-bold text-neutral-900 mb-2"
        variants={fadeInUp}
      >
        Contact Pariz Express
      </motion.h2>
      <motion.p className="text-neutral-600 mb-8" variants={fadeInUp}>
        Reach our team for scheduling, ride questions, and service guidance.
      </motion.p>
      <div className="space-y-6">
        {items.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={i}
              variants={cardVariants}
              className="flex items-start gap-4 p-6 rounded-xl border border-neutral-200 bg-white shadow-sm shadow-slate-200/60 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/60 overflow-hidden group"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="w-12 h-12 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-all duration-300 relative z-10"
                whileHover={{ scale: 1.15 }}
              >
                <IconComponent
                  className="text-primary-500 w-6 h-6"
                  strokeWidth={1.5}
                />
              </motion.div>
              <div className="relative z-10 flex-1">
                <p className="text-sm text-neutral-500 mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-neutral-900 font-medium hover:text-primary-600 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-neutral-900 font-medium">{item.value}</p>
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
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="overflow-hidden rounded-3xl border border-sky-100 shadow-xl bg-white h-full">
        <div className="relative h-full min-h-[550px] w-full">
          {/* Google Map Iframe */}
          <iframe
            title="Pariz Express Location"
            src="https://www.google.com/maps?q=New+York&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-sky-900/5 pointer-events-none" />

          {/* Floating Info Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-sky-100">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-100 shrink-0">
                <MapPin className="w-6 h-6 text-sky-600" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900">
                  Pariz Express
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Safe and reliable non-emergency medical transportation with
                  compassionate care and professional assistance.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="tel:1-925-354-8122"
                    className="inline-flex items-center rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600 transition-colors"
                  >
                    Call Now
                  </a>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-50 transition-colors"
                  >
                    Open Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
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
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-4"
          variants={fadeInUp}
        >
          Prefer to Talk First?
        </motion.h2>
        <motion.p className="text-neutral-600 mb-6" variants={fadeInUp}>
          Call or email and we will help coordinate the right medical
          transportation service.
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
