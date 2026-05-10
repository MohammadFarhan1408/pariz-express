import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { fadeInUp, containerVariants } from "../../utils/animations";

interface CTASectionProps {
  headline?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
}

export default function CTASection({
  headline = "Need Safe Medical Transportation?",
  subtitle = "Schedule a reliable Pariz Express ride for appointments, treatments, discharges, or mobility assistance.",
  ctaLabel = "Get Assistance",
  ctaTo = "/contact",
}: CTASectionProps) {
  return (
    <motion.section
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-50 via-white to-accent-50" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.16) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-6"
          variants={fadeInUp}
        >
          {headline}
        </motion.h2>

        <motion.p
          className="text-lg text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={ctaTo}>
            <Button
              size="lg"
              className="!bg-primary-400 !text-white hover:!bg-primary-500 hover:!shadow-xl hover:!shadow-primary-400/25 !border-0"
            >
              {ctaLabel}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
