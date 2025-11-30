// File: monaco/esm/vs/basic-languages/mdx/mdx.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "mdx",
  extensions: [".mdx"],
  aliases: ["MDX", "mdx"],
  loader: () => import('./mdx.js')
});
