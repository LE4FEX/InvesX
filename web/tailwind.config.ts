import type { Config } from 'tailwindcss';
import { blue, mauve, slate } from '@radix-ui/colors';

function mapRadixScale(scale: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(scale)
      .filter(([token]) => /\d+$/.test(token))
      .map(([token, value]) => [token.replace(/[^\d]/g, ''), value]),
  );
}

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: mapRadixScale(blue),
        neutral: mapRadixScale(mauve),
        slate: mapRadixScale(slate),
      },
      fontFamily: {
        sans: ['"InterVariable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
