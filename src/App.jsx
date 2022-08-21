import { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { useThemes } from "~/hooks"
import { GlobalStyle, lightTheme, darkTheme } from "~/styles"
import { Loader, Profil, LinksList, Footer } from "~/components"

export const App = () => {
  const [theme, setTheme] = useThemes()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  const [isLoading, setIsLoading] = useState(true)

  return (
    <StyledApp>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        {isLoading ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <Content>
            <Profil onClick={() => setTheme()} theme={theme} />
            <LinksList />
            <Footer />
          </Content>
        )}
      </ThemeProvider>
    </StyledApp>
  )
}

const StyledApp = styled.div`
  max-width: 64rem;
  width: calc(100% - (2.4rem * 2));
  margin-inline: auto;
`

const Content = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  gap: 3.2rem;
  padding-block: 3.2rem;
  flex-direction: column;
  justify-content: space-between;
`
