import { CSSObject } from "@emotion/react";
import baseTheme from "./base";

const darkTheme: CSSObject = {
  ...baseTheme,

  "--accents-1": "#111111",
  "--accents-2": "#333333",
  "--accents-3": "#444444",
  "--accents-4": "#666666",
  "--accents-5": "#888888",
  "--accents-6": "#999999",
  "--accents-7": "#eaeaea",
  "--accents-8": "#fafafa",

  "--color-bg-primary": "#000000",

  "--color-text-primary": "#ffffff",
  "--color-text-secondary": "#cccccc",
  "--color-text-tertiary": "#a0a0a0",

  "--shadow-color": "rgba(255, 255, 255, 0.5)",

  "--skeleton-highlight": "var(--accents-3)",

  "--segmented-control-indicator": "var(--accents-5)",
};

export default darkTheme;