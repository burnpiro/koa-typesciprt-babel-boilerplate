const babel = require('@babel/register')({});
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const { MongoClient, ObjectId } = require('mongodb');
const paths = require('../config/paths');
const { collectionNames } = require('../src/constants/db');

const client = MongoClient(paths.mongoDBURL, { useNewUrlParser: true });

module.exports.up = async next => {
  try {
    await client.connect();

    const db = client.db(process.env.DB_NAME);
    const Tags = db.collection(collectionNames.tags);
    const Categories = db.collection(collectionNames.categories);
    const Posts = db.collection(collectionNames.posts);

    let tagsFound = 0;
    let tagsDeleted = 0;
    let tagsInserted = 0;
    const tagsCursor = Tags.find({ slug: { $exists: false } });

    while (await tagsCursor.hasNext()) {
      tagsFound += 1;
      const tag = await tagsCursor.next();

      const deletedTag = await Tags.deleteOne({ _id: tag._id });
      const insertedTag = await Tags.insertOne({
        _id: ObjectId(),
        slug: tag._id,
        name: tag.name
      });
      if (deletedTag.deletedCount > 0) {
        tagsDeleted += deletedTag.deletedCount;
      }
      if (insertedTag.insertedCount > 0) {
        tagsInserted += insertedTag.insertedCount;
      }
    }

    let categoriesFound = 0;
    let categoriesDeleted = 0;
    let categoriesInserted = 0;
    const categoriesCursor = Categories.find({ slug: { $exists: false } });

    while (await categoriesCursor.hasNext()) {
      categoriesFound += 1;
      const category = await categoriesCursor.next();

      const deletedCat = await Categories.deleteOne({ _id: category._id });
      const insertedCat = await Categories.insertOne({
        _id: ObjectId(),
        slug: category._id,
        parent: category.parent,
        icon: category.icon,
        name: category.name
      });
      if (deletedCat.deletedCount > 0) {
        categoriesDeleted += deletedCat.deletedCount;
      }
      if (insertedCat.insertedCount > 0) {
        categoriesInserted += insertedCat.insertedCount;
      }
    }

    let postsFound = 0;
    let postsDeleted = 0;
    let postsInserted = 0;
    const postsCursor = Posts.find({ slug: { $exists: false } });

    while (await postsCursor.hasNext()) {
      postsFound += 1;
      const post = await postsCursor.next();

      const deletedPost = await Posts.deleteOne({ _id: post._id });
      const insertedPost = await Posts.insertOne({
        _id: ObjectId(),
        slug: post._id,
        author: post.author,
        icon: post.icon,
        name: post.name,
        shortText: post.shortText,
        image: post.image,
        content: post.content,
        _category: post._category,
        tags: post.tags,
        deletedAt: post.deletedAt,
        publishedAt: post.publishedAt,
        createdAt: post.createdAt,
        display: post.display
      });
      if (deletedPost.deletedCount > 0) {
        postsDeleted += deletedPost.deletedCount;
      }
      if (insertedPost.insertedCount > 0) {
        postsInserted += insertedPost.insertedCount;
      }
    }

    console.log('Tags Updated:');
    console.log(`Found: ${tagsFound} tags, Deleted: ${tagsDeleted}, Inserted: ${tagsInserted}`);
    console.log('Categories Updated:');
    console.log(
      `Found: ${categoriesFound} categories, Deleted: ${categoriesDeleted}, Inserted: ${categoriesInserted}`
    );
    console.log('Posts Updated:');
    console.log(`Found: ${postsFound} posts, Deleted: ${postsDeleted}, Inserted: ${postsInserted}`);

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
