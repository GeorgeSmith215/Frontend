const Koa = require("koa");
const router = require("koa-router")();
const app = new Koa();

//get是http协议请求的方法
router.get("/", async ctx => {
    ctx.body = "<h1>home page</h1>"
})

router.get("/video", async ctx => {
    ctx.body = "<h1>video page</h1>"
})

app.use(router.routes())


app.listen(3000,() => {
    console.log("server is running")
});