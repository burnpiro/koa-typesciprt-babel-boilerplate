// @flow

import mongoose from 'mongoose';
import slug from 'slug';

const { Schema } = mongoose;
const categorySchema = new Schema({
  _id: { type: String, trim: true, unique: true, lowercase: true },
  parent: { type: String, trim: true },
  icon: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

categorySchema.pre('save', function preSave(next) {
  if (!this.isModified('name')) {
    return next();
  }

  this._id = slug(this.name, { lower: true });
  next();
});

export default mongoose.model('Category', categorySchema);
