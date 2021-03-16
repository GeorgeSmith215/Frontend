const Koa = require("koa");  
const router = require("koa-router")();
const nunjucks = require("nunjucks");
const views = require("koa-views");
// 安装第三方模块koa-parser来解析post请求
const parser = require("koa-parser");
const app = new Koa();  

app.use(parser());

app.use(views(__dirname + '/views', {
    //将使用nunjucks模板引擎渲染以html为后缀的文件。
    map: { html: 'nunjucks' }
}));

router.get('/', async (ctx, next) => {
    //render方法渲染模板，第二个参数可以给模板传递参数
    await ctx.render("form",{
        title:"formDemoIndex"
    });
});

router.get("/login",async ctx =>{
    // 通过ctx.query可以获取get请求的数据
    let username = ctx.query.username;
    let password = ctx.query.password;
    if(username === "admin" && password === "123456"){
        await ctx.render("home",{
            username:username,
            password:password,
            prompt:"login successful"
        });
    }else {
        await ctx.render("home",{
            username:username,
            password:password,
            prompt:"login failed"
        });
    }
});

router.post("/login",async ctx =>{
    // 通过ctx.request.bod可以获取post请求的数据
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    if(username === "admin" && password === "123456"){
        await ctx.render("home",{
            username:username,
            password:password,
            prompt:"login failed"
        });
    }else {
        await ctx.render("home",{
            username:username,
            password:password,
            prompt:"login failed"
        });
    }
});

app.use(router.routes());

app.listen(3000, () => {
    console.log("server is running");
})