// File: monaco/esm/vs/basic-languages/lexon/lexon.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "lexon",
  extensions: [".lex"],
  aliases: ["Lexon"],
  loader: () => import('./lexon.js')
});
