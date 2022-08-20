import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle, lightTheme, darkTheme } from "~/styles"

export const App = () => {
  return (
    <StyledApp>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
      </ThemeProvider>
    </StyledApp>
  )
}

const StyledApp = styled.div``
