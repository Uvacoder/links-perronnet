import styled from "styled-components"
import { Svg } from "~/components"

export const Footer = () => {
  return (
    <StyledFooter>
      <span />
      <Svg name="logo" />
      <span />
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  svg {
    min-height: 3.6rem;
    min-width: 3.6rem;
    max-height: 3.6rem;
    max-width: 3.6rem;
    fill: currentColor;
  }

  span {
    height: 0.1rem;
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
  }
`
