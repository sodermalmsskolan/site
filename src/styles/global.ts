import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    font-family: var(--font-sans);
    background: var(--background);
    color: var(--foreground);
  }

  @supports (font-variation-settings: normal) {
    :root {
      --font-sans: "Inter var", var(--font-system); 
    }
  }

  body {
    margin: 0;
  }

  :root {
    --font-sans: "Inter", var(--font-system);
    --font-system: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    --font-monospace: "Source Code Pro", monospace;

    --page-gutter: 24px;
    --max-page-width: 1260px;
    --section-spacing: 24px;

    /* Colors */
    --foreground: black;
    --background: white;
    --accents-1: #fafafa;
    --accents-2: #eaeaea;
    --accents-3: #999;
    --accents-4: #888;
    --accents-5: #666;
    --accents-6: #444;
    --accents-7: #333;
    --accents-8: #111;

    --color-success: #0070f3;

    --color: var(--color-success);

    --code-background: rgba(27, 31, 35, 0.05);

    --header-background: rgba(255, 255, 255, 0.8);

    --shadow-color: var(--accents-2);
    --shadow-smallest: 0px 4px 8px var(--shadow-color);
    --shadow-small: 0 5px 10px var(--shadow-color);
    --shadow-medium: 0 8px 30px var(--shadow-color);
    --shadow-large: 0 30px 60px var(--shadow-color);
    --shadow-hover: 0 30px 60px var(--shadow-color);


    /* @media (prefers-color-scheme: dark) {
      --foreground: white;
      --background: black;

      --accents-8: #fafafa;
      --accents-7: #eaeaea;
      --accents-6: #999;
      --accents-5: #888;
      --accents-4: #666;
      --accents-3: #444;
      --accents-2: #333;
      --accents-1: #111;

      --header-background: rgba(0, 0, 0, 0.8);

      --shadow-color: rgba(255, 255, 255, 0.1);

      --shadow-smallest: 0 0 0 1px var(--shadow-color);
      --shadow-small: 0 0 0 1px var(--shadow-color);
      --shadow-medium: 0 0 0 1px var(--shadow-color);
      --shadow-large: 0 0 0 1px var(--shadow-color);
      --shadow-hover: 0 0 0 1px var(--shadow-color);
    } */

    @media (min-width: 576px) {
      --section-spacing: 48px;
    }

    @media (min-width: 768px) {
      --page-gutter: 40px;
    }

    @media (min-width: 992px) {
      --section-spacing: 120px;
    }
  }

  code {
    font-family: "Source Code Pro", monospace;
  }

  :not(pre) > code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    color: inherit;
    white-space: nowrap;
    border-radius: 6px;
    background-color: var(--code-background);
  }

  pre {
    padding: 1rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: var(--code-background);
    border-radius: 8px;

    code {
      background-color: transparent;
    }
  }

  /*
  github.com style (c) Vasily Polovnyov <vast@whiteants.net>
  */

  .hljs-comment,
  .hljs-quote {
    color: #998;
    font-style: italic;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-subst {
    color: #333;
    font-weight: bold;
  }

  .hljs-number,
  .hljs-literal,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag .hljs-attr {
    color: #008080;
  }

  .hljs-string,
  .hljs-doctag {
    color: #d14;
  }

  .hljs-title,
  .hljs-section,
  .hljs-selector-id {
    color: #900;
    font-weight: bold;
  }

  .hljs-subst {
    font-weight: normal;
  }

  .hljs-type,
  .hljs-class .hljs-title {
    color: #458;
    font-weight: bold;
  }

  .hljs-tag,
  .hljs-name,
  .hljs-attribute {
    color: #000080;
    font-weight: normal;
  }

  .hljs-regexp,
  .hljs-link {
    color: #009926;
  }

  .hljs-symbol,
  .hljs-bullet {
    color: #990073;
  }

  .hljs-built_in,
  .hljs-builtin-name {
    color: #0086b3;
  }

  .hljs-meta {
    color: #999;
    font-weight: bold;
  }

  .hljs-deletion {
    background: #fdd;
  }

  .hljs-addition {
    background: #dfd;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  small {
    font-size: 14px;
  }

  p {
    color: var(--accents-5);
    line-height: 1.6;
    letter-spacing: -.02em;
    margin: 1em 0;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: -.1rem;
    line-height: 1;
  }

  h2 {
    font-size: 2.25rem;
    letter-spacing: -.05rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.5rem;
    letter-spacing: -.05rem;
    font-weight: 600;
  }

  h5 {
    font-size: 1.5rem;
    letter-spacing: -.05em;
  }

  img {
    width: 100%;
  }

  a {
    color: var(--color);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--foreground);
    }
  }

  ul, ol {
    margin: 0;

    li {
      margin-bottom: 10px;
      color: var(--foreground);
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin-left: 24px;

    li::before {
      content: "–";
      display: inline-block;
      color: var(--accents-4);
      position: absolute;
      margin-left: -15px;
    }
  }
`;