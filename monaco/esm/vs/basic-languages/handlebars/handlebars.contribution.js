// File: monaco/esm/vs/basic-languages/handlebars/handlebars.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "handlebars",
  extensions: [".handlebars", ".hbs"],
  aliases: ["Handlebars", "handlebars", "hbs"],
  mimetypes: ["text/x-handlebars-template"],
  loader: () => import('./handlebars.js')
});
