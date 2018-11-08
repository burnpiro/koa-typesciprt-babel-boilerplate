// @flow
import dotenv from 'dotenv';
import Hapi from 'hapi';
import DBConnection from './db';
import routes from './routes';

dotenv.config();
const db = DBConnection();

// Create a server with a host and port
const server = Hapi.server({
  host: process.env.SERVER_HOST || 'localhost',
  port: process.env.SERVER_POST || 8000,
});

server.route(routes);

// Start the server
async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
}

start();
