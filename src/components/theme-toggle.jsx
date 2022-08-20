import styled from "styled-components"
import { Svg } from "~/components"

export const ThemeToggle = ({ onClick, theme }) => {
  return (
    <StyledThemeToggle onClick={onClick}>
      {theme === "light" ? <Svg name="sun" /> : <Svg name="moon" />}
    </StyledThemeToggle>
  )
}

const StyledThemeToggle = styled.button`
  line-height: 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.background["01"]};
  border: none;
  padding: 0.6rem;
  border-radius: 999rem;

  svg {
    width: 2rem;
    height: auto;
    fill: ${({ theme }) => theme.primary};
    transition: transform 0.2s ease-in-out;
  }

  &:hover svg {
    transform: rotate(45deg);
  }
`
