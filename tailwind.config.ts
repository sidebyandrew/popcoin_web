import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',

  content: [
    './public/**/*.html',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        blur: 'rgba(0, 0, 0, 0.5)', // 设置毛玻璃效果的颜色
      },
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        levitate: {
          '0%': {
            transform: 'translateY(0)',
          },
          '30%': {
            transform: 'translateY(-10px)',
          },
          '50%': {
            transform: 'translateY(4px)',
          },
          '70%': {
            transform: 'translateY(-15px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        expand: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        'expand-opacity': {
          '0%': {
            opacity: '0',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.3)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(1.295)',
          },
        },
      },
      animation: {
        heartbeat: 'heartbeat 1s ease-in-out infinite',
        levitate: 'levitate 5s ease infinite',
        expand: 'expand 6s ease-out infinite both',
        'expand-opacity': 'expand-opacity 6s linear infinite both',
      },
    },
  },

  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};
export default config;
