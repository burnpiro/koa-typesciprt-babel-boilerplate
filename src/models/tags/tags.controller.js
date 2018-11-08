// @flow

import Tag from './tags.schema';

const getTagsController = function getTagsController() {
  return Tag.find({}).exec().then((tags) => {
    if (Array.isArray(tags) && tags.length === 0) {
      return { code: 404, message: 'There are no tags defined' };
    }
    if (tags == null) {
      return { code: 404, message: 'There are no tags defined'};
    }
    return { code: 200, data: tags };
  }).catch((err) => {
    console.error(err);
    return { code: 400, message: err };
  });
};

const createTagController = function createTagController(request, response) {
  return 'createTag';
};

export {
  getTagsController,
  createTagController,
};
