const Koa = require('my-koa');

const app = new Koa();
app.listen(8080);

app.use(async (ctx, next) => {
  console.log('a');

  await next();

  console.log('b')

})

app.use(async (ctx, next) => {
  console.log(111)

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    },1000)
  })

  console.log(222)
})