// File: monaco/esm/vs/basic-languages/qsharp/qsharp.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "qsharp",
  extensions: [".qs"],
  aliases: ["Q#", "qsharp"],
  loader: () => import('./qsharp.js')
});
