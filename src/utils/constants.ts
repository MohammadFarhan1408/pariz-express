// Pariz Express — Site Constants

export const SITE_NAME = 'Pariz Express';
export const SITE_TAGLINE = 'Fast. Reliable. Everywhere.';
export const SITE_DESCRIPTION =
  'Premium logistics and last-mile delivery solutions for businesses across the nation.';

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  // { label: 'Tracking', path: '/tracking' },
] as const;

export const SERVICES = [
  {
    id: 'last-mile',
    icon: 'Truck',
    title: 'Last Mile Delivery',
    description:
      'Swift and secure doorstep delivery with real-time tracking, ensuring your packages arrive on time, every time.',
    features: ['Same-day delivery', 'Real-time GPS tracking', 'Proof of delivery', 'Temperature-controlled options'],
  },
  {
    id: 'ecommerce',
    icon: 'Package',
    title: 'E-commerce Fulfillment',
    description:
      'End-to-end fulfillment services from warehousing to shipping, designed to scale with your online business.',
    features: ['Inventory management', 'Order processing', 'Multi-channel integration', 'Returns handling'],
  },
  {
    id: 'retail',
    icon: 'Warehouse',
    title: 'Retail Distribution',
    description:
      'Efficient distribution networks connecting manufacturers to retail outlets with optimized routes and schedules.',
    features: ['Route optimization', 'Scheduled deliveries', 'Cross-docking', 'Vendor compliance'],
  },
  {
    id: 'white-glove',
    icon: 'ShieldCheck',
    title: 'White Glove Delivery',
    description:
      'Premium handling for high-value items with specialized equipment and trained professionals.',
    features: ['Assembly & installation', 'Room of choice delivery', 'Debris removal', 'Insurance coverage'],
  },
  {
    id: 'technology',
    icon: 'Zap',
    title: 'Tracking & Technology',
    description:
      'Advanced logistics technology platform with AI-powered route optimization and predictive analytics.',
    features: ['AI route planning', 'Predictive ETAs', 'API integration', 'Custom dashboards'],
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    icon: 'FileText',
    title: 'Book',
    description: 'Schedule a pickup online or via API with just a few clicks.',
  },
  {
    step: 2,
    icon: 'MapPin',
    title: 'Pick Up',
    description: 'We collect your package from your location at the scheduled time.',
  },
  {
    step: 3,
    icon: 'Satellite',
    title: 'Track',
    description: 'Monitor your shipment in real-time with our advanced tracking system.',
  },
  {
    step: 4,
    icon: 'CheckCircle2',
    title: 'Deliver',
    description: 'Your package arrives safely at its destination with proof of delivery.',
  },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'E-commerce Director, StyleHub',
    quote:
      'Pariz Express transformed our delivery operations. 98% on-time delivery rate and our customer complaints dropped by 60%.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager, TechRetail',
    quote:
      'The real-time tracking and API integration saved us hundreds of hours. Their tech platform is truly next-level.',
    rating: 5,
  },
  {
    name: 'Aisha Patel',
    role: 'Founder, GreenGrocer',
    quote:
      'Their white glove service is impeccable. Our fragile products arrive in perfect condition, every single time.',
    rating: 5,
  },
] as const;

export const STATS = [
  { value: '10M+', label: 'Packages Delivered' },
  { value: '98.5%', label: 'On-Time Rate' },
  { value: '500+', label: 'Cities Covered' },
  { value: '24/7', label: 'Support Available' },
] as const;

export const COMPANY_INFO = {
  email: 'hello@parizexpress.com',
  phone: '+1 (800) 555-0199',
  address: '123 Logistics Way, Suite 400, New York, NY 10001',
  socials: {
    twitter: '#',
    linkedin: '#',
    facebook: '#',
    instagram: '#',
  },
} as const;
