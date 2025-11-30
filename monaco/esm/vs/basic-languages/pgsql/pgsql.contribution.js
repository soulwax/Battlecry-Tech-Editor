// File: monaco/esm/vs/basic-languages/pgsql/pgsql.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "pgsql",
  extensions: [],
  aliases: ["PostgreSQL", "postgres", "pg", "postgre"],
  loader: () => import('./pgsql.js')
});
