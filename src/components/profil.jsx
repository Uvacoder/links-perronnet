import styled from "styled-components"
import { Avatar, Svg } from "~/components"

export const Profil = ({ onClick, theme }) => {
  return (
    <StyledProfil>
      <Avatar onClick={onClick} theme={theme} />
      <TitleSubtitle>
        <h1>Alex Perronnet</h1>
        <p>frontend engineer</p>
      </TitleSubtitle>
      <Location>
        <Svg name="flag-fr" />
        <span>Paris, FR</span>
      </Location>
    </StyledProfil>
  )
}

const StyledProfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`

const TitleSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: center;

  h1 {
    font-size: var(--fs-lg);
    font-weight: 700;
    color: ${({ theme }) => theme.foreground["02"]};

    @media screen and (max-width: 640px) {
      font-size: var(--fs-md);
    }
  }

  p {
    @media screen and (max-width: 640px) {
      font-size: var(--fs-sm);
    }
  }
`

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    width: 1.6rem;
    height: auto;
  }

  span {
    font-size: var(--fs-sm);
  }
`
