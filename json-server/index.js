var koa = require('koa');
var app = new koa();

app.use(function (ctx){
  ctx.type = 'json';
  ctx.status = 200;
  ctx.body = {'Welcome': 'This is a level 2 Hello World Application!!'};
});

app.listen(3000);
