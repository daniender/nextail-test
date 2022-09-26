import bodyParser from 'body-parser';
import cors from 'cors';

import { SERVER_PORT } from './src/global/environmnent';
import Server from './src/models/app/server';
import router from './src/routes/routes';

/** APP variables */
const server: Server = Server.instance;

/** APP configuration */
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

/** CORS */
server.app.use(cors({ origin: true, credentials: true }));

/** API endpoints */
server.app.use('/', router);

/** Server activation */
server.start(() => {
  console.log(`Server started on port: ${SERVER_PORT}`);
});

