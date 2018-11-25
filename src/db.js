// @flow

import mongoose from 'mongoose';
import paths from '../config/paths';

const connect = () => {
  mongoose.connect(
    paths.mongoDBURL,
    { useNewUrlParser: true }
  );
  mongoose.set('useCreateIndex', true);

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', () => {
    console.log(`Connection with database succeeded at ${paths.mongoDBURL}`);
  });

  return db;
};

export default connect;
