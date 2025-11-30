// File: monaco/esm/vs/basic-languages/bicep/bicep.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "bicep",
  extensions: [".bicep"],
  aliases: ["Bicep"],
  loader: () => import('./bicep.js')
});
