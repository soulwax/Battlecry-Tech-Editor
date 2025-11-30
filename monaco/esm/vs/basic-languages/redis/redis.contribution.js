// File: monaco/esm/vs/basic-languages/redis/redis.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "redis",
  extensions: [".redis"],
  aliases: ["redis"],
  loader: () => import('./redis.js')
});
