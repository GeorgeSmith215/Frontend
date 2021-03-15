const Koa = require("koa");
const static = require("koa-static");
const app = new Koa();
//__dirname是当前项目的绝对路径
app.use(static(__dirname));

app.use(async (ctx) => {
    ctx.body = `
        <h1>这是一个有图片的网页</h1>
        <img src='/images/Birthday-Cake.png'>
    `
})
app.listen(3000,() => {
    console.log("server is running")
})