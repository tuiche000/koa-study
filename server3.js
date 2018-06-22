const Koa = require('koa');
const static = require('koa-static')
const router = require('koa-router')

const app = new Koa();
app.listen(8080);

// 1.接口
let r1 = router();
app.use(r1.rouets());

r1.get('/a/:id/:page', async(ntx, next) => {
  console.log(ctx.params)

  ctx.response.body = 'abc'
})

r1.get('/b', async(ntx, next) => {
  ctx.response.body = 'ddd'
})

// 2.静态文件
app.use(static('www'));
