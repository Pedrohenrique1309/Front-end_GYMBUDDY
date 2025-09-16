export const BRAND = {
  name: 'GYM BUDDY',
  // Coloque sua logo em /public/logo.png (ou ajuste o caminho abaixo)
  logoSrc: '/icon-hand-dumbbell-red.png',
  // Imagem do herói: coloque em /public e ajuste aqui se necessário
  heroSrc: '/muscle-man.png',
  // Títulos dos cards (ajuste conforme o protótipo)
  floatingCards: [
    { text: 'INTELIGÊNCIA ARTIFICIAL', position: 'top-left', rotate: -10 },
    { text: 'SEU PARCEIRO DE ACADEMIA', position: 'bottom-left', rotate: 10 },
    { text: 'GRATUITO', position: 'top-right', rotate: 10 },
    { text: 'SEU OBJETIVO VEM EM PRIMEIRO LUGAR', position: 'bottom-right', rotate: -10 },
  ],
} as const;

export type FloatingCardItem = (typeof BRAND)['floatingCards'][number];
