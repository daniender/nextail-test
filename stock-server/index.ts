import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { SERVER_PORT } from './global/environmnent';
import Server from './models/app/server.class';
import router from './routes/routes';

/** APP variables */
const server = Server.instance;

/** APP configuration */
server.app.use(helmet());
server.app.use('/', router);
server.app.use(cors({ origin: true, credentials: true }));
server.app.use(express.json());

/** Server activation */
server.start( () =>  {
  console.log(`Server started on port: ${SERVER_PORT}`);
});

