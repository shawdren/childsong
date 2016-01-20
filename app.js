'use strict'
var koa = require('koa');
var views = require('co-views');
var app = module.exports = koa();
 
var render = views(__dirname + '/views', { ext: 'ejs' });

app.use(function *(){
  this.body = yield render('index');
});


 app.listen(4088);
 
console.log('listening on port 4088');