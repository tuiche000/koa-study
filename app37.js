const Koa = require('koa');
const body = require('koa-better-body');
const convert = require('koa-convert');
const session = require('koa-session')

const app = new Koa();
app.listen(8080);

app.use(convert(body({
  uploadDir: './upload/',
  keepExtensions: true
})))

app.use(session({}, app))

app.use(async ctx => {
  console.log(ctx.request.fields) // 数据(包括文件)
})