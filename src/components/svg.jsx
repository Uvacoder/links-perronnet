export const Svg = ({ name }) => {
  if (name === "sun") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
      </svg>
    )
  }

  if (name === "moon") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
      </svg>
    )
  }

  if (name === "flag-fr") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
        <path fill="#F50100" d="M11 0h5v12h-5V0z"></path>
        <path fill="#2E42A5" d="M0 0h5v12H0V0z"></path>
        <path fill="#F7FCFF" d="M5 0h6v12H5V0z"></path>
      </svg>
    )
  }
}
