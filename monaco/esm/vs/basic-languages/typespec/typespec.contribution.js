// File: monaco/esm/vs/basic-languages/typespec/typespec.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "typespec",
  extensions: [".tsp"],
  aliases: ["TypeSpec"],
  loader: () => import('./typespec.js')
});
