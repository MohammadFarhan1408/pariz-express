import { useState } from 'react';
import HeroSection from '../../shared/sections/HeroSection';
import SectionWrapper from '../../shared/layout/SectionWrapper';
import Button from '../../shared/ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TRACKING_STEPS = [
  { status: 'completed', label: 'Request Received', time: 'May 10, 2026 - 10:30 AM', desc: 'Your wellness request has been received.' },
  { status: 'completed', label: 'Service Selected', time: 'May 10, 2026 - 10:45 AM', desc: 'Your preferred session type is ready for review.' },
  { status: 'completed', label: 'Therapist Matched', time: 'May 10, 2026 - 11:10 AM', desc: 'A therapist has been matched to your goals and timing.' },
  { status: 'active', label: 'Confirmation Pending', time: 'Today by 5 PM', desc: 'Our team is confirming availability and final details.' },
  { status: 'pending', label: 'Visit Confirmed', time: 'Estimated: Today', desc: 'You will receive a final confirmation with arrival details.' },
];

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) setShowResult(true);
  };

  return (
    <>
      <HeroSection
        headline={<>Manage Your <span className="text-gradient-sky">Booking</span></>}
        subtitle="Enter your booking request ID to view a sample appointment confirmation flow."
        breadcrumb="Booking"
      />

      <SectionWrapper id="tracking-section">
        <div className="max-w-2xl mx-auto">
          <TrackingInput
            value={trackingId}
            onChange={setTrackingId}
            onSubmit={handleTrack}
          />
          {showResult && <TrackingResult trackingId={trackingId} />}
        </div>
      </SectionWrapper>
    </>
  );
}

function TrackingInput({ value, onChange, onSubmit }: {
  value: string; onChange: (v: string) => void; onSubmit: (e: React.FormEvent) => void;
}) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="animate-on-scroll">
      <form onSubmit={onSubmit} className="flex gap-3" id="tracking-form">
        <input
          id="tracking-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter booking ID (e.g., KT-2026-08421)"
          className="flex-1 px-5 py-4 bg-white border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all text-lg"
          required
        />
        <Button type="submit" size="lg">View</Button>
      </form>
    </div>
  );
}

function TrackingResult({ trackingId }: { trackingId: string }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="animate-on-scroll mt-12">
      {/* Header Card */}
      <div className="bg-gradient-card rounded-2xl p-6 border border-neutral-200 shadow-sm shadow-slate-200/70 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-neutral-500 mb-1">Booking ID</p>
            <p className="text-neutral-900 font-bold text-lg">{trackingId}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-neutral-500 mb-1">Status</p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Confirmation Pending
            </span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-8">
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-neutral-200" />
        {TRACKING_STEPS.map((step, idx) => (
          <div key={idx} className="relative pb-8 last:pb-0">
            {/* Dot */}
            <div className={`absolute left-[-22px] w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              step.status === 'completed'
                ? 'bg-success border-success'
                : step.status === 'active'
                ? 'bg-primary-500 border-primary-500 animate-pulse-glow'
                : 'bg-white border-neutral-300'
            }`}>
              {step.status === 'completed' && <span className="w-2 h-2 rounded-full bg-white" />}
            </div>

            <div className="ml-4">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h4 className={`font-semibold ${step.status === 'pending' ? 'text-neutral-500' : 'text-neutral-900'}`}>
                  {step.label}
                </h4>
                <span className="text-xs text-neutral-500">{step.time}</span>
              </div>
              <p className={`text-sm ${step.status === 'pending' ? 'text-neutral-500' : 'text-neutral-600'}`}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
