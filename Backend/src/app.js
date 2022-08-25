import Koa from 'koa';
import Router from 'koa-router';
import YAML from 'yamljs';
import { koaSwagger } from 'koa2-swagger-ui';
import cors from 'koa2-cors'

const spec = YAML.load('./api.yaml')

export const PORT = process.env.PORT || 3003;

export const koa = new Koa();
export var router = new Router();

router.get('/docs', koaSwagger({ routePrefix: false, swaggerOptions: { spec } }));

const corsOptions = {
  origin: '*'
}

koa
  .use(router.routes())
  .use(router.allowedMethods())
  .use(cors(corsOptions))
  
const server = koa.listen(PORT);

export default server

