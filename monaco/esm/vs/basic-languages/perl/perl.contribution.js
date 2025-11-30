// File: monaco/esm/vs/basic-languages/perl/perl.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "perl",
  extensions: [".pl", ".pm"],
  aliases: ["Perl", "pl"],
  loader: () => import('./perl.js')
});
