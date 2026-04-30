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
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg active:scale-95';

  const variants = {
    primary:
      'bg-linear-to-r from-secondary-500 to-secondary-400 text-white hover:shadow-[0_0_30px_rgba(255,140,0,0.4)] hover:from-secondary-400 hover:to-secondary-300 focus:ring-secondary-500',
    secondary:
      'bg-linear-to-r from-primary-500 to-primary-400 text-white hover:shadow-[0_0_30px_rgba(0,82,204,0.4)] hover:from-primary-400 hover:to-primary-300 focus:ring-primary-500',
    outline:
      'border-2 border-secondary-500 text-secondary-400 hover:bg-secondary-500 hover:text-white hover:border-secondary-400 focus:ring-secondary-500',
    ghost:
      'text-neutral-300 hover:text-white hover:bg-white/10 focus:ring-neutral-500',
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
