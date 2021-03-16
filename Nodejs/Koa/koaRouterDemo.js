const Koa = require("koa");
const router = require("koa-router")();
const static = require("koa-static");
const app = new Koa();

app.use(static(__dirname));

router.get("/",async ctx =>{
    ctx.body = "<h1>home page</h1>"
});

router.get("/video",async ctx =>{
    ctx.body = "<h1>video page</h1>"
});

router.get("/doc",async ctx =>{
    ctx.body = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta chaset="UTF-8">
        <title="Koa-Router">
        <link rel="stylesheet" href="/styles.css"
    </head>
    <body>
        <h1>Hello DOC</h1>
        <p>This is a Koa-router Demo</p>
        <img src="/images/Birthday-Cake.png">
    </body>
    </html>
    `
});

app.use(router.routes());

app.listen(3000,()=>{
    console.log("server is running");
});