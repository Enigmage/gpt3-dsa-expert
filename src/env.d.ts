/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly OPENAI_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
