// File: monaco/esm/vs/basic-languages/coffee/coffee.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "coffeescript",
  extensions: [".coffee"],
  aliases: ["CoffeeScript", "coffeescript", "coffee"],
  mimetypes: ["text/x-coffeescript", "text/coffeescript"],
  loader: () => import('./coffee.js')
});
