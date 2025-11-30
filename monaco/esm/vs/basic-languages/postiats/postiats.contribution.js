// File: monaco/esm/vs/basic-languages/postiats/postiats.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "postiats",
  extensions: [".dats", ".sats", ".hats"],
  aliases: ["ATS", "ATS/Postiats"],
  loader: () => import('./postiats.js')
});
