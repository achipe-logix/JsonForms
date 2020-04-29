import { rankWith, optionIs } from '@jsonforms/core';

export default rankWith(
  3,
  optionIs('format', 'radio'),
);
