// @flow
import { getTagsController, createTagController } from './tags.controller';

export default [
  {
    method: 'GET',
    path: '/tags',
    options: { handler: getTagsController },
  },
  {
    method: 'POST',
    path: '/tags',
    options: { handler: createTagController },
  },
];
