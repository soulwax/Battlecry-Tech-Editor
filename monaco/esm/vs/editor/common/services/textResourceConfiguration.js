// File: monaco/esm/vs/editor/common/services/textResourceConfiguration.js

import { createDecorator } from '../../../platform/instantiation/common/instantiation.js';

const ITextResourceConfigurationService = createDecorator('textResourceConfigurationService');
const ITextResourcePropertiesService = createDecorator('textResourcePropertiesService');

export { ITextResourceConfigurationService, ITextResourcePropertiesService };
