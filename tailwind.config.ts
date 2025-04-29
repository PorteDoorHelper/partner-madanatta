import type { Config } from "tailwindcss"
import { theme } from "./lib/theme"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": theme.layout.containerMaxWidth,
      },
    },
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        barlow: ["var(--font-barlow)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Добавляем наши кастомные цвета
        brand: {
          DEFAULT: theme.colors.primary.DEFAULT,
          light: theme.colors.primary.light,
          dark: theme.colors.primary.dark,
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionDuration: {
        fast: theme.animation.duration.fast,
        normal: theme.animation.duration.normal,
        slow: theme.animation.duration.slow,
      },
      transitionTimingFunction: {
        "ease-in-out": theme.animation.easing.easeInOut,
        "ease-out": theme.animation.easing.easeOut,
        "ease-in": theme.animation.easing.easeIn,
      },
      boxShadow: {
        sm: theme.shadows.sm,
        DEFAULT: theme.shadows.DEFAULT,
        md: theme.shadows.md,
        lg: theme.shadows.lg,
        xl: theme.shadows.xl,
        "2xl": theme.shadows["2xl"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
