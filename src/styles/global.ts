import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";


export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #f0f2f5;
    --background-dark: #191F27;

    --red: #e52e40;
    --blue: #1a5fb4;
    --blue-light: #3584e4;
    --green: #00C59F;

    --text-title: #363f5f;
    --text-body: #969cb3;
    --icon: #737373;
    --shape: #fcfcfc;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    // 1rem = font-size: 16px

    @media (max-width: 1080px) {
      font-size: 93.75%; /* 16 x 0.9375 = 15px */
    }

    @media (max-width: 720px) {
      font-size: 87.5%; /* 16 x 0.875 = 14px */
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6 ;
    cursor: not-allowed;
  }
`;
