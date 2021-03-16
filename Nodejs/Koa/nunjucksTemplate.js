const Koa = require("koa");  
const router = require("koa-router")();
const nunjucks = require("nunjucks");
const views = require("koa-views");
const app = new Koa();  

app.use(views(__dirname + '/views', {
    //将使用nunjucks模板引擎渲染以html为后缀的文件。
    map: { html: 'nunjucks' }
}));

router.get('/', async (ctx, next) => {
    // 模拟后台数据
    let studentList = ["小明","小红","小刚"];
    let username = "admin";
    let isLogin = true;
    //render方法渲染模板，第二个参数可以给模板传递参数
    await ctx.render('template',{
        title:"nunjucksDemoIndex",
        studentList,
        isLogin,
        username
    });
});

router.get("/images",async ctx=>{
    await ctx.render("images")
})

app.use(router.routes());

app.listen(3000, () => {
    console.log("server is running");
}) 