import styled from "styled-components"
import avatar from "~/assets/avatar.webp"
import { ThemeToggle } from "~/components"

export const Avatar = ({ onClick, theme }) => {
  return (
    <StyledAvatar>
      <img src={avatar} alt="Avatar" />
      <ThemeToggle onClick={onClick} theme={theme} />
    </StyledAvatar>
  )
}

const StyledAvatar = styled.div`
  position: relative;

  img {
    border-radius: 999rem;
    border: 0.2rem solid ${({ theme }) => theme.primary};
  }

  button {
    position: absolute;
    top: calc(-3.2rem / 2);
    left: calc(50% - (3.2rem / 2));
  }
`
