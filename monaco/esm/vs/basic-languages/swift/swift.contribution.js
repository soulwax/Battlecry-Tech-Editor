// File: monaco/esm/vs/basic-languages/swift/swift.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "swift",
  aliases: ["Swift", "swift"],
  extensions: [".swift"],
  mimetypes: ["text/swift"],
  loader: () => import('./swift.js')
});
