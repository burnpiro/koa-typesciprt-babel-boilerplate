// @flow

import mongoose from 'mongoose';
import paths from '../config/paths';

const connect = () => {
  mongoose.connect(
    paths.mongoDBURLWithName,
    { useNewUrlParser: true }
  );
  mongoose.set('useCreateIndex', true);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', () => {
    console.log(`Connection with database succeeded at ${paths.mongoDBURLWithName}`);
  });

  return db;
};

export default connect;
