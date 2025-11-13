import { createGlobalStyle } from 'styled-components'

export const StylesGlobal = createGlobalStyle`
  @font-face {
    font-family: 'GetVoIP Grotesque';
    src: url('/GetVoIP Grotesque.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

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
    --font-title: 'GetVoIP Grotesque', 'Poppins', sans-serif;
    --font-body: 'Poppins', sans-serif;
  }

  /* Tema claro - Material Design 3 */
  [data-theme="light"] {
    --md-sys-color-primary: rgb(0 0 0);
    --md-sys-color-surface-tint: rgb(94 94 94);
    --md-sys-color-on-primary: rgb(255 255 255);
    --md-sys-color-primary-container: rgb(27 27 27);
    --md-sys-color-on-primary-container: rgb(132 132 132);
    --md-sys-color-secondary: rgb(152 0 15);
    --md-sys-color-on-secondary: rgb(255 255 255);
    --md-sys-color-secondary-container: rgb(197 0 23);
    --md-sys-color-on-secondary-container: rgb(255 210 206);
    --md-sys-color-tertiary: rgb(121 0 9);
    --md-sys-color-on-tertiary: rgb(255 255 255);
    --md-sys-color-tertiary-container: rgb(165 0 17);
    --md-sys-color-on-tertiary-container: rgb(255 174 166);
    --md-sys-color-error: rgb(44 0 1);
    --md-sys-color-on-error: rgb(255 255 255);
    --md-sys-color-error-container: rgb(84 0 3);
    --md-sys-color-on-error-container: rgb(223 104 92);
    --md-sys-color-background: rgb(249 249 249);
    --md-sys-color-on-background: rgb(27 27 27);
    --md-sys-color-surface: rgb(252 248 248);
    --md-sys-color-on-surface: rgb(28 27 27);
    --md-sys-color-surface-variant: rgb(235 224 225);
    --md-sys-color-on-surface-variant: rgb(76 69 70);
    --md-sys-color-outline: rgb(126 117 118);
    --md-sys-color-outline-variant: rgb(207 196 197);
    --md-sys-color-shadow: rgb(0 0 0);
    --md-sys-color-scrim: rgb(0 0 0);
    --md-sys-color-inverse-surface: rgb(49 48 48);
    --md-sys-color-inverse-on-surface: rgb(244 240 239);
    --md-sys-color-inverse-primary: rgb(198 198 198);
    --md-sys-color-primary-fixed: rgb(226 226 226);
    --md-sys-color-on-primary-fixed: rgb(27 27 27);
    --md-sys-color-primary-fixed-dim: rgb(198 198 198);
    --md-sys-color-on-primary-fixed-variant: rgb(71 71 71);
    --md-sys-color-secondary-fixed: rgb(255 218 214);
    --md-sys-color-on-secondary-fixed: rgb(65 0 3);
    --md-sys-color-secondary-fixed-dim: rgb(255 180 172);
    --md-sys-color-on-secondary-fixed-variant: rgb(147 0 14);
    --md-sys-color-tertiary-fixed: rgb(255 218 214);
    --md-sys-color-on-tertiary-fixed: rgb(65 0 3);
    --md-sys-color-tertiary-fixed-dim: rgb(255 180 172);
    --md-sys-color-on-tertiary-fixed-variant: rgb(147 0 14);
    --md-sys-color-surface-dim: rgb(221 217 217);
    --md-sys-color-surface-bright: rgb(252 248 248);
    --md-sys-color-surface-container-lowest: rgb(255 255 255);
    --md-sys-color-surface-container-low: rgb(247 243 242);
    --md-sys-color-surface-container: rgb(241 237 236);
    --md-sys-color-surface-container-high: rgb(235 231 231);
    --md-sys-color-surface-container-highest: rgb(229 226 225);
    
    /* Variáveis de compatibilidade para o app */
    --bg-primary: var(--md-sys-color-surface);
    --bg-secondary: var(--md-sys-color-surface-container-low);
    --text-primary: var(--md-sys-color-on-surface);
    --text-secondary: var(--md-sys-color-on-surface-variant);
    --border-color: var(--md-sys-color-outline-variant);
    --shadow-color: rgba(0, 0, 0, 0.1);
    
    /* Header específico para modo claro */
    --header-bg-primary: rgba(252, 248, 248, 0.9);
    --header-bg-gradient: linear-gradient(180deg, rgba(252, 248, 248, 0.95) 0%, transparent 100%);
    --header-border-gradient: linear-gradient(90deg, rgba(227, 6, 19, 0.8) 0%, rgba(152, 0, 15, 0.6) 50%, rgba(227, 6, 19, 0.8) 100%);
  }

  /* Tema escuro (padrão) */
  [data-theme="dark"] {
    --md-sys-color-background: #0A0A0A;
    --md-sys-color-surface: #1A1A1A;
    --md-sys-color-on-surface: #FFFFFF;
    --md-sys-color-on-surface-variant: #B8B8B8;
    --md-sys-color-outline-variant: #333333;
    --md-sys-color-shadow: rgba(0, 0, 0, 0.3);
    
    /* Variáveis de compatibilidade para o app */
    --bg-primary: var(--md-sys-color-background);
    --bg-secondary: var(--md-sys-color-surface);
    --text-primary: var(--md-sys-color-on-surface);
    --text-secondary: var(--md-sys-color-on-surface-variant);
    --border-color: var(--md-sys-color-outline-variant);
    --shadow-color: var(--md-sys-color-shadow);
    
    /* Header específico para modo escuro */
    --header-bg-primary: rgba(10, 10, 10, 0.7);
    --header-bg-gradient: linear-gradient(180deg, rgba(10,10,10,0.6) 0%, transparent 100%);
    --header-border-gradient: linear-gradient(90deg, rgba(227, 6, 19, 0.6) 0%, rgba(152, 0, 15, 0.4) 50%, rgba(227, 6, 19, 0.6) 100%);
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--bg-primary, var(--dark-bg));
    color: var(--text-primary, var(--white));
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
  
  /* Títulos usam a fonte GetVoIP */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-title);
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

  /* Suporte para transições suaves entre temas */
  *, *::before, *::after {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }
`
