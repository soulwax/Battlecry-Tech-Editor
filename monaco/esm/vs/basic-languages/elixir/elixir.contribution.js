// File: monaco/esm/vs/basic-languages/elixir/elixir.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "elixir",
  extensions: [".ex", ".exs"],
  aliases: ["Elixir", "elixir", "ex"],
  loader: () => import('./elixir.js')
});
