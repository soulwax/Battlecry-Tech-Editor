// File: monaco/esm/vs/basic-languages/wgsl/wgsl.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "wgsl",
  extensions: [".wgsl"],
  aliases: ["WebGPU Shading Language", "WGSL", "wgsl"],
  loader: () => import('./wgsl.js')
});
