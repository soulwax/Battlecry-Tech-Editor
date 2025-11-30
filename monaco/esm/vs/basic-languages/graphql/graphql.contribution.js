// File: monaco/esm/vs/basic-languages/graphql/graphql.contribution.js

import { registerLanguage } from '../_.contribution.js';

registerLanguage({
  id: "graphql",
  extensions: [".graphql", ".gql"],
  aliases: ["GraphQL", "graphql", "gql"],
  mimetypes: ["application/graphql"],
  loader: () => import('./graphql.js')
});
