const Koa = require("koa");
const app = new Koa();

app.use(async (ctx,next) =>{
    ctx.body = "hello world";
    await next();
})

app.use(async (ctx,next) =>{
    console.log("我是一个中间件");
})

app.listen(3000,()=>{
    console.log("server is running");
})