// File: monaco/esm/vs/basic-languages/scss/scss.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "scss",
  extensions: [".scss"],
  aliases: ["Sass", "sass", "scss"],
  mimetypes: ["text/x-scss", "text/scss"],
  loader: () => import('./scss.js')
});
