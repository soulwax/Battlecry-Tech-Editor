// File: monaco/esm/vs/basic-languages/m3/m3.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "m3",
  extensions: [".m3", ".i3", ".mg", ".ig"],
  aliases: ["Modula-3", "Modula3", "modula3", "m3"],
  loader: () => import('./m3.js')
});
