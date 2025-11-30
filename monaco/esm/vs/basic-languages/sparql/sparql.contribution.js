// File: monaco/esm/vs/basic-languages/sparql/sparql.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "sparql",
  extensions: [".rq"],
  aliases: ["sparql", "SPARQL"],
  loader: () => import('./sparql.js')
});
