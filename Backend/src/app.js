import Koa from 'koa';
import Router from 'koa-router';


export const PORT = process.env.PORT || 3003;

export const koa = new Koa();
export var router = new Router();

koa
  .use(router.routes())
  .use(router.allowedMethods())
  
const server = koa.listen(PORT);

export default server

