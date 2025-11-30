// File: monaco/esm/vs/basic-languages/cypher/cypher.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "cypher",
  extensions: [".cypher", ".cyp"],
  aliases: ["Cypher", "OpenCypher"],
  loader: () => import('./cypher.js')
});
