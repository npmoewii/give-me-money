import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-body';
import { createConnection } from "typeorm";
import { dbConfig, serverPort } from "./config";

import router from './routes'

const app = new Koa();

(async () => {
    await createConnection(dbConfig);
    app.use(cors())
    app.use(bodyParser({ multipart: true }));
    app.use(router.routes())

    app.listen(serverPort, () => {
        console.log('Server running on port ' + serverPort);
    });
})
