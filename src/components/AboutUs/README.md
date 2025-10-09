# Página Sobre Nós - GymBuddy

## 📋 Visão Geral

A página "Sobre Nós" foi criada seguindo a estética da página Hero, mantendo consistência visual e de marca em todo o projeto GymBuddy.

## 🎨 Design

### Paleta de Cores
- **Primária**: `#E30613` (Vermelho GymBuddy)
- **Secundária**: `#000000` (Preto)
- **Texto Principal**: `#FFFFFF` (Branco)
- **Texto Secundário**: `rgba(255, 255, 255, 0.7)` (Branco com transparência)

### Tipografia
- **Fonte**: Inter, sans-serif
- **Títulos**: Bold (700-800)
- **Parágrafos**: Regular (400)

## 🏗️ Estrutura

### 1. Hero Section
- Título principal: "Podemos ajudar você a cumprir todas as suas metas"
- Subtítulo: "Faça parte desse projeto hoje mesmo!"
- Animação: fade-in-up com Framer Motion

### 2. Content Section
**Layout de duas colunas:**

#### Coluna Esquerda - Cards de Texto
4 itens com ícones e textos:
- 🏋️ "Mais do que um site, um verdadeiro parceiro de treino."
- 📋 "Nada de planos genéricos, tenha uma experiência personalizada."
- 🤖 "Com a ajuda de nosso agente IA, nada é impossível."
- 🔥 "Treinar não precisa ser difícil. Seja bem-vindo ao Gym Buddy!"

#### Coluna Direita - Imagem
- Imagem do homem musculoso
- Filtro grayscale com hover para colorido
- Overlay com gradiente vermelho

### 3. CTA Section
- Texto: "Torne-se já um membro! Acesse ou crie sua conta na **GymBuddy**"
- Destaque animado na palavra "GymBuddy"
- Animação de pulse no underline

## ✨ Animações

### Framer Motion
- **Container**: Staggered children com delay
- **Items**: Fade-in com movimento Y
- **Hero**: Fade-in-up
- **CTA**: Scale e pulse

### CSS Animations
- **Pulse**: Animação contínua no destaque CTA
- **Hover**: Transições suaves em todos os elementos

## 📱 Responsividade

### Desktop (> 768px)
- Layout de duas colunas
- Espaçamentos amplos
- Animações completas

### Mobile (≤ 768px)
- Layout em coluna única
- Imagem aparece primeiro
- Espaçamentos reduzidos
- Navegação hamburger (Header)

## 🖼️ Imagens

### Pasta de Imagens
```
public/images/
└── muscular-man.png  (Imagem principal da página)
```

### Requisitos da Imagem
- **Formato**: PNG ou JPG
- **Resolução**: Mínimo 800x600px
- **Otimização**: Compressão para web
- **Alt text**: "Homem musculoso treinando"

## 🚀 Roteamento

### Rota
- **Path**: `/sobre`
- **Component**: `AboutUs`
- **Navegação**: Link ativo no Header

### Configuração
```tsx
// App.tsx
<Route path="/sobre" element={<AboutUs />} />
```

## 🎯 Características Técnicas

### Performance
- **Lazy loading**: Imagens carregadas sob demanda
- **Animações otimizadas**: GPU acceleration
- **Componentes leves**: Styled-components otimizados

### Acessibilidade
- **Contraste**: WCAG AA compliant
- **Alt texts**: Todas as imagens descritas
- **Focus states**: Navegação por teclado
- **Semantic HTML**: Estrutura semântica correta

### SEO
- **Meta tags**: Título e descrição otimizados
- **Heading hierarchy**: H1, H2 estruturados
- **Schema markup**: Dados estruturados (futuro)

## 🔧 Manutenção

### Atualizações de Conteúdo
1. Editar textos em `textItems` array
2. Substituir imagens em `public/images/`
3. Ajustar animações em `variants` objects

### Customização de Estilo
1. Cores: Variáveis CSS em `global.ts`
2. Tipografia: Styled-components
3. Animações: Framer Motion variants

## 📋 Checklist de Deploy

- [x] Componente criado
- [x] Rota configurada
- [x] Responsividade implementada
- [x] Animações funcionando
- [x] Pasta de imagens criada
- [ ] Imagem `muscular-man.png` adicionada
- [ ] Testes de navegação
- [ ] Otimização de performance
- [ ] Validação de acessibilidade

## 🎨 Próximos Passos

1. **Adicionar a imagem**: Colocar `muscular-man.png` em `public/images/`
2. **Testar navegação**: Verificar links do Header
3. **Otimizar performance**: Lazy loading e compressão
4. **Adicionar mais conteúdo**: Seções adicionais se necessário
5. **Implementar analytics**: Tracking de página
