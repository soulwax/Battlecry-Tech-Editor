// File: monaco/esm/vs/basic-languages/bat/bat.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "bat",
  extensions: [".bat", ".cmd"],
  aliases: ["Batch", "bat"],
  loader: () => import('./bat.js')
});
