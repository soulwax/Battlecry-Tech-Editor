// File: monaco/esm/vs/basic-languages/sb/sb.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "sb",
  extensions: [".sb"],
  aliases: ["Small Basic", "sb"],
  loader: () => import('./sb.js')
});
