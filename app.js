'use strict'
var koa = require('koa');
var app = module.exports = koa();
 var handlebars = require("koa-handlebars");


app.use(handlebars({
  defaultLayout: "main"
}));

app.use(function *() {
  yield this.render("index", {
    title: "Test Page",
    name: "World"
  });
});



 app.listen(4088);
 
console.log('listening on port 4088');