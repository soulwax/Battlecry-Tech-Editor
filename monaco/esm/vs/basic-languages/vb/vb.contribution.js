// File: monaco/esm/vs/basic-languages/vb/vb.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "vb",
  extensions: [".vb"],
  aliases: ["Visual Basic", "vb"],
  loader: () => import('./vb.js')
});
