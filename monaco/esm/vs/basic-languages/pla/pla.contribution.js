// File: monaco/esm/vs/basic-languages/pla/pla.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "pla",
  extensions: [".pla"],
  loader: () => import('./pla.js')
});
