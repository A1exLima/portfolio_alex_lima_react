import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    --font-Archivo: "Archivo", sans-serif;

    @media (max-width: 768px) {
          font-size: 52.5%;
    }
  }

  body {
    color: ${(props) => props.theme.textInSmallCase};
    background: ${(props) => props.theme['background-theme']};
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body, input, button {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: var(--font-Archivo);
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    
    @media (max-width: 768px) {
      width: 5px;
      height: 5px;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['blue-object']};
    border-radius: 8px;
  }
`
