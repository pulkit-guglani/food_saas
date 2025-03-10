/** @type {import('tailwindcss').Config} */

const commonLineHeight = {
  130: "140%",
};
const bodyCommonLineHeight = {
  140: "140%",
};

const fontWeight = {
  bold: {
    lineHeight: bodyCommonLineHeight,
    fontWeight: 700,
  },
  semibold: {
    lineHeight: bodyCommonLineHeight,
    fontWeight: 600,
  },
  medium: {
    lineHeight: bodyCommonLineHeight,
    fontWeight: 500,
  },
  regular: {
    lineHeight: bodyCommonLineHeight,
    fontWeight: 400,
  },
};

const headingFontWeight = {
  bold: {
    lineHeight: commonLineHeight,
    // letterSpacing:'-4px',
    fontWeight: 700,
  },
  semibold: {
    lineHeight: commonLineHeight,
    fontWeight: 600,
  },
  medium: {
    lineHeight: commonLineHeight,
    fontWeight: 500,
  },
  regular: {
    lineHeight: commonLineHeight,
    fontWeight: 400,
  },
};

const colors = {
  /** Background color */
  background: "#F7F9FA",
  /** Primary - Moonstone blue */
  primary: "#69A3CC",
  primary_50: "#F5F8FB",
  primary_100: "#D0E3EF",
  primary_200: "#69A3CC",
  primary_300: "#217BBB",
  primary_400: "#005C9E",
  primary_500: "#123A68",

  /** primary extended new class from 3.0.0  */
  primary_extended: "#69A3CC",
  primary_extended_50: "#F3F8FB",
  primary_extended_100: "#E3EFF6",
  primary_extended_200: "#CDE4F0",
  primary_extended_300: "#ABD2E5",
  primary_extended_400: "#69A3CC", // Moonstone
  primary_extended_500: "#458FC4",
  primary_extended_600: "#217BBB",
  primary_extended_700: "#1C649D",
  primary_extended_800: "#174F83",
  primary_extended_900: "#123A68",
  primary_extended_1000: "#062149",

  /** Secondary - Lime */
  secondary: "#CCF88E",
  secondary_50: "#F7FEE9",
  secondary_100: "#EDFBD0",
  secondary_200: "#E1FBBC",
  secondary_300: "#C1EF78",
  secondary_400: "#8CC942",
  secondary_500: "#6DA032",
  secondary_600: "#8CC942",
  secondary_700: "#619E12",
  secondary_800: "#4A7813",
  secondary_900: "#314D11",

  /** secondary - violet */
  secondary_violet_50: "#F9F5FF",
  secondary_violet_100: "#F1E8FF",
  secondary_violet_200: "#E6D5FF",
  secondary_violet_300: "#D3B4FE",
  secondary_violet_400: "#B884FC",
  secondary_violet_500: "#9547F7",
  secondary_violet_600: "#8632EB",
  secondary_violet_700: "#6221A8",
  secondary_violet_800: "#511C87",
  secondary_violet_900: "#350764",

  /** secondary - orange */
  secondary_orange_50: "#FEF9EC",
  secondary_orange_100: "#FCECC9",
  secondary_orange_200: "#F9D58E",
  secondary_orange_300: "#F5BB54",
  secondary_orange_400: "#F3A32E",
  secondary_orange_500: "#EC8114",
  secondary_orange_600: "#D15D0E",
  secondary_orange_700: "#AE400F",
  secondary_orange_800: "#742A13",
  secondary_orange_900: "#431305",

  /** secondary - azure */
  secondary_azure_50: "#f2f8fd",
  secondary_azure_100: "#e4effa",
  secondary_azure_200: "#c3def4",
  secondary_azure_300: "#8ec3eb",
  secondary_azure_400: "#429cdb",
  secondary_azure_500: "#2c89cb",
  secondary_azure_600: "#1d6cac",
  secondary_azure_700: "#18578c",
  secondary_azure_800: "#184a74",
  secondary_azure_900: "#193e61",

  /** Accent - Salmon */
  accent: "#F97F6F",
  accent_50: "#FBF8F7",
  accent_100: "#F6E9E7",
  accent_300: "#F05743",
  accent_400: "#DD3A25",
  accent_500: "#BA2D1B",

  /** secondary extended new class from 3.0.0 */
  secondary_extended: "#CCF88E",
  secondary_extended_50: "#F5FEE7",
  secondary_extended_100: "#EFFDD8",
  secondary_extended_200: "#E1FBBC",
  secondary_extended_300: "#CCF88E",
  secondary_extended_400: "#C1EF78",
  secondary_extended_500: "#9FE03B",
  secondary_extended_600: "#8CC942",
  secondary_extended_700: "#619E12",
  secondary_extended_800: "#4A7813",
  secondary_extended_900: "#314D11",

  /** GrayScale */
  grayscale_100: "#F6F7F9",
  grayscale_200: "#ECEFF2",
  grayscale_300: "#D5DBE2",
  grayscale_400: "#B0BBC9",
  grayscale_500: "#8696AA",
  grayscale_600: "#677990",
  grayscale_700: "#475467",
  grayscale_800: "#2E3642",
  grayscale_900: "#0C151D",

  /** grayscale extended new class from 3.0.0 */
  grayscale_text_white: "#FFFFFF",
  grayscale_extended_50: "#F6F7F9",
  grayscale_extended_100: "#ECEFF2",
  grayscale_extended_200: "#ECEFF2", // override with grayscale_200
  // grayscale_extended_200: '#D5DBE2',
  grayscale_extended_300: "#B0BBC9",
  grayscale_extended_400: "#8696AA",
  grayscale_extended_500: "#677990",
  grayscale_extended_600: "#526277",
  grayscale_extended_700: "#475467",
  grayscale_extended_800: "#2E3642",
  grayscale_extended_900: "#22272F",

  /** Alert */
  negative: "#EB3E28",
  positive: "#6BBE79",
  extended_error: "#DD3A25",

  negative_extended_100: "#FEE2E2",
  negative_extended_200: "#FECACA",
  negative_extended_300: "#FCA5A5",
  negative_extended_400: "#F87171",
  negative_extended_500: "#EB3E28",
  positive_extended_100: "#F3FAF4",
  positive_extended_200: "#E3F5E5",
  positive_extended_300: "#C8EACD",
  positive_extended_400: "#9DD8A6",
  positive_extended_500: "#6BBE79",
  warning_100: "#FFFCEB",
  warning_200: "#FEF5C7",
  warning_300: "#FEEA89",
  warning_400: "#FED946",
  warning_500: "#FCC723",
};

module.exports = {
  darkMode: "class",
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize: {
        h1: ["48px", headingFontWeight.bold],
        h2_bold: ["32px", headingFontWeight.bold],
        h2_semibold: ["32px", headingFontWeight.semibold],
        h3_bold: ["24px", headingFontWeight.bold],
        h3_medium: ["24px", headingFontWeight.medium],
        h4_bold: ["18px", headingFontWeight.bold],
        h4_semibold: ["18px", headingFontWeight.semibold],
        bodyL_medium: ["18px", headingFontWeight.medium],
        bodyS_regular: ["16px", fontWeight.regular],
        bodyS_medium: ["16px", fontWeight.medium],
        bodyS_semibold: ["16px", fontWeight.semibold],
        bodyS_bold: ["16px", fontWeight.bold],
        buttonL_semibold: ["16px", fontWeight.semibold],
        buttonS_semibold: ["14px", fontWeight.semibold],
        label_regular: ["14px", fontWeight.regular],
        label_medium: ["14px", fontWeight.medium],
        label_semibold: ["14px", fontWeight.semibold],
        label_bold: ["14px", fontWeight.bold],
        caption_semibold: ["12px", fontWeight.semibold],
        caption_medium: ["12px", fontWeight.medium],
        caption_regular: ["12px", fontWeight.regular],
        caption_bold: ["12px", fontWeight.bold],
      },
      fontFamily: {
        inter: ["Inter"],
        metro: ["metro"],
      },
      colors: colors,
    },
  },
  plugins: [],
};
