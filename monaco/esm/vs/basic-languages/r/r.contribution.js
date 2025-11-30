// File: monaco/esm/vs/basic-languages/r/r.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "r",
  extensions: [".r", ".rhistory", ".rmd", ".rprofile", ".rt"],
  aliases: ["R", "r"],
  loader: () => import('./r.js')
});
