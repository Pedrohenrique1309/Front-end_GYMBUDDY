# 🤖 Integração IA Personal Trainer - GymBuddy

## ✅ Implementação Completa

### 📋 O que foi implementado:

1. **Serviço de IA Personalizado** (`src/Services/iaPersonalTrainer.ts`)
   - Integração com API da Hugging Face
   - Sistema de prompts personalizados
   - Coleta automática de dados do usuário
   - Respostas contextuais baseadas em IMC, peso, altura, objetivos
   - Fallback inteligente para quando API estiver offline

2. **Interface de Chat Atualizada** (`src/Paginas/Social/components/AIChat.tsx`)
   - Renderização de Markdown
   - Sugestões de perguntas dinâmicas
   - Loading state durante processamento
   - Mensagem de boas-vindas personalizada
   - Botões de sugestões rápidas

3. **Personalização Completa**
   - IA usa o nome do usuário
   - Analisa IMC e sugere treinos específicos
   - Calcula calorias baseado no peso
   - Considera nível de experiência
   - Adapta respostas aos objetivos do usuário

## 🚀 Como Configurar

### 1. Obter API Key da Hugging Face

1. Acesse: https://huggingface.co/settings/tokens
2. Crie uma conta gratuita se não tiver
3. Gere um novo token de acesso
4. Copie o token

### 2. Configurar Variável de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_HUGGINGFACE_API_KEY=hf_SeuTokenAqui
VITE_API_BASE_URL=http://localhost:8080
```

### 3. Instalar Dependências

```bash
npm install
```

### 4. Executar o Projeto

```bash
npm run dev
```

## 💬 Como a IA Funciona

### Dados Coletados Automaticamente:
- Nome do usuário
- Peso, altura, idade
- IMC calculado
- Objetivos de treino
- Nível de experiência
- Histórico de treinos
- Preferências e restrições

### Tipos de Respostas:

#### 1. **Treinos Personalizados**
- Baseados no nível (iniciante, intermediário, avançado)
- Adaptados aos objetivos (hipertrofia, emagrecimento, força)
- Considera frequência semanal disponível

#### 2. **Cálculos Nutricionais**
- Calorias diárias baseadas no peso
- Divisão de macronutrientes
- Sugestões para ganho/perda de peso

#### 3. **Suplementação**
- Recomendações baseadas em objetivos
- Prioridade de suplementos essenciais
- Orientações de uso

#### 4. **Motivação**
- Mensagens personalizadas
- Reconhecimento de progresso
- Dicas para manter consistência

## 📊 Exemplos de Uso

### Perguntas que a IA responde bem:

1. "Monte um treino ABC para hipertrofia"
2. "Calcule minhas calorias diárias"
3. "Quais suplementos devo tomar?"
4. "Como ganhar massa muscular?"
5. "Estratégias para emagrecimento"
6. "Dicas para iniciantes na academia"
7. "Como melhorar meu cardio?"
8. "Análise do meu IMC"

### Formatação das Respostas:

A IA formata respostas com:
- **Negrito** para destacar pontos importantes
- Listas organizadas com bullet points
- Títulos e subtítulos
- Cálculos específicos com números do usuário
- Emojis apropriados (sem exagero)

## 🔧 Personalização Adicional

### Para modificar comportamento da IA:

1. **Prompt do Sistema**: Edite `criarPromptSistema()` em `iaPersonalTrainer.ts`
2. **Sugestões**: Modifique `gerarSugestoes()` para diferentes contextos
3. **Fallback**: Ajuste `gerarRespostaFallback()` para respostas offline

### Para adicionar novos dados do usuário:

1. Atualize interface `DadosUsuario` 
2. Modifique `coletarDadosCompletos()`
3. Inclua no prompt do sistema

## ⚠️ Observações Importantes

1. **API Gratuita**: Hugging Face tem limites de requisições
2. **Fallback Inteligente**: Sistema funciona mesmo sem internet
3. **Dados Sensíveis**: Não armazena conversas no servidor
4. **Performance**: Respostas levam 2-5 segundos

## 🎯 Status da Implementação

✅ **Completo:**
- Integração com Hugging Face
- Coleta de dados do usuário
- Sistema de prompts personalizado
- Interface de chat responsiva
- Formatação Markdown
- Sugestões dinâmicas
- Fallback offline

⚡ **Funcionalidades Extras Implementadas:**
- Loading state animado
- Botões de sugestões rápidas
- Mensagem de boas-vindas personalizada
- Cálculos automáticos de IMC e calorias
- Histórico de conversa limitado (economia de memória)

## 📱 Como Usar no App

1. Faça login no GymBuddy
2. Navegue até a página Social
3. O chat IA aparece automaticamente
4. Digite sua pergunta ou use sugestões
5. Receba orientações personalizadas!

---

**Desenvolvido com 💪 para o GymBuddy**
*IA Personal Trainer sempre disponível para seus usuários*
