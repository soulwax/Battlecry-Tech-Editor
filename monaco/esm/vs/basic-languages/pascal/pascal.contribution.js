// File: monaco/esm/vs/basic-languages/pascal/pascal.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "pascal",
  extensions: [".pas", ".p", ".pp"],
  aliases: ["Pascal", "pas"],
  mimetypes: ["text/x-pascal-source", "text/x-pascal"],
  loader: () => import('./pascal.js')
});
