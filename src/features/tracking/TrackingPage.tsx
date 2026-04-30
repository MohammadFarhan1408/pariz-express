import { useState } from 'react';
import HeroSection from '../../shared/sections/HeroSection';
import SectionWrapper from '../../shared/layout/SectionWrapper';
import Button from '../../shared/ui/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TRACKING_STEPS = [
  { status: 'completed', label: 'Order Placed', time: 'Apr 28, 2026 — 10:30 AM', desc: 'Your shipment order has been confirmed.' },
  { status: 'completed', label: 'Picked Up', time: 'Apr 28, 2026 — 2:15 PM', desc: 'Package collected from sender.' },
  { status: 'completed', label: 'In Transit', time: 'Apr 29, 2026 — 8:00 AM', desc: 'Package is on the way to the destination hub.' },
  { status: 'active', label: 'Out for Delivery', time: 'Apr 30, 2026 — 9:45 AM', desc: 'Your package is on its way to you.' },
  { status: 'pending', label: 'Delivered', time: 'Estimated: Today by 5 PM', desc: 'Package will be delivered to your address.' },
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
        headline={<>Track Your <span className="text-gradient-orange">Package</span></>}
        subtitle="Enter your tracking ID to get real-time updates on your shipment status."
        breadcrumb="Tracking"
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
          placeholder="Enter tracking ID (e.g., PX-2026-84721)"
          className="flex-1 px-5 py-4 bg-dark-elevated border border-dark-border rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-secondary-500 focus:ring-1 focus:ring-secondary-500/50 transition-all text-lg"
          required
        />
        <Button type="submit" size="lg">Track</Button>
      </form>
    </div>
  );
}

function TrackingResult({ trackingId }: { trackingId: string }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="animate-on-scroll mt-12">
      {/* Header Card */}
      <div className="bg-gradient-card rounded-2xl p-6 border border-dark-border mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-neutral-500 mb-1">Tracking ID</p>
            <p className="text-white font-bold text-lg">{trackingId}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-neutral-500 mb-1">Status</p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-500/10 text-secondary-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse" />
              Out for Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-8">
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-dark-border" />
        {TRACKING_STEPS.map((step, idx) => (
          <div key={idx} className="relative pb-8 last:pb-0">
            {/* Dot */}
            <div className={`absolute left-[-22px] w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              step.status === 'completed'
                ? 'bg-success border-success'
                : step.status === 'active'
                ? 'bg-secondary-500 border-secondary-500 animate-pulse-glow'
                : 'bg-dark-elevated border-dark-border'
            }`}>
              {step.status === 'completed' && <span className="text-white text-xs">✓</span>}
            </div>

            <div className="ml-4">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h4 className={`font-semibold ${step.status === 'pending' ? 'text-neutral-500' : 'text-white'}`}>
                  {step.label}
                </h4>
                <span className="text-xs text-neutral-500">{step.time}</span>
              </div>
              <p className={`text-sm ${step.status === 'pending' ? 'text-neutral-600' : 'text-neutral-400'}`}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
