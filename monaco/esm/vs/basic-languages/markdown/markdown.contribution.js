// File: monaco/esm/vs/basic-languages/markdown/markdown.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "markdown",
  extensions: [".md", ".markdown", ".mdown", ".mkdn", ".mkd", ".mdwn", ".mdtxt", ".mdtext"],
  aliases: ["Markdown", "markdown"],
  loader: () => import('./markdown.js')
});
