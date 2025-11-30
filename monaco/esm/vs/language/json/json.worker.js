// File: monaco/esm/vs/language/json/json.worker.js

import { initialize } from '../../common/initialize.js';
import { JSONWorker } from './jsonWorker.js';

self.onmessage = () => {
  initialize((ctx, createData) => {
    return new JSONWorker(ctx, createData);
  });
};
