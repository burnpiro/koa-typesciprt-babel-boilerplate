// @flow

import mongoose from 'mongoose';
import slug from 'slug';

const { Schema } = mongoose;
const tagSchema = new Schema({
  _id: { type: String, trim: true, unique: true, lowercase: true },
  name: { type: String, required: true, trim: true },
});

tagSchema.pre('save', function preSaveTag(next) {
  if (!this.isModified('name')) {
    return next();
  }

  this._id = slug(this.name, { lower: true });
  next();
});

export default mongoose.model('Tag', tagSchema);
