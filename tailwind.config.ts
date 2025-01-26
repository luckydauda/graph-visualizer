import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.tsx"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-geist-sans)',
                    ...fontFamily.sans
                ]
  		},
		  scrollbar: {
			thin: "4px", // Adjust the size here to make it thinner
			colors: {
			  thumb: "#b3b3b3",
			  track: "#f5f5f5",
			},
		  },

		  fontSize: {
			tableHeader: "17px", // Matches `text-base`
			tableData: "sm", // Matches `text-sm`
			tableSubtext: "xs", // Matches `text-xs`
			base: "17px", // Matches `text-[14px]`
			headerlarge: "22px", // Matches `text-2xl`
			small: "14px", // Matches `text-sm`,
			
		  },
		  lineHeight: {
			relaxed: "1.75", // Matches `leading-relaxed`
			doubled: "2", // Matches `leading-[2]`
		  },
		  spacing: {
			sidebarCollapsed: "5rem", // 20
			sidebarExpanded: "16rem", // 64
			sectionGap: "1.5rem", // Matches `gap-6`
			tablePadding: "0.5rem", // Matches `p-2`
			cardPadding: "1rem", // Matches `p-4`
			iconSize: "2.5rem", // Matches `w-10 h-10`
			tableCellPadding: "1rem", // Matches `px-4 py-2`
			tableGap: "1.25rem", // Matches `gap-5`
			verticalLine: "1px", // Matches `w-px`
			sectionPadding: "1rem", // Matches `p-4`
			sectionPaddingMd: "2rem", // Matches `md:p-8`
			gapLarge: "1.5rem", // Matches `gap-6`
		  },
		  boxShadow: {
			card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Matches `shadow`,
			cardHover: "0 6px 8px rgba(0, 0, 0, 0.15)", // Matches `hover:shadow-md`
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
			 card: "25px",
			full: "9999px",
			mid: "20px",
			section: "25px",
  		},
		  transitionTimingFunction: {
			smooth: "ease-in-out", // Matches `transition-shadow`
		  },
		  transitionDuration: {
			smooth: "300ms", // Matches `transition-shadow`
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			lightgray: "#525D73",
			header: "#02983E",
			darkgray: "#334155",
			softgray: "#404A60",
			hline: "#858D9D",
			cardbg: "#FAFAFA",
			ipline: "#667085",
			graph: "#FAFAFA",
			popoverred: "#FFF1F0",
			popoverpurple: "#F2EDFF",
			popoverpurpltext: "#6236CC",
			popoverlightblue: "#ECF5FF",
			popoverlightbluetext: "#0053B5",
			mediumgray: "#6B7280",
			borderGray: "#D1D5DB", // Matches `border-gray-300`
			textHeader: "#02983E", // Matches `text-header`
			textGray: "#525D73", // Matches `text-gray-500`
			lightGray: "#9CA3AF", // Matches `text-gray-400`
			criticalText: "#DC2626", // Matches `text-red-600`
			criticalBg: "#FEE2E2", 
			sidebarBg: "#FFFFFF",
			sectionBg: "#FFFFFF", // Matches `bg-white`
			graphBg: "#FAFAFA", // Matches `bg-graph`
			sidebarBorder: "#E5E7EB",
			menuHoverBg: "#F3F4F6",
			menuActiveBg: "#D1FAE5",
			menuActiveText: "#065F46",
			menuText: "#525D73",
			tableHeader: "#334155", // Matches `text-gray-600`
			tableData: "#667085", // Matches `text-gray-500`
			cardBackground: "#FFFF", // Matches `bg-white`
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
			  transitionDuration: {
				fast: "100ms",
				smooth: "300ms",
			  },
			  transitionTimingFunction: {
				smooth: "ease-in-out",
			  },
			  borderRadius: {
				menu: "0.375rem", // Rounded-md
				button: "9999px", // Fully rounded
			  },
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")({ nocompatible: true }),],
  
} satisfies Config;
