// File: monaco/esm/vs/basic-languages/go/go.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "go",
  extensions: [".go"],
  aliases: ["Go"],
  loader: () => import('./go.js')
});
