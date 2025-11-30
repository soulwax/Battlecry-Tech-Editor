// File: monaco/esm/vs/basic-languages/powerquery/powerquery.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "powerquery",
  extensions: [".pq", ".pqm"],
  aliases: ["PQ", "M", "Power Query", "Power Query M"],
  loader: () => import('./powerquery.js')
});
