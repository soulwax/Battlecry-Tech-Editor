// File: monaco/esm/vs/basic-languages/st/st.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "st",
  extensions: [".st", ".iecst", ".iecplc", ".lc3lib", ".TcPOU", ".TcDUT", ".TcGVL", ".TcIO"],
  aliases: ["StructuredText", "scl", "stl"],
  loader: () => import('./st.js')
});
