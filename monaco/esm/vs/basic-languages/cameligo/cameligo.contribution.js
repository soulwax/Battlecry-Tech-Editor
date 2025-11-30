// File: monaco/esm/vs/basic-languages/cameligo/cameligo.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "cameligo",
  extensions: [".mligo"],
  aliases: ["Cameligo"],
  loader: () => import('./cameligo.js')
});
