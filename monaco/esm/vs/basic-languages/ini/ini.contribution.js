// File: monaco/esm/vs/basic-languages/ini/ini.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "ini",
  extensions: [".ini", ".properties", ".gitconfig"],
  filenames: ["config", ".gitattributes", ".gitconfig", ".editorconfig"],
  aliases: ["Ini", "ini"],
  loader: () => import('./ini.js')
});
