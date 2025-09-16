import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #E30613; /* Prompt primaryColor */
    --primary-dark: #C40511;
    --black: #000000;
    --white: #FFFFFF;
    --gray-50: #F9FAFB;
    --gray-100: #F5F5F5;
    --gray-900: #0F0F10;
    --dark-bg: #0A0A0A;
    --container-max: 120rem; /* 1200px */
    --gutter: 2.4rem;       /* 24px */
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--dark-bg);
    color: var(--white);
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  .container {
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--gutter);
  }
`;
