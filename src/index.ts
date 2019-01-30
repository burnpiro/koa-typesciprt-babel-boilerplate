import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';
import Koa from 'koa';
import path from 'path';

import { HOST, PORT } from './constants/server';

dotenv.config();
const SERVER_PORT = process.env.SERVER_POST || PORT;
const SERVER_HOST = process.env.SERVER_HOST || HOST;
const server = new Koa();

const config = {
  domain: SERVER_HOST,
  https: {
    options: {
      cert: fs.readFileSync(path.resolve(process.cwd(), 'server.crt'), 'utf8').toString(),
      key: fs.readFileSync(path.resolve(process.cwd(), 'server.key'), 'utf8').toString(),
    },
    port: SERVER_PORT,
  },
};

server.use(ctx => {
  ctx.body = 'test';
});

const serverCallback = server.callback();
// Start the server
async function start() {
  try {
    const httpsServer = https.createServer(config.https.options, serverCallback);
    httpsServer
      .listen(config.https.port, (err: Error) => {
        if (err) {
          console.error('HTTPS server FAIL: ', err, (err && err.stack));
        }
        else {
          console.log(`HTTPS server OK: https://${config.domain}:${config.https.port}`);
        }
      });
  }
  catch (ex) {
    console.error('Failed to start HTTPS server\n', ex, (ex && ex.stack));
  }
}

start();
