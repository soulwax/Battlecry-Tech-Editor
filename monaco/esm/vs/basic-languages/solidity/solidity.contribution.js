// File: monaco/esm/vs/basic-languages/solidity/solidity.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "sol",
  extensions: [".sol"],
  aliases: ["sol", "solidity", "Solidity"],
  loader: () => import('./solidity.js')
});
