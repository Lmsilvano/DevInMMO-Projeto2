import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    color: black;
  }

  body {
    background-color: #b2cbca;
    position: relative;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }

  input {
    font-family: "Montserrat", sans-serif;
  }
`

// ${({ theme }) => theme.color.text};
// ${({ theme }) => theme.color.background};
