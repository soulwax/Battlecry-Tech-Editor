// File: monaco/esm/vs/basic-languages/java/java.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "java",
  extensions: [".java", ".jav"],
  aliases: ["Java", "java"],
  mimetypes: ["text/x-java-source", "text/x-java"],
  loader: () => import('./java.js')
});
