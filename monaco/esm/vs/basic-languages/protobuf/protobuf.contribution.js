// File: monaco/esm/vs/basic-languages/protobuf/protobuf.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "proto",
  extensions: [".proto"],
  aliases: ["protobuf", "Protocol Buffers"],
  loader: () => import('./protobuf.js')
});
