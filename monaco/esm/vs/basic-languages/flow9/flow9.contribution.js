// File: monaco/esm/vs/basic-languages/flow9/flow9.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "flow9",
  extensions: [".flow"],
  aliases: ["Flow9", "Flow", "flow9", "flow"],
  loader: () => import('./flow9.js')
});
