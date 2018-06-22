const Koa = require('koa');
const static = require('koa-static')
const route = require('koa-route')

const app = new Koa();
app.listen(8080);

// 1.接口
// 注册: /reg?user=xxx&pass=xxx
app.use(route.get('/reg', async(ctx, next) => {
  console.log(ctx.request.query)
}))

/*
app.use(route.get('/reg/:user/:pass', async(ctx, user, pass, next) > {
  // ctx => 上下文
  
  ctx.req
  ctx.res

  ctx.request
  ctx.response

  // ctx.response.body = 'abc'

  console.log(user, pass)
}));
*/

// 2.静态文件
app.use(static('www'));
