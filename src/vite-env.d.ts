/// <reference types="vite/client" />

// Support vite-imagetools query imports
declare module '*?format=webp&quality=80' {
  const src: string;
  export default src;
}

declare module '*?format=webp&quality=80&w=640;1024;1920&as=srcset' {
  const src: string;
  export default src;
}
