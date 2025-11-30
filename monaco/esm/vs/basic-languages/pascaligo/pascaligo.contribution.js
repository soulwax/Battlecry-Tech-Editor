// File: monaco/esm/vs/basic-languages/pascaligo/pascaligo.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "pascaligo",
  extensions: [".ligo"],
  aliases: ["Pascaligo", "ligo"],
  loader: () => import('./pascaligo.js')
});
