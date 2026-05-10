import type { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: 'light' | 'dark' | 'gradient';
}

export default function SectionWrapper({ 
  children, 
  className = '', 
  id, 
  variant = 'light' 
}: SectionWrapperProps) {
  const variants = {
    light: 'py-20 lg:py-28 bg-white',
    dark: 'py-20 lg:py-28 bg-neutral-50 border-t border-neutral-200/70',
    gradient: 'py-20 lg:py-28 bg-linear-to-b from-primary-50 to-white',
  };

  return (
    <section
      id={id}
      className={`relative ${variants[variant]} ${className}`}
    >
      {/* Subtle gradient overlay for depth */}
      {variant === 'dark' && (
        <div className="absolute inset-0 bg-linear-to-b from-white/60 to-transparent pointer-events-none" />
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
