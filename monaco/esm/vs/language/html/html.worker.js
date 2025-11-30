// File: monaco/esm/vs/language/html/html.worker.js

import { initialize } from '../../common/initialize.js';
import { HTMLWorker } from './htmlWorker.js';

self.onmessage = () => {
  initialize((ctx, createData) => {
    return new HTMLWorker(ctx, createData);
  });
};
