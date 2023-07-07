interface ImportMetaEnv {
  readonly VITE_REDUX_PERSIST_KEY: string;
  readonly VITE_REDUX_PERSIST_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {}
}

declare module "*.jpg";
declare module "*.png";
