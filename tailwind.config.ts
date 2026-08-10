import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // Brandon Grotesque led these stacks but was never licensed or loaded,
        // so it always fell through. Archivo is the real display face now.
        heading: ["Archivo Variable", "Montserrat", "system-ui", "sans-serif"],
        display: ["Archivo Variable", "Montserrat", "system-ui", "sans-serif"],
        body: [
          "Inter Variable",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },
      /**
       * Fluid display scale.
       *
       * Sizes interpolate with the viewport, so a heading no longer needs a
       * breakpoint ladder plus a set of `!important` mobile overrides to stay
       * sane on a phone — which is what the ~220-line override block in
       * index.css existed to do.
       */
      fontSize: {
        eyebrow: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.18em" }],
        "display-md": [
          "clamp(1.5rem, 2.4vw, 2rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        "display-lg": [
          "clamp(1.875rem, 3.2vw, 2.75rem)",
          { lineHeight: "1.12", letterSpacing: "-0.018em" },
        ],
        "display-xl": [
          "clamp(2.25rem, 4.5vw, 3.5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.02em" },
        ],
        "display-2xl": [
          "clamp(2.5rem, 6vw, 4.5rem)",
          { lineHeight: "1.04", letterSpacing: "-0.025em" },
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        "hhp-navy": "hsl(var(--hhp-navy))",
        "hhp-navy-deep": "hsl(var(--hhp-navy-deep))",
        "hhp-navy-soft": "hsl(var(--hhp-navy-soft))",
        "hhp-gold": "hsl(var(--hhp-gold))",
        "hhp-gold-soft": "hsl(var(--hhp-gold-soft))",
        "hhp-charcoal": "hsl(var(--hhp-charcoal))",
        "hhp-white": "hsl(var(--hhp-white))",
        // `hhp-accent` used to be a pale sky blue the design had abandoned.
        // Pointing it at gold re-colours ~47 usages across 16 files at once.
        "hhp-accent": "hsl(var(--accent))",

        surface: {
          DEFAULT: "hsl(var(--surface))",
          sunken: "hsl(var(--surface-sunken))",
        },

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
      },
      boxShadow: {
        subtle: "var(--shadow-subtle)",
        elegant: "var(--shadow-elegant)",
        premium: "var(--shadow-premium)",
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
      spacing: {
        // Only real addition to the default scale — Home's hero logo uses h-18.
        "18": "4.5rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "calc(var(--radius) - 2px)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
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
        // Was defined in a component-local <style> block inside
        // DashboardShowcase; registering it here keeps motion in one place.
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.6)", opacity: "0.7" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite",
      },
    },
  },
  // `@tailwindcss/typography` was installed but never registered, so every
  // `prose` class in the app (DevelopmentAdvisory, Platforms) was inert.
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
