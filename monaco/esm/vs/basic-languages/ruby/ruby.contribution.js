// File: monaco/esm/vs/basic-languages/ruby/ruby.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "ruby",
  extensions: [".rb", ".rbx", ".rjs", ".gemspec", ".pp"],
  filenames: ["rakefile", "Gemfile"],
  aliases: ["Ruby", "rb"],
  loader: () => import('./ruby.js')
});
