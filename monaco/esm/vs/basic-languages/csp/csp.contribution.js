// File: monaco/esm/vs/basic-languages/csp/csp.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "csp",
  extensions: [".csp"],
  aliases: ["CSP", "csp"],
  loader: () => import('./csp.js')
});
