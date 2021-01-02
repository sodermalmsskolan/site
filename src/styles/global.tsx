import React, { FunctionComponent } from "react";
import {
  css, Global,
} from "@emotion/react";
import { fonts } from "./text";
import spacingVariables from "./spacing";
import darkTheme from "./themes/dark";
import baseTheme from "./themes/base";

export const globalStyles = css({
  "html, body": {
    margin: 0,
    padding: 0,
    fontFamily: fonts.sans,
    wordBreak: "break-word",
    overflowX: "hidden",
  },

  ":root": {
    ...spacingVariables,
  },

  "::selection": {
    background: "var(--color-highlight)",
    color: "#ffffff",
  },
});

export const GlobalStyles: FunctionComponent = () => (
  <Global styles={[globalStyles, {
    ":root": {
      ...baseTheme,

      "@media (prefers-color-scheme: dark)": darkTheme,
    },
  }]}
  />
);
