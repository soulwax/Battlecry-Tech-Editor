// File: monaco/esm/vs/basic-languages/sql/sql.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "sql",
  extensions: [".sql"],
  aliases: ["SQL"],
  loader: () => import('./sql.js')
});
