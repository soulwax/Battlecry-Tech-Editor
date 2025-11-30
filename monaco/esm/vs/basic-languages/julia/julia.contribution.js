// File: monaco/esm/vs/basic-languages/julia/julia.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "julia",
  extensions: [".jl"],
  aliases: ["julia", "Julia"],
  loader: () => import('./julia.js')
});
