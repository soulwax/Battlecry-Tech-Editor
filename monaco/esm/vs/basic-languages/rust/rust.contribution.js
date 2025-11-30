// File: monaco/esm/vs/basic-languages/rust/rust.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "rust",
  extensions: [".rs", ".rlib"],
  aliases: ["Rust", "rust"],
  loader: () => import('./rust.js')
});
