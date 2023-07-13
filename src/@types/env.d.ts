/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly TURBO_CLIENT_PORT: string;
  readonly TURBO_NODE_ENV: string;
  readonly TURBO_API_URL: string;
  readonly TURBO_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
