export const BRAND = {
  name: 'GYM BUDDY',
  // Coloque sua logo em /public/logo.png (ou ajuste o caminho abaixo)
  logoSrc: '/icon-hand-dumbbell-red.png',
  // Imagem do herói: coloque em /public e ajuste aqui se necessário
  heroSrc: '/hero-image.png',
  // Cards informativos com dados ficticios
  floatingCards: [
    {
      id: 'progress',
      position: 'top-left',
      rotate: -8,
      zIndex: 0,
      stat: '87%',
      title: 'Progresso Mensal',
      description: 'usuários atingem suas metas de treino com nosso sistema de acompanhamento personalizado.',
      category: 'Resultados'
    },
    {
      id: 'users',
      position: 'top-right',
      rotate: 12,
      zIndex: 0,
      stat: '15k+',
      title: 'Usuários Ativos',
      description: 'pessoas já transformaram seus corpos usando nossa plataforma de treinos inteligentes.',
      category: 'Comunidade'
    },
    {
      id: 'workouts',
      position: 'bottom-left',
      rotate: 6,
      zIndex: 0,
      stat: '200+',
      title: 'Exercícios Disponíveis',
      description: 'diferentes modalidades de treino adaptadas ao seu nível e objetivos pessoais.',
      category: 'Variedade'
    },
    {
      id: 'ai',
      position: 'bottom-right',
      rotate: -15,
      zIndex: 0,
      stat: '24/7',
      title: 'IA Personal Trainer',
      description: 'assistente inteligente disponível para ajustar seus treinos em tempo real.',
      category: 'Tecnologia'
    },
  ],
} as const;

export type FloatingCardItem = (typeof BRAND)['floatingCards'][number];
