const Koa = require('koa');
const static = require('koa-static')
const router = require('koa-router')

const app = new Koa();
app.listen(8080);

// 1.接口
let mainRouter = router();
app.use(mainRouter.routes())

mainRouter.use('/user', require('./routers/user'))

// 2.静态文件
app.use(static('www'));
