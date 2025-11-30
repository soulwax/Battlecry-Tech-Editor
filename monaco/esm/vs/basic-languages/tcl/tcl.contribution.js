// File: monaco/esm/vs/basic-languages/tcl/tcl.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "tcl",
  extensions: [".tcl"],
  aliases: ["tcl", "Tcl", "tcltk", "TclTk", "tcl/tk", "Tcl/Tk"],
  loader: () => import('./tcl.js')
});
