import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        bpulse: 'bpulse 1s ease-in-out infinite',
      },
      keyframes: {
        bpulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
};
