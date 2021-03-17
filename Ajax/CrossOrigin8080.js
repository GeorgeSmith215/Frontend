const Koa = require("koa");
const router = require("koa-router")();
const views = require("koa-views");
const nunjucks = require("nunjucks");
const static = require("koa-static");
const app = new Koa();
// public目录是纯放静态文件的，比如图片，css，js，静态的html等
app.use(static(__dirname+"/public"));
app.use(views(__dirname+"/views",{
    map:{html:'nunjucks'}
}));

router.get("/",async ctx=>{
    await ctx.render("CrossOrigin8080");
})

app.use(router.routes());

app.listen(8080,()=>{
    console.log("server running")
})