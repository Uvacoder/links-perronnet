import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Space Grotesk";
    font-style: "normal";
    font-weight: 400;
    src:
      local(),
      url("~/assets/fonts/space-grotesk-400.woff2") format("woff2"),
      url("~/assets/fonts/space-grotesk-400.woff") format("woff");
  }

  @font-face {
    font-family: "Space Grotesk";
    font-style: "normal";
    font-weight: 700;
    src:
      local(),
      url("~/assets/fonts/space-grotesk-700.woff2") format("woff2"),
      url("~/assets/fonts/space-grotesk-700.woff") format("woff");
  }

  :root {
    --ff-sans: "Space Grotesk", -apple-system, system-ui, sans-serif;

    --fs-sm: 1.4rem;
    --fs-md: 1.6rem;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  body {
    color: ${({ theme }) => theme.foreground["01"]};
    background-color: ${({ theme }) => theme.background["01"]};
    font-family: var(--ff-sans);
    font-weight: 400;
    font-size: var(--fs-md);
    line-height: 1.5;
  }
`
