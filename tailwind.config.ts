
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				fantasy: {
					dark: '#1A1F2C',     // Deep midnight blue
					navy: '#2A3950',     // Dark navy blue
					purple: '#7E57C2',   // Enchanted purple
					'light-purple': '#9575CD', // Light purple
					gold: '#FFD700',     // Bright gold
					amber: '#F0C050',    // Warm amber
					parchment: '#F5F0E1', // Parchment background
					'dark-parchment': '#E8DFC8', // Darker parchment
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'cinzel': ['Cinzel', 'serif'],
				'marcellus': ['Marcellus', 'serif'],
				'raleway': ['Raleway', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						filter: 'brightness(1)'
					},
					'50%': {
						opacity: '0.8',
						filter: 'brightness(1.2)'
					}
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'page-fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-500px 0' },
					'100%': { backgroundPosition: '500px 0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-right': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-left': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-down': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'page-fade-in': 'page-fade-in 0.8s ease-out',
				'shimmer': 'shimmer 2.5s infinite linear',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-right': 'fade-right 0.7s ease-out',
				'fade-left': 'fade-left 0.7s ease-out',
				'fade-up': 'fade-up 0.7s ease-out',
				'fade-down': 'fade-down 0.7s ease-out',
			},
			backgroundImage: {
				'parchment': "url('/parchment-texture.webp')",
				'fantasy-gradient': 'linear-gradient(135deg, #1A1F2C 0%, #2A3950 100%)',
				'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #F0C050 100%)',
				'purple-gradient': 'linear-gradient(135deg, #7E57C2 0%, #9575CD 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
			},
			boxShadow: {
				'fantasy': '0 2px 15px -3px rgba(126, 87, 194, 0.2), 0 4px 6px -4px rgba(126, 87, 194, 0.2)',
				'fantasy-hover': '0 4px 20px -3px rgba(126, 87, 194, 0.4), 0 8px 10px -6px rgba(126, 87, 194, 0.3)',
				'gold': '0 2px 15px -3px rgba(240, 192, 80, 0.2), 0 4px 6px -4px rgba(240, 192, 80, 0.2)',
				'gold-hover': '0 4px 20px -3px rgba(240, 192, 80, 0.4), 0 8px 10px -6px rgba(240, 192, 80, 0.3)',
				'inner-glow': 'inset 0 0 15px 1px rgba(126, 87, 194, 0.2)',
				'gold-inner-glow': 'inset 0 0 15px 1px rgba(240, 192, 80, 0.2)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
