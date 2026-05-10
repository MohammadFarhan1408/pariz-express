// Pariz Express site constants

export const SITE_NAME = "Pariz Express";
export const SITE_TAGLINE = "Safe rides. Compassionate care.";
export const SITE_DESCRIPTION =
  "Professional non-emergency medical transportation designed for comfort, accessibility, and peace of mind.";

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
  // { label: 'Booking', path: '/tracking' },
] as const;

export const SERVICES = [
  {
    id: "wheelchair-transportation",
    icon: "Accessibility",
    title: "Wheelchair Transportation",
    description:
      "Safe and comfortable wheelchair-accessible rides designed for medical visits, therapy sessions, and daily mobility needs.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=900&q=80&auto=format&fit=crop",
    imageAlt:
      "Caregiver assisting a wheelchair passenger with compassionate support",
    features: ["Accessible rides", "Secure boarding", "Comfort-first care"],
    ctaLabel: "Book Wheelchair Ride",
  },
  {
    id: "ambulatory-transportation",
    icon: "Footprints",
    title: "Ambulatory Transportation",
    description:
      "Reliable transportation for patients who can walk independently but require safe and dependable medical transit.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&auto=format&fit=crop",
    imageAlt:
      "Healthcare professional walking with a patient in a bright medical setting",
    features: ["Door-to-door help", "Timely pickup", "Friendly drivers"],
    ctaLabel: "Schedule a Ride",
  },
  {
    id: "non-emergency-medical-transport",
    icon: "ShieldCheck",
    title: "Non-Emergency Medical Transport",
    description:
      "Professional non-emergency transportation focused on punctuality, comfort, and compassionate care.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80&auto=format&fit=crop",
    imageAlt:
      "Clean hospital corridor representing dependable non-emergency medical transport",
    features: ["Reliable scheduling", "Care-focused team", "Medical visits"],
    ctaLabel: "Plan Transport",
  },
  {
    id: "dialysis-transportation",
    icon: "CalendarClock",
    title: "Dialysis Transportation",
    description:
      "Consistent and stress-free transportation for recurring dialysis appointments and treatments.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80&auto=format&fit=crop",
    imageAlt:
      "Medical care environment prepared for recurring treatment appointments",
    features: ["Recurring rides", "On-time care", "Low-stress trips"],
    ctaLabel: "Set Up Recurring Ride",
  },
  {
    id: "hospital-discharge-transport",
    icon: "Hospital",
    title: "Hospital Discharge Transport",
    description:
      "Secure transportation support after hospital discharge with extra care for recovery and comfort.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Modern hospital care setting for safe discharge transportation",
    features: ["Recovery support", "Careful transfers", "Family coordination"],
    ctaLabel: "Arrange Discharge Ride",
  },
  {
    id: "doctor-appointment-rides",
    icon: "Stethoscope",
    title: "Doctor Appointment Rides",
    description:
      "On-time transportation for medical consultations, follow-ups, and specialist appointments.",
    image:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=900&q=80&auto=format&fit=crop",
    imageAlt:
      "Healthcare appointment check-in with professional medical support",
    features: ["Specialist visits", "Follow-ups", "Punctual service"],
    ctaLabel: "Book Appointment Ride",
  },
  {
    id: "airport-medical-assistance",
    icon: "Plane",
    title: "Airport Medical Assistance Transport",
    description:
      "Comfortable transportation solutions for travelers needing mobility or medical assistance.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80&auto=format&fit=crop",
    imageAlt:
      "Airport terminal prepared for travelers needing medical transportation assistance",
    features: ["Airport pickup", "Mobility support", "Travel coordination"],
    ctaLabel: "Reserve Airport Ride",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    icon: "CalendarCheck",
    title: "Book Ride",
    description:
      "Share your pickup location, appointment time, and mobility needs.",
  },
  {
    step: 2,
    icon: "ClipboardCheck",
    title: "Confirm Details",
    description:
      "We review timing, passenger support, and destination details.",
  },
  {
    step: 3,
    icon: "ShieldCheck",
    title: "Travel Safely",
    description:
      "Our team provides dependable, comfortable medical transportation.",
  },
  {
    step: 4,
    icon: "MapPinCheck",
    title: "Arrive on Time",
    description:
      "Patients reach appointments, treatment, or home with confidence.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Daughter of Patient",
    quote:
      "Pariz Express made my mother’s wheelchair appointments much easier. The driver was patient, professional, and right on time.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Dialysis Transportation Client",
    quote:
      "Recurring dialysis rides are finally predictable. The team communicates clearly and treats every trip with care.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Care Coordinator",
    quote:
      "Their scheduling support and patient-first approach give our families real peace of mind.",
    rating: 5,
  },
] as const;

export const STATS = [
  { value: "7", label: "Transport Services" },
  { value: "4.9/5", label: "Client Rating" },
  { value: "24/7", label: "Ride Requests" },
  { value: "100%", label: "Care-Focused" },
] as const;

export const COMPANY_INFO = {
  email: "info@parizexpress.com",
  phone: "1-925-354-8122",
  address: "Service area available by appointment",
  socials: {
    twitter: "#",
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
} as const;
