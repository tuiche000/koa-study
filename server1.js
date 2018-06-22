const Koa = require('koa');
const static = require('koa-static')

const app = new Koa();
app.listen(8080);

// 1.接口
// 注册: /reg?user=xxx&pass=xxx
app.use(() => {})

// 2.静态文件
app.use(static('www'));
