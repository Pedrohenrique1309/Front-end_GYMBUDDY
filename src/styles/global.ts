import { createGlobalStyle } from 'styled-components'

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
    --container-max: 120rem; 
    --gutter: 2.4rem;       
  }

  /* Tema claro */
  [data-theme="light"] {
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8F9FA;
    --bg-tertiary: #F0F2F5;
    --bg-card: #FFFFFF;
    --bg-header: rgba(255, 255, 255, 0.95);
    --bg-modal: #FFFFFF;
    --bg-input: #F8F9FA;
    --bg-hover: #E8EAED;
    
    --text-primary: #1A1A1A;
    --text-secondary: #6C757D;
    --text-tertiary: #909090;
    --text-inverse: #FFFFFF;
    --text-link: #E30613;
    
    --border-color: #E9ECEF;
    --border-light: #F1F3F5;
    --border-focus: #E30613;
    
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
    --shadow-color: rgba(0, 0, 0, 0.1);
    
    --overlay-bg: rgba(0, 0, 0, 0.5);
    --scrollbar-bg: #F0F2F5;
    --scrollbar-thumb: #CED4DA;
    
    --gradient-primary: linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%);
    --gradient-card: linear-gradient(145deg, #FFFFFF 0%, #F8F9FA 100%);
  }

  /* Tema escuro (padrão) */
  [data-theme="dark"] {
    --bg-primary: #0A0A0A;
    --bg-secondary: #1A1A1A;
    --bg-tertiary: #252525;
    --bg-card: #1A1A1A;
    --bg-header: rgba(10, 10, 10, 0.95);
    --bg-modal: #1A1A1A;
    --bg-input: #252525;
    --bg-hover: #2A2A2A;
    
    --text-primary: #FFFFFF;
    --text-secondary: #B8B8B8;
    --text-tertiary: #808080;
    --text-inverse: #1A1A1A;
    --text-link: #E30613;
    
    --border-color: #333333;
    --border-light: #2A2A2A;
    --border-focus: #E30613;
    
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.4);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.5);
    --shadow-color: rgba(0, 0, 0, 0.3);
    
    --overlay-bg: rgba(0, 0, 0, 0.8);
    --scrollbar-bg: #1A1A1A;
    --scrollbar-thumb: #404040;
    
    --gradient-primary: linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%);
    --gradient-card: linear-gradient(145deg, #1F1F1F 0%, #151515 100%);
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
`
