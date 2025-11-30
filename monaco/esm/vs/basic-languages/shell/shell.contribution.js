// File: monaco/esm/vs/basic-languages/shell/shell.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "shell",
  extensions: [".sh", ".bash"],
  aliases: ["Shell", "sh"],
  loader: () => import('./shell.js')
});
