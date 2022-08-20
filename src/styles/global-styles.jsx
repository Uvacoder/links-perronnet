import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --ff-sans: "Space Grotesk", sans-serif;

    --fs-sm: 1.4rem;
    --fs-md: 1.6rem;
    --fs-lg: 2rem;
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

  ::selection {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary}33;
  }
`
