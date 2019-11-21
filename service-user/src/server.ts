import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-body';

const app = new Koa();
const router = new Router();

app.use(bodyParser({ multipart: true }));


router.get('/*', async (ctx: Koa.Context) => {
    ctx.body = 'Hello World';
});

app.use(router.routes())

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
