// File: monaco/esm/vs/basic-languages/objective-c/objective-c.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "objective-c",
  extensions: [".m"],
  aliases: ["Objective-C"],
  loader: () => import('./objective-c.js')
});
