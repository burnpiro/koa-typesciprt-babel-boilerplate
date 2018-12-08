// @flow

import mongoose from 'mongoose';
import slug from 'slug';

const { Schema } = mongoose;
const tagSchema = new Schema({
  slug: { type: String, trim: true, unique: true, lowercase: true },
  name: { type: String, required: true, trim: true }
});

tagSchema.pre('save', function preSaveTag(next) {
  if (!this.isModified('name')) {
    return next();
  }

  this.slug = slug(this.name, { lower: true });
  return next();
});

tagSchema.index({ slug: 1 });

export default mongoose.model('Tag', tagSchema);
