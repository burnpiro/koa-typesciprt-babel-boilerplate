import dotenv from 'dotenv';
import Koa from 'koa';
import DBConnection from './db';

import { HOST, PORT } from './constants/server';

dotenv.config();
const SERVER_PORT = process.env.SERVER_POST || PORT;
const SERVER_HOST = process.env.SERVER_HOST || HOST;
const app = new Koa();
// const db = DBConnection();

// Create a server with a host and port
// const server = express({
//   host: process.env.SERVER_HOST || 'localhost',
//   port: process.env.SERVER_POST || 8000
// });
//
// server.route(routes);

app.use(ctx => {
  ctx.body = 'test';
});

// Start the server
async function start() {
  try {
    app.listen(SERVER_PORT);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', app);
}

start();
