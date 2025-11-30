// File: monaco/esm/vs/basic-languages/kotlin/kotlin.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "kotlin",
  extensions: [".kt", ".kts"],
  aliases: ["Kotlin", "kotlin"],
  mimetypes: ["text/x-kotlin-source", "text/x-kotlin"],
  loader: () => import('./kotlin.js')
});
