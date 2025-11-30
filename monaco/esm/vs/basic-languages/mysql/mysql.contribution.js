// File: monaco/esm/vs/basic-languages/mysql/mysql.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "mysql",
  extensions: [],
  aliases: ["MySQL", "mysql"],
  loader: () => import('./mysql.js')
});
