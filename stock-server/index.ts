import cors from 'cors';
import express from 'express';

import { SERVER_PORT } from './src/global/environmnent';
import { domains } from './src/global/whitelist';
import Server from './src/models/app/server';
import router from './src/routes/routes';

/** APP variables */
const server: Server = Server.instance;

/** APP configuration */
server.app.use(cors({ origin: domains, credentials: false }));
server.app.use(express.json());
server.app.use('/', router);

/** Server activation */
server.start(() => {
  console.log(`Server started on port: ${SERVER_PORT}`);
});

