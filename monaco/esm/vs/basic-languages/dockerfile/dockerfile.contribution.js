// File: monaco/esm/vs/basic-languages/dockerfile/dockerfile.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "dockerfile",
  extensions: [".dockerfile"],
  filenames: ["Dockerfile"],
  aliases: ["Dockerfile"],
  loader: () => import('./dockerfile.js')
});
