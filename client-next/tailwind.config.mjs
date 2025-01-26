/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'linear-gradient(to bottom, #0000, #200D42 34%, #4F21A1 65%, #A46EDB 82%)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  animation: {
			typewriter: 'typewriter 2s steps(11) forwards',
			caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
		  },
		  keyframes: {
			typewriter: {
			  to: {
				left: '100%',
			  },
			},
			blink: {
			  '0%': {
				opacity: '0',
			  },
			  '0.1%': {
				opacity: '1',
			  },
			  '50%': {
				opacity: '1',
			  },
			  '50.1%': {
				opacity: '0',
			  },
			  '100%': {
				opacity: '0',
			  },
			},
		},
  	},
  },
  plugins: [require("tailwindcss-animate")],
};
