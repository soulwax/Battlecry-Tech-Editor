// File: monaco/esm/vs/basic-languages/liquid/liquid.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "liquid",
  extensions: [".liquid", ".html.liquid"],
  aliases: ["Liquid", "liquid"],
  mimetypes: ["application/liquid"],
  loader: () => import('./liquid.js')
});
