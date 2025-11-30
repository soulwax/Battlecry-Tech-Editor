// File: monaco/esm/vs/basic-languages/mips/mips.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "mips",
  extensions: [".s"],
  aliases: ["MIPS", "MIPS-V"],
  mimetypes: ["text/x-mips", "text/mips", "text/plaintext"],
  loader: () => import('./mips.js')
});
