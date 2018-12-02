const babel = require('@babel/register')({});
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const { MongoClient, ObjectId } = require('mongodb');
const paths = require('../config/paths');
const { collectionNames } = require('../src/constants/db');

const client = MongoClient(paths.mongoDBURL, { useNewUrlParser: true });
console.log(process.env.DB_NAME, 'name', paths.mongoDBURL);

module.exports.up = async next => {
  try {
    await client.connect();

    const db = client.db(process.env.DB_NAME);
    const Tags = db.collection(collectionNames.tags).initializeOrderedBulkOp();
    const Categories = db.collection(collectionNames.categories).initializeOrderedBulkOp();
    const Posts = db.collection(collectionNames.posts).initializeOrderedBulkOp();

    console.log('aaaa');
    Tags.find({ slug: { $exists: false } }).update({
      $set: {
        slug: '$_id'
      }
    });
    Tags.find({
      $where: function() {
        return this.slug == this._id;
      }
    }).update({
      $set: {
        _id: ObjectId()
      }
    });
    console.log('aaaa');
    Categories.find({ slug: { $exists: false } }).update({
      $set: {
        slug: '$_id'
      }
    });
    Categories.find({
      $where: function() {
        return this.slug == this._id;
      }
    }).update({
      $set: {
        _id: ObjectId()
      }
    });
    console.log('aaaa');
    Posts.find({ slug: { $exists: false } }).update({
      $set: {
        slug: '$_id'
      }
    });
    Posts.find({
      $where: function() {
        return this.slug == this._id;
      }
    }).update({
      $set: {
        _id: ObjectId()
      }
    });

    const tagsUpdated = await Tags.execute();
    const categoriesUpdated = await Categories.execute();
    const postsUpdated = await Posts.execute();

    console.log('Tags Updated:');
    console.log(tagsUpdated);
    console.log('Categories Updated:');
    console.log(categoriesUpdated);
    console.log('Posts Updated:');
    console.log(postsUpdated);

    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
  client.close();
};

module.exports.down = next => {
  next();
};
