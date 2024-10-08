import type { Config } from "tailwindcss";

const mainSizes = {
  "main-1": "69px",
  "main-2": "168px",
  "main-3": "267px",
  "main-4": "367px",
  "main-5": "466px",
  "main-6": "565px",
  "main-7": "664px",
  "main-8": "763px",
  "main-9": "863px",
  "main-10": "962px",
  "main-11": "1061px",
};

const config: Config = {
  content: [
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/theme/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: mainSizes,
      minWidth: mainSizes,
      maxWidth: mainSizes,
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        6: "6 6 0%",
        7: "7 7 0%",
        8: "8 8 0%",
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
        decimal: "decimal",
      },
      gap: {
        main: "40px",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        "source-code-pro": [
          "var(--font-source_code_pro)",
          "Source Code Pro",
          "monospace",
        ],
        play: ["var(--font-play)", "Play", "sans-serif"],
        vt323: ["var(--font-vt323)", "VT323", "monospace"],
      },
      colors: {
        primary: "#00A9EA",
        secondary: "#002B3C",
      },
      screens: {
        big: [{ min: "768px" }, { min: "1280px" }],
        small: [{ max: "767px" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
    require("tailwindcss/plugin")(({ matchUtilities }: any) => {
      matchUtilities({
        x: (value: string) => ({
          [`@apply ${value.replaceAll(",", " ")}`]: {},
        }),
      });
    }),
  ],
};
export default config;
