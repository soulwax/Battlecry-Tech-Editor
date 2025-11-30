// File: monaco/esm/vs/basic-languages/restructuredtext/restructuredtext.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "restructuredtext",
  extensions: [".rst"],
  aliases: ["reStructuredText", "restructuredtext"],
  loader: () => import('./restructuredtext.js')
});
