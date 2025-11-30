// File: monaco/esm/vs/basic-languages/yaml/yaml.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "yaml",
  extensions: [".yaml", ".yml"],
  aliases: ["YAML", "yaml", "YML", "yml"],
  mimetypes: ["application/x-yaml", "text/x-yaml"],
  loader: () => import('./yaml.js')
});
