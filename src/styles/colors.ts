// Pariz Express Color Palette
// Deep logistics blue, warm CTA orange, tech-forward accents

export const colors = {
  // Primary palette
  primary: {
    50: '#e6f0ff',
    100: '#b3d4ff',
    200: '#80b8ff',
    300: '#4d9cff',
    400: '#1a80ff',
    500: '#0052cc',  // Main primary — deep logistics blue
    600: '#003d99',
    700: '#002966',
    800: '#001433',
    900: '#000a1a',
  },

  // Secondary — CTA orange
  secondary: {
    50: '#fff4e6',
    100: '#ffe0b3',
    200: '#ffcc80',
    300: '#ffb84d',
    400: '#ffa41a',
    500: '#ff8c00',  // Main CTA orange
    600: '#cc7000',
    700: '#995400',
    800: '#663800',
    900: '#331c00',
  },

  // Accent — tech blue
  accent: {
    50: '#e6f7ff',
    100: '#b3e5ff',
    200: '#80d4ff',
    300: '#4dc3ff',
    400: '#1ab2ff',
    500: '#00a0e6',  // Tech accent
    600: '#0080b8',
    700: '#00608a',
    800: '#00405c',
    900: '#00202e',
  },

  // Neutral surfaces
  neutral: {
    50: '#f8f9fb',
    100: '#eef1f5',
    200: '#dde2ea',
    300: '#c4cdd8',
    400: '#9ba8b8',
    500: '#6b7a8d',
    600: '#4a5568',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#070b14',
  },

  // Semantic
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',

  // Backgrounds
  dark: {
    bg: '#0a0e1a',
    card: '#111827',
    elevated: '#1a2236',
    border: '#1e2d4a',
  },

  white: '#ffffff',
  black: '#000000',
} as const;

export type ColorKey = keyof typeof colors;
