/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_MODE: string;
  readonly APP_DOCUMENT_TITLE: string;
  readonly APP_HOST_PORT: number;
  readonly APP_HOST_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
