// File: monaco/esm/vs/basic-languages/redshift/redshift.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "redshift",
  extensions: [],
  aliases: ["Redshift", "redshift"],
  loader: () => import('./redshift.js')
});
