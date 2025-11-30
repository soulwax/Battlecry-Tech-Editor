// File: monaco/esm/vs/basic-languages/javascript/javascript.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "javascript",
  extensions: [".js", ".es6", ".jsx", ".mjs", ".cjs"],
  firstLine: "^#!.*\\bnode",
  filenames: ["jakefile"],
  aliases: ["JavaScript", "javascript", "js"],
  mimetypes: ["text/javascript"],
  loader: () => import('./javascript.js')
});
