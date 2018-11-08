// @flow

import mongoose from 'mongoose';

const connect = () => {
  mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', () => {
    console.log(`Connection with database succeeded at ${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
  });

  return db;
};

export default connect;
