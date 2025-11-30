// File: monaco/esm/vs/basic-languages/pug/pug.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "pug",
  extensions: [".jade", ".pug"],
  aliases: ["Pug", "Jade", "jade"],
  loader: () => import('./pug.js')
});
