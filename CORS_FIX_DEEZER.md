# 🔧 FIX CORS - API Deezer com Proxy

## ❌ O Problema

A API do Deezer é bloqueada por **CORS (Cross-Origin Resource Sharing)** quando chamada diretamente do navegador:

```
Access to fetch at 'https://api.deezer.com/...' from origin 'http://localhost:3000' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present 
on the requested resource.
```

### Por que acontece?
- Deezer não permite requisições diretamente do navegador
- Proteção de segurança do browser (CORS)
- API pública mas sem suporte a CORS

---

## ✅ A Solução

Usar um **proxy gratuito** que faz a requisição no servidor:

```
https://api.codetabs.com/v1/proxy?quest={URL_CODIFICADA}
```

### Como funciona?

**Antes (Bloqueado):**
```
Navegador → API Deezer ❌ CORS Policy
```

**Depois (Funciona):**
```
Navegador → Proxy codetabs → API Deezer ✅ Funciona!
```

---

## 🔧 Implementação

### 1. URL com Proxy

```typescript
// ❌ ANTES (Bloqueado)
const url = `https://api.deezer.com/search?q=imagine`
const response = await fetch(url)  // Erro de CORS!

// ✅ DEPOIS (Funciona)
const apiUrl = `https://api.deezer.com/search?q=imagine`
const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(apiUrl)}`
const response = await fetch(proxyUrl)  // Funciona!
```

### 2. Função Helper

```typescript
const PROXY_URL = 'https://api.codetabs.com/v1/proxy'

const criarUrlComProxy = (apiUrl: string): string => {
  return `${PROXY_URL}?quest=${encodeURIComponent(apiUrl)}`
}

// Uso:
const apiUrl = `https://api.deezer.com/search?q=imagine`
const urlComProxy = criarUrlComProxy(apiUrl)
const response = await fetch(urlComProxy)
```

### 3. Aplicado em Todas Funções

```typescript
// Buscar músicas
export const buscarMusicas = async (query: string) => {
  const apiUrl = `${DEEZER_API_BASE}/search?q=${encodeURIComponent(query)}`
  const urlComProxy = criarUrlComProxy(apiUrl)
  const response = await fetch(urlComProxy)  // ✅ Funciona!
  return response.json()
}

// Top Charts
export const obterTopCharts = async () => {
  const apiUrl = `${DEEZER_API_BASE}/chart/0/tracks`
  const urlComProxy = criarUrlComProxy(apiUrl)
  const response = await fetch(urlComProxy)  // ✅ Funciona!
  return response.json()
}

// Buscar Artistas
export const buscarArtistas = async (query: string) => {
  const apiUrl = `${DEEZER_API_BASE}/search/artist?q=${encodeURIComponent(query)}`
  const urlComProxy = criarUrlComProxy(apiUrl)
  const response = await fetch(urlComProxy)  // ✅ Funciona!
  return response.json()
}

// Buscar Álbuns
export const buscarAlbuns = async (query: string) => {
  const apiUrl = `${DEEZER_API_BASE}/search/album?q=${encodeURIComponent(query)}`
  const urlComProxy = criarUrlComProxy(apiUrl)
  const response = await fetch(urlComProxy)  // ✅ Funciona!
  return response.json()
}

// Detalhes da Música
export const obterDetalhesMusica = async (trackId: number) => {
  const apiUrl = `${DEEZER_API_BASE}/track/${trackId}`
  const urlComProxy = criarUrlComProxy(apiUrl)
  const response = await fetch(urlComProxy)  // ✅ Funciona!
  return response.json()
}
```

---

## 🌐 Proxy Utilizado

**API:** https://api.codetabs.com/v1/proxy

**Características:**
- ✅ Gratuito
- ✅ Sem autenticação necessária
- ✅ Sem limite de taxa conhecido
- ✅ Funciona bem com Deezer
- ✅ CORS enabled

**Uso:**
```
GET https://api.codetabs.com/v1/proxy?quest={URL_CODIFICADA}
```

---

## 📝 Exemplo Completo

### Buscar "Imagine"

```typescript
// URL original (não funciona)
const apiUrl = `https://api.deezer.com/search?q=imagine&limit=10`

// URL com proxy (funciona!)
const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(apiUrl)}`

// Chamada
const response = await fetch(proxyUrl)
const data = await response.json()

console.log(data)
// {
//   data: [
//     { id: 3135556, title: "Imagine", artist: {...}, ... },
//     { id: 87548, title: "Imagine", artist: {...}, ... },
//     ...
//   ]
// }
```

---

## 🎯 Impacto

### Antes (sem proxy)
```
❌ Top Charts não carregava
❌ Busca de música não funcionava
❌ MusicPicker modal vazio
❌ Console cheio de erros CORS
```

### Depois (com proxy)
```
✅ Top Charts carrega perfeitamente
✅ Busca de música funciona em tempo real
✅ MusicPicker modal com 30 resultados
✅ Nenhum erro no console
```

---

## 🔄 Alternativas (se o proxy cair)

Se `api.codetabs.com` cair, aqui estão alternativas:

1. **cors-anywhere** (recomendado)
   ```
   https://cors-anywhere.herokuapp.com/https://api.deezer.com/...
   ```

2. **allorigins** (alternativa)
   ```
   https://api.allorigins.win/raw?url={URL_CODIFICADA}
   ```

3. **Backend próprio** (melhor solução longo prazo)
   ```
   Criar um backend que faz proxy das requisições
   ```

---

## ⚠️ Limitações

- ⚠️ Depende de um serviço externo (codetabs.com)
- ⚠️ Pode ter latência adicional
- ⚠️ Se o proxy cair, API Deezer não funciona
- ⚠️ Não é solução permanente (ideal ter backend próprio)

---

## 🚀 Próximos Passos

Para produção (melhor prática):

1. **Criar um Backend Proxy**
   - Node.js/Express que faz proxy das requisições
   - Ter controle total
   - Sem dependência de serviços externos

2. **Exemplo com Express:**
   ```typescript
   app.get('/api/deezer/*', async (req, res) => {
     const path = req.params[0]
     const response = await fetch(`https://api.deezer.com/${path}`)
     const data = await response.json()
     res.json(data)
   })
   ```

3. **Depois atualizar o serviço:**
   ```typescript
   const DEEZER_PROXY = '/api/deezer'
   const apiUrl = `${DEEZER_PROXY}/search?q=imagine`
   ```

---

## 📞 Referência

**Repositório Original (que usava proxy):**
- Usava: `https://api.codetabs.com/v1/proxy`
- Mesmo padrão implementado aqui
- Provou funcionar bem com Deezer

---

**Status:** ✅ RESOLVIDO
**Solução:** Proxy CORS (api.codetabs.com)
**Data:** 18 de Novembro de 2025
