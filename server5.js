const Koa = require('koa');
const static = require('koa-static')
const router = require('koa-router')

const app = new Koa();
app.listen(8080);

// 1.接口
app.use(async(ctx, next) => {
  const start = new Date().getTime();

  await next();

  console.log(`处理时间:${new Date().getTime() - start}ms`)
})

app.use(async(ctx, next) => {
  try {
    await next();
  } catch (e) {
    console.log(e.name)
    ctx.response.body = '404'
  }
})

// 2.静态文件
app.use(static('www'));
