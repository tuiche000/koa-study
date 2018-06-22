const Koa = require('koa');
const static = require('koa-static')
const router = require('koa-router')
const myStatic = require('./libs/my-static')

const app = new Koa();
app.listen(8080);

// 2.静态文件
// app.use(static('www'))
app.use(myStatic('www'))
