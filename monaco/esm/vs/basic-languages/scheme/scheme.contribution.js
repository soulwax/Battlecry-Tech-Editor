// File: monaco/esm/vs/basic-languages/scheme/scheme.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "scheme",
  extensions: [".scm", ".ss", ".sch", ".rkt"],
  aliases: ["scheme", "Scheme"],
  loader: () => import('./scheme.js')
});
