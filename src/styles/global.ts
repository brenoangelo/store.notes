import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --light-yellow: #F5F8CE;
    --green: #43506E;
    --black: #04020F;
    --white: #F2F2F2;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;

    background: #606c88;
    background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);
    background: linear-gradient(to right, #3f4c6b, #606c88); 
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .App {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    max-width: 1280px;
    
    margin: 0 auto;
    padding: 0 15px;

    > h1 {
      font-size: 2.5rem;
      font-weight: 500;
      color: var(--light-yellow);
      padding: 0.5rem;
      position: absolute;
      top: 1rem;
      left: 1rem;
      
    }
  }
`