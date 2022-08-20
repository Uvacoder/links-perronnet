import styled, { ThemeProvider } from "styled-components"
import { useThemes } from "~/hooks"
import { GlobalStyle, lightTheme, darkTheme } from "~/styles"
import { Profil } from "~/components"

export const App = () => {
  const [theme, setTheme] = useThemes()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  return (
    <StyledApp>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Profil onClick={() => setTheme()} theme={theme} />
      </ThemeProvider>
    </StyledApp>
  )
}

const StyledApp = styled.div`
  max-width: 64rem;
  width: calc(100% - (2.4rem * 2));
  margin-inline: auto;
  padding-block: 3.2rem;
  display: flex;
  justify-content: center;
`
