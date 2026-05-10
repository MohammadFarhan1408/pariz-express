import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
  isMotion?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  isMotion = false,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white active:scale-95';

  const variants = {
    primary:
      'bg-primary-400 text-white shadow-lg shadow-primary-400/20 hover:-translate-y-0.5 hover:bg-primary-500 hover:shadow-xl hover:shadow-primary-400/25 focus:ring-primary-400',
    secondary:
      'bg-primary-50 text-primary-700 border border-primary-200 hover:-translate-y-0.5 hover:bg-primary-100 hover:border-primary-300 focus:ring-primary-400',
    outline:
      'bg-white border border-primary-400 text-primary-600 hover:-translate-y-0.5 hover:bg-primary-50 hover:border-primary-500 focus:ring-primary-400',
    ghost:
      'text-neutral-600 hover:text-primary-700 hover:bg-primary-50 focus:ring-primary-300',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const buttonClass = `${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (isMotion) {
    return (
      <motion.button
        className={buttonClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        form={props.form}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
