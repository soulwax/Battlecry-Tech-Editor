// File: monaco/esm/vs/basic-languages/msdax/msdax.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "msdax",
  extensions: [".dax", ".msdax"],
  aliases: ["DAX", "MSDAX"],
  loader: () => import('./msdax.js')
});
