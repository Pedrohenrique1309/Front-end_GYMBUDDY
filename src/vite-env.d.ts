/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AGENT_API_URL: string
  readonly VITE_AGENT_API_KEY: string
  readonly VITE_APP_TITLE: string
  // adicione outras variáveis de ambiente conforme necessário
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
