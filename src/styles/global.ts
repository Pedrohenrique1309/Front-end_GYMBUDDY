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

  /* Tema claro */
  [data-theme="light"] {
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8F9FA;
    --bg-tertiary: #F5F5F5;
    --bg-card: #FFFFFF;
    --text-primary: #1A1A1A;
    --text-secondary: #6C757D;
    --text-tertiary: #495057;
    --border-color: #E9ECEF;
    --border-light: #DEE2E6;
    --shadow-color: rgba(0, 0, 0, 0.1);
    --shadow-light: rgba(0, 0, 0, 0.05);
    --header-bg: rgba(255, 255, 255, 0.9);
    --card-overlay: rgba(0, 0, 0, 0.03);
  }

  /* Tema escuro (padrão) */
  [data-theme="dark"] {
    --bg-primary: #0A0A0A;
    --bg-secondary: #1A1A1A;
    --bg-tertiary: #0F0F10;
    --bg-card: #1A1A1A;
    --text-primary: #FFFFFF;
    --text-secondary: #B8B8B8;
    --text-tertiary: #808080;
    --border-color: #333333;
    --border-light: #2A2A2A;
    --shadow-color: rgba(0, 0, 0, 0.3);
    --shadow-light: rgba(0, 0, 0, 0.2);
    --header-bg: rgba(10, 10, 10, 0.7);
    --card-overlay: rgba(255, 255, 255, 0.03);
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
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
