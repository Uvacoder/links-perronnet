import styled from "styled-components"
import { LinksCard } from "~/components"
import links from "~/data/links.json"

export const LinksList = () => {
  return (
    <StyledLinksList>
      {links.map(link => (
        <LinksCard
          key={link.name}
          type={link.name}
          icon={link.name}
          href={link.url}
        />
      ))}
    </StyledLinksList>
  )
}

const StyledLinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-block: 3.2rem;
`
