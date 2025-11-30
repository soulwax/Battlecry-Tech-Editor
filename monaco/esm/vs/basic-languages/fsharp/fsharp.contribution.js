// File: monaco/esm/vs/basic-languages/fsharp/fsharp.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "fsharp",
  extensions: [".fs", ".fsi", ".ml", ".mli", ".fsx", ".fsscript"],
  aliases: ["F#", "FSharp", "fsharp"],
  loader: () => import('./fsharp.js')
});
