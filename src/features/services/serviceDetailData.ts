export interface ServiceBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  trustBadge: string;
  overviewTitle: string;
  overview: string[];
  benefits: ServiceBenefit[];
  steps: ServiceStep[];
  audience: string[];
  trust: ServiceBenefit[];
  faqs: ServiceFAQ[];
  finalCtaTitle: string;
  finalCtaText: string;
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'wheelchair-transportation': {
    slug: 'wheelchair-transportation',
    title: 'Wheelchair Transportation',
    eyebrow: 'Accessible medical rides',
    subtitle:
      'Comfortable wheelchair-accessible transportation for appointments, therapy visits, treatments, and everyday mobility needs.',
    heroImage:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?w=1600&q=80&auto=format&fit=crop',
    heroAlt: 'Caregiver assisting a wheelchair passenger with compassionate support',
    trustBadge: 'Secure wheelchair access and trained assistance',
    overviewTitle: 'Designed for safer, more comfortable mobility',
    overview: [
      'Wheelchair transportation helps patients travel with dignity when a standard vehicle is not the right fit. Our team focuses on careful boarding, stable securement, and a calm ride from pickup to drop-off.',
      'This service is ideal for medical appointments, rehabilitation visits, therapy sessions, family events, and recurring care needs. Each trip is coordinated around timing, accessibility, and personal comfort.',
      'Families choose wheelchair transportation when they want professional support without the pressure or uncertainty of arranging accessible transit alone.',
    ],
    benefits: [
      { icon: 'Accessibility', title: 'Wheelchair Accessible', description: 'Vehicles and ride support arranged for seated mobility needs.' },
      { icon: 'ShieldCheck', title: 'Secure Ride Support', description: 'Careful boarding and securement help keep each trip steady.' },
      { icon: 'HeartHandshake', title: 'Compassionate Assistance', description: 'Respectful support for patients, families, and caregivers.' },
      { icon: 'Clock3', title: 'On-Time Arrival', description: 'Pickup windows are planned around appointment schedules.' },
      { icon: 'Armchair', title: 'Comfort Focused', description: 'A smooth, low-stress experience from door to destination.' },
      { icon: 'PhoneCall', title: 'Helpful Coordination', description: 'Clear communication before and during the ride.' },
    ],
    steps: [
      { title: 'Schedule Ride', description: 'Share pickup details, appointment time, and wheelchair needs.' },
      { title: 'Confirm Pickup', description: 'We review timing, access notes, and any caregiver instructions.' },
      { title: 'Safe Transportation', description: 'The ride is handled with careful boarding and secure support.' },
      { title: 'Arrive Comfortably', description: 'Patients are brought to the destination with calm assistance.' },
    ],
    audience: ['Wheelchair users', 'Seniors with mobility needs', 'Patients attending therapy', 'People recovering from injury', 'Caregivers coordinating appointments'],
    trust: [
      { icon: 'BadgeCheck', title: 'Trained Support', description: 'Drivers understand careful assistance and patient comfort.' },
      { icon: 'Route', title: 'Accessible Planning', description: 'Trips are reviewed for entrances, timing, and mobility needs.' },
      { icon: 'Users', title: 'Family Friendly', description: 'Caregivers and family members can coordinate ride details.' },
    ],
    faqs: [
      { question: 'Do you provide wheelchair-accessible vehicles?', answer: 'Yes. Wheelchair transportation is arranged with accessibility and secure passenger support in mind.' },
      { question: 'Can a family member ride along?', answer: 'In many cases, yes. Let us know when scheduling so seating and pickup details can be confirmed.' },
      { question: 'How far in advance should I book?', answer: 'Advance booking is recommended, especially for early morning appointments or recurring rides.' },
      { question: 'Do you handle recurring wheelchair rides?', answer: 'Yes. We can help coordinate repeat transportation for therapy, treatment, and follow-up visits.' },
    ],
    finalCtaTitle: 'Schedule Wheelchair Transportation Today',
    finalCtaText: 'Get accessible, compassionate ride support for the next appointment or recurring care schedule.',
  },
  'ambulatory-transportation': {
    slug: 'ambulatory-transportation',
    title: 'Ambulatory Transportation',
    eyebrow: 'Assisted rides for walking patients',
    subtitle:
      'Reliable medical transportation for patients who can walk independently but still need dependable, care-focused transit.',
    heroImage:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80&auto=format&fit=crop',
    heroAlt: 'Healthcare professional walking with a patient in a bright medical setting',
    trustBadge: 'Dependable support for independent patients',
    overviewTitle: 'Reliable transportation with a little extra care',
    overview: [
      'Ambulatory transportation is built for patients who can walk on their own but benefit from structured, professional transportation to medical appointments and care visits.',
      'The service removes the stress of finding a ride, navigating traffic, or coordinating timing with family members. Patients receive dependable pickup, respectful assistance, and a calm experience.',
      'It is a strong fit for seniors, follow-up appointments, outpatient visits, and anyone who values punctual transportation with a patient-first approach.',
    ],
    benefits: [
      { icon: 'Footprints', title: 'Walking Patient Support', description: 'Ideal for patients who do not need a wheelchair.' },
      { icon: 'Clock3', title: 'Punctual Pickup', description: 'Trips are coordinated around appointment arrival times.' },
      { icon: 'Car', title: 'Comfortable Vehicles', description: 'Clean rides that make medical travel feel easier.' },
      { icon: 'HeartHandshake', title: 'Respectful Assistance', description: 'Friendly support without overcomplicating the trip.' },
      { icon: 'CalendarCheck', title: 'Simple Scheduling', description: 'Easy booking for one-time or repeat appointments.' },
      { icon: 'MapPin', title: 'Door-to-Door Care', description: 'Pickup and drop-off details are handled clearly.' },
    ],
    steps: [
      { title: 'Request a Ride', description: 'Tell us where, when, and what kind of support is needed.' },
      { title: 'Review Details', description: 'We confirm appointment timing and pickup preferences.' },
      { title: 'Travel Safely', description: 'Patients ride in a clean, comfortable vehicle with dependable support.' },
      { title: 'Check In Smoothly', description: 'Arrival is planned to reduce appointment-day stress.' },
    ],
    audience: ['Seniors who walk independently', 'Patients going to follow-ups', 'Outpatient procedure patients', 'People without reliable ride access', 'Care teams arranging transportation'],
    trust: [
      { icon: 'UserRoundCheck', title: 'Patient-Focused Drivers', description: 'Supportive staff who understand medical appointment needs.' },
      { icon: 'ClipboardCheck', title: 'Organized Scheduling', description: 'Ride details are documented clearly before pickup.' },
      { icon: 'ShieldCheck', title: 'Safe Transit', description: 'A steady, professional ride from home to care.' },
    ],
    faqs: [
      { question: 'Who should use ambulatory transportation?', answer: 'This service is for patients who can walk independently but need reliable transportation to medical appointments.' },
      { question: 'Do drivers provide physical assistance?', answer: 'Drivers can provide basic ride support and coordination. Share mobility details during booking so the right service is arranged.' },
      { question: 'Can I book for a family member?', answer: 'Yes. Family members and caregivers can coordinate transportation details on behalf of a patient.' },
      { question: 'Is this available for recurring appointments?', answer: 'Yes. Recurring ambulatory rides can be arranged for routine care and follow-up visits.' },
    ],
    finalCtaTitle: 'Book Ambulatory Transportation',
    finalCtaText: 'Make the next medical appointment easier with reliable transportation and compassionate support.',
  },
  'non-emergency-medical-transport': {
    slug: 'non-emergency-medical-transport',
    title: 'Non-Emergency Medical Transport',
    eyebrow: 'Professional NEMT service',
    subtitle:
      'Medical-grade transportation for non-emergency appointments, treatments, discharges, and care-related travel.',
    heroImage:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80&auto=format&fit=crop',
    heroAlt: 'Clean hospital corridor representing dependable non-emergency medical transport',
    trustBadge: 'Reliable support for non-emergency care travel',
    overviewTitle: 'Calm, coordinated transportation for medical needs',
    overview: [
      'Non-emergency medical transport helps patients get to and from care when ambulance service is not required but dependable transportation is essential.',
      'Our service is focused on punctuality, comfort, and clear communication. We support appointments, outpatient care, treatment visits, and other scheduled medical transportation needs.',
      'Patients and caregivers choose NEMT for a more predictable experience than rideshare or informal transportation, especially when mobility, timing, or assistance matters.',
    ],
    benefits: [
      { icon: 'ShieldCheck', title: 'Safety-Focused', description: 'Ride planning prioritizes patient comfort and dependable handling.' },
      { icon: 'Clock3', title: 'Appointment Ready', description: 'Pickup times are aligned with check-in and treatment schedules.' },
      { icon: 'HeartPulse', title: 'Medical-Aware Care', description: 'Support is built around healthcare transportation needs.' },
      { icon: 'Car', title: 'Comfortable Transit', description: 'Clean vehicles help reduce stress during the ride.' },
      { icon: 'PhoneCall', title: 'Clear Updates', description: 'Communication keeps families and patients informed.' },
      { icon: 'Users', title: 'Caregiver Friendly', description: 'Trip details can be coordinated with family or care teams.' },
    ],
    steps: [
      { title: 'Share Care Details', description: 'Provide timing, locations, mobility notes, and appointment type.' },
      { title: 'Confirm Transport Plan', description: 'We align pickup, arrival, and passenger needs.' },
      { title: 'Complete the Ride', description: 'Patients travel with professional, compassionate support.' },
      { title: 'Return or Follow Up', description: 'Return rides and repeat schedules can be coordinated.' },
    ],
    audience: ['Patients needing scheduled care travel', 'Seniors without reliable transportation', 'People with mobility limitations', 'Caregivers managing appointments', 'Healthcare teams arranging rides'],
    trust: [
      { icon: 'BadgeCheck', title: 'Professional Standards', description: 'A medical transportation mindset for every scheduled ride.' },
      { icon: 'CalendarCheck', title: 'Dependable Scheduling', description: 'Built for appointment timing and predictable care routines.' },
      { icon: 'HeartHandshake', title: 'Human Care', description: 'Patients are treated with patience, dignity, and respect.' },
    ],
    faqs: [
      { question: 'Is this an ambulance service?', answer: 'No. This is non-emergency medical transportation for scheduled rides when emergency medical care is not required.' },
      { question: 'What types of appointments do you support?', answer: 'We support consultations, therapy, treatments, discharges, recurring care, and other non-emergency medical visits.' },
      { question: 'Can you coordinate return trips?', answer: 'Yes. Return rides can be included when booking so the full trip is planned.' },
      { question: 'Can facilities schedule on behalf of patients?', answer: 'Yes. Care teams and family members can help coordinate transportation details.' },
    ],
    finalCtaTitle: 'Need Safe Medical Transportation?',
    finalCtaText: 'Coordinate a non-emergency ride with professional support and a patient-first experience.',
  },
  'dialysis-transportation': {
    slug: 'dialysis-transportation',
    title: 'Dialysis Transportation',
    eyebrow: 'Recurring treatment rides',
    subtitle:
      'Consistent, low-stress transportation for dialysis appointments, recurring treatments, and follow-up care.',
    heroImage:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80&auto=format&fit=crop',
    heroAlt: 'Medical care environment prepared for recurring treatment appointments',
    trustBadge: 'Reliable recurring rides for treatment schedules',
    overviewTitle: 'Transportation that respects recurring care routines',
    overview: [
      'Dialysis transportation requires consistency. Patients often travel several times per week, so dependable timing and a calm ride experience matter.',
      'We help coordinate recurring pickup and drop-off schedules so patients, families, and care teams can rely on a steady transportation plan.',
      'The service is designed to reduce stress around treatment days with clear communication, comfortable vehicles, and compassionate support before and after appointments.',
    ],
    benefits: [
      { icon: 'CalendarClock', title: 'Recurring Scheduling', description: 'Repeat rides can be coordinated around treatment days.' },
      { icon: 'Clock3', title: 'Reliable Timing', description: 'Pickup planning supports arrival and discharge windows.' },
      { icon: 'HeartHandshake', title: 'Gentle Support', description: 'Patients receive respectful assistance during tiring routines.' },
      { icon: 'ShieldCheck', title: 'Safe Transfers', description: 'Careful ride support helps reduce appointment-day strain.' },
      { icon: 'PhoneCall', title: 'Family Updates', description: 'Ride coordination can include caregivers and family contacts.' },
      { icon: 'Car', title: 'Comfortable Ride', description: 'Clean, calm vehicles support recovery after treatment.' },
    ],
    steps: [
      { title: 'Build Schedule', description: 'Share dialysis days, times, and facility details.' },
      { title: 'Confirm Routine', description: 'Pickup and return preferences are reviewed in advance.' },
      { title: 'Attend Treatment', description: 'Patients arrive with dependable, compassionate transportation.' },
      { title: 'Return Comfortably', description: 'Return rides are coordinated with patient comfort in mind.' },
    ],
    audience: ['Dialysis patients', 'Families managing weekly treatment', 'Seniors with recurring care', 'Patients who need return rides', 'Clinics coordinating transportation'],
    trust: [
      { icon: 'ClipboardCheck', title: 'Routine Management', description: 'Recurring details are organized to reduce repeat booking friction.' },
      { icon: 'HeartPulse', title: 'Treatment Awareness', description: 'Drivers understand that dialysis days can be physically demanding.' },
      { icon: 'Route', title: 'Consistent Routes', description: 'Repeat transportation can be planned around familiar destinations.' },
    ],
    faqs: [
      { question: 'Do you offer recurring dialysis transportation?', answer: 'Yes. Recurring rides can be scheduled around ongoing dialysis treatment days.' },
      { question: 'Can you provide return transportation after treatment?', answer: 'Yes. Return rides can be planned as part of the transportation schedule.' },
      { question: 'What if treatment runs late?', answer: 'Let us know facility timing expectations during booking so the ride plan can account for treatment-day variability.' },
      { question: 'Can caregivers coordinate the schedule?', answer: 'Yes. Family members and care teams can help manage recurring transportation details.' },
    ],
    finalCtaTitle: 'Set Up Dialysis Transportation',
    finalCtaText: 'Create a reliable recurring ride schedule for treatment days with compassionate support.',
  },
  'hospital-discharge-transport': {
    slug: 'hospital-discharge-transport',
    title: 'Hospital Discharge Transport',
    eyebrow: 'Post-discharge ride support',
    subtitle:
      'Secure transportation after hospital discharge, coordinated with extra care for recovery, comfort, and timing.',
    heroImage:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1600&q=80&auto=format&fit=crop',
    heroAlt: 'Modern hospital care setting for safe discharge transportation',
    trustBadge: 'Careful support when patients are ready to go home',
    overviewTitle: 'A smoother transition from hospital to home',
    overview: [
      'Hospital discharge can feel overwhelming for patients and families. Our transportation helps make the transition calmer, safer, and more organized.',
      'We support rides from hospitals, rehabilitation centers, and outpatient facilities with attention to mobility needs, pickup instructions, and patient comfort.',
      'This service is especially helpful when a patient is tired, recovering, or unable to comfortably use standard transportation after care.',
    ],
    benefits: [
      { icon: 'Hospital', title: 'Facility Pickup', description: 'Ride details can be aligned with discharge instructions.' },
      { icon: 'ShieldCheck', title: 'Secure Transport', description: 'Extra care is given to comfort and safe movement.' },
      { icon: 'Home', title: 'Home Transition', description: 'Transportation supports a calmer return after care.' },
      { icon: 'HeartHandshake', title: 'Recovery Mindset', description: 'Patients are supported with patience and respect.' },
      { icon: 'Users', title: 'Family Coordination', description: 'Caregivers can help arrange timing and destination details.' },
      { icon: 'Clock3', title: 'Flexible Timing', description: 'Plans can account for discharge timing changes.' },
    ],
    steps: [
      { title: 'Coordinate Discharge', description: 'Share facility, pickup area, and expected release time.' },
      { title: 'Review Needs', description: 'We confirm mobility support, destination, and caregiver contacts.' },
      { title: 'Support Pickup', description: 'The ride is handled with care from facility to vehicle.' },
      { title: 'Arrive Safely', description: 'Patients are transported home or to recovery with comfort in mind.' },
    ],
    audience: ['Recently discharged patients', 'Surgery recovery patients', 'Rehabilitation center patients', 'Families coordinating pickup', 'Patients needing careful transfers'],
    trust: [
      { icon: 'ClipboardCheck', title: 'Detail-Oriented', description: 'Facility instructions and timing notes are reviewed before pickup.' },
      { icon: 'UserRoundCheck', title: 'Respectful Assistance', description: 'Patients receive calm help during a sensitive transition.' },
      { icon: 'Car', title: 'Comfortable Vehicle', description: 'Ride comfort matters after a hospital stay or procedure.' },
    ],
    faqs: [
      { question: 'Can you pick up directly from a hospital?', answer: 'Yes. We can coordinate hospital pickup details, including entrance, timing, and discharge instructions.' },
      { question: 'What if discharge time changes?', answer: 'Discharge timing can shift. Share updates as soon as possible so transportation can be coordinated.' },
      { question: 'Can family members help arrange the ride?', answer: 'Yes. Family members and caregivers can book and provide instructions on behalf of the patient.' },
      { question: 'Is this suitable after surgery?', answer: 'Yes, when emergency medical care is not required and the patient needs careful non-emergency transportation.' },
    ],
    finalCtaTitle: 'Arrange Hospital Discharge Transport',
    finalCtaText: 'Support a safer, calmer ride home after discharge with patient-first transportation.',
  },
  'doctor-appointment-rides': {
    slug: 'doctor-appointment-rides',
    title: 'Doctor Appointment Rides',
    eyebrow: 'On-time appointment transportation',
    subtitle:
      'Reliable rides for consultations, follow-ups, specialist visits, lab work, therapy, and routine medical care.',
    heroImage:
      'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1600&q=80&auto=format&fit=crop',
    heroAlt: 'Healthcare appointment check-in with professional medical support',
    trustBadge: 'Built around check-in times and follow-up care',
    overviewTitle: 'Keep appointments on track without transportation stress',
    overview: [
      'Doctor appointment rides help patients arrive on time for consultations, follow-ups, specialist care, diagnostics, and other scheduled visits.',
      'Instead of relying on last-minute rides or uncertain transportation, patients and caregivers can schedule professional support that understands medical timing.',
      'The result is a smoother appointment day with dependable pickup, clear communication, and a ride experience that feels calm and respectful.',
    ],
    benefits: [
      { icon: 'Stethoscope', title: 'Medical Visit Ready', description: 'Support for primary care, specialists, labs, and follow-ups.' },
      { icon: 'Clock3', title: 'On-Time Focus', description: 'Pickup timing is planned around check-in requirements.' },
      { icon: 'CalendarCheck', title: 'Easy Booking', description: 'One-time and recurring appointments can be arranged.' },
      { icon: 'Car', title: 'Clean Vehicles', description: 'Comfortable transportation for routine care travel.' },
      { icon: 'HeartHandshake', title: 'Friendly Assistance', description: 'Patient-centered support without rushing.' },
      { icon: 'PhoneCall', title: 'Clear Coordination', description: 'Helpful communication for patients and caregivers.' },
    ],
    steps: [
      { title: 'Choose Appointment', description: 'Share date, time, clinic, and pickup address.' },
      { title: 'Confirm Ride Plan', description: 'We review arrival goals and passenger needs.' },
      { title: 'Travel to Care', description: 'Patients are transported comfortably to the appointment.' },
      { title: 'Plan Return', description: 'Return transportation can be included when needed.' },
    ],
    audience: ['Primary care patients', 'Specialist appointment patients', 'People attending lab work', 'Seniors needing reliable rides', 'Caregivers booking follow-ups'],
    trust: [
      { icon: 'BadgeCheck', title: 'Dependable Team', description: 'Professional ride support for scheduled care.' },
      { icon: 'Route', title: 'Clinic Coordination', description: 'Routes and timing are planned around appointment locations.' },
      { icon: 'Users', title: 'Caregiver Support', description: 'Family members can arrange and manage ride details.' },
    ],
    faqs: [
      { question: 'Can I book for a specialist appointment?', answer: 'Yes. Rides can be arranged for specialists, primary care, labs, therapy, and follow-up appointments.' },
      { question: 'Can I schedule a return ride?', answer: 'Yes. Return transportation can be planned when the appointment end time is known or estimated.' },
      { question: 'How early should pickup be?', answer: 'Pickup timing depends on distance, traffic, and check-in requirements. We help plan a realistic arrival window.' },
      { question: 'Can someone else book for me?', answer: 'Yes. A family member, caregiver, or care coordinator can arrange the ride.' },
    ],
    finalCtaTitle: 'Schedule Your Appointment Ride',
    finalCtaText: 'Arrive on time and travel with confidence to your next medical appointment.',
  },
  'airport-medical-assistance': {
    slug: 'airport-medical-assistance',
    title: 'Airport Medical Assistance Transport',
    eyebrow: 'Accessible airport transportation',
    subtitle:
      'Comfortable airport transportation for travelers who need mobility support, medical assistance, or coordinated pickup and drop-off.',
    heroImage:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80&auto=format&fit=crop',
    heroAlt: 'Airport terminal prepared for travelers needing medical transportation assistance',
    trustBadge: 'Travel support for mobility and medical assistance needs',
    overviewTitle: 'A calmer way to travel to and from the airport',
    overview: [
      'Airport medical assistance transport supports travelers who need more than a standard ride. We help coordinate comfortable transportation around flight times, mobility needs, and luggage considerations.',
      'This service is helpful for seniors, wheelchair users, post-treatment travelers, and families coordinating travel for someone who needs extra care.',
      'With clear scheduling and patient-focused support, airport transfers can feel more organized, dignified, and manageable.',
    ],
    benefits: [
      { icon: 'Plane', title: 'Airport Transfers', description: 'Pickup and drop-off planned around flight timing.' },
      { icon: 'Accessibility', title: 'Mobility Support', description: 'Helpful assistance for travelers with accessibility needs.' },
      { icon: 'Luggage', title: 'Travel Coordination', description: 'Ride planning considers luggage and passenger comfort.' },
      { icon: 'Clock3', title: 'Time Sensitive', description: 'Scheduling accounts for check-in and airport arrival windows.' },
      { icon: 'HeartHandshake', title: 'Compassionate Help', description: 'Supportive care for seniors, patients, and families.' },
      { icon: 'PhoneCall', title: 'Clear Communication', description: 'Helpful coordination before pickup or arrival.' },
    ],
    steps: [
      { title: 'Share Flight Details', description: 'Provide flight time, terminal, pickup location, and mobility needs.' },
      { title: 'Confirm Travel Plan', description: 'We review timing, luggage, and assistance preferences.' },
      { title: 'Ride Comfortably', description: 'Travel to or from the airport in a clean, supportive vehicle.' },
      { title: 'Coordinate Arrival', description: 'Pickup and drop-off details are handled with care.' },
    ],
    audience: ['Seniors traveling for care', 'Wheelchair users', 'Patients after treatment', 'Travelers needing assistance', 'Families coordinating airport pickup'],
    trust: [
      { icon: 'Route', title: 'Planned Transfers', description: 'Airport routes and timing are organized before travel day.' },
      { icon: 'ShieldCheck', title: 'Safe Support', description: 'Passenger comfort and mobility needs are prioritized.' },
      { icon: 'Users', title: 'Family Coordination', description: 'Loved ones can help manage pickup and drop-off details.' },
    ],
    faqs: [
      { question: 'Do you provide airport pickup and drop-off?', answer: 'Yes. Transportation can be arranged for both airport arrivals and departures.' },
      { question: 'Can you support wheelchair passengers?', answer: 'Yes. Share mobility needs during booking so the appropriate transportation plan can be arranged.' },
      { question: 'Should I provide flight information?', answer: 'Yes. Flight time, terminal, and pickup details help us coordinate a smoother transfer.' },
      { question: 'Can family members coordinate the ride?', answer: 'Yes. Family members can arrange transportation and provide traveler support details.' },
    ],
    finalCtaTitle: 'Reserve Airport Medical Transport',
    finalCtaText: 'Plan a comfortable airport transfer with mobility-aware, compassionate transportation support.',
  },
};

export const serviceDetailList = Object.values(SERVICE_DETAILS);
