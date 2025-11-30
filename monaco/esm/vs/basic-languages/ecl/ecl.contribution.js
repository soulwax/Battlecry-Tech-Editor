// File: monaco/esm/vs/basic-languages/ecl/ecl.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "ecl",
  extensions: [".ecl"],
  aliases: ["ECL", "Ecl", "ecl"],
  loader: () => import('./ecl.js')
});
