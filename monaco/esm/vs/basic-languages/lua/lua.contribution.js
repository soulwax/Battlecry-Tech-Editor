// File: monaco/esm/vs/basic-languages/lua/lua.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "lua",
  extensions: [".lua"],
  aliases: ["Lua", "lua"],
  loader: () => import('./lua.js')
});
