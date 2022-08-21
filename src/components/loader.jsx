import { useState, useEffect } from "react"
import styled from "styled-components"
import anime from "animejs"
import { Svg } from "~/components"

export const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false)

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading()
    })

    loader
      .add({
        targets: "svg path",
        delay: 150,
        duration: 1350,
        easing: "easeInOutSine",
        strokeDashoffset: [anime.setDashoffset, 0]
      })

      .add({
        targets: "svg",
        delay: 250,
        duration: 250,
        easing: "easeInOutSine",
        opacity: 0,
        scale: 0.1
      })

      .add({
        targets: ".loader",
        duration: 150,
        easing: "easeInOutSine",
        opacity: 0
      })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Svg name="logo" />
    </StyledLoader>
  )
}

const StyledLoader = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.background["01"]};

  svg {
    height: 8rem;
    width: auto;
    color: ${({ theme }) => theme.primary};
  }
`
