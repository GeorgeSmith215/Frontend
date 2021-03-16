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
    //render方法渲染模板，第二个参数可以给模板传递参数
    await ctx.render('index',{
        title:"nunjucksDemoIndex"
    });
});

router.get('/docs', async (ctx, next) => {
    await ctx.render('data', {
        title: 'nunjucksDemoDoc',
        desc:'Welcome'
    });
});

app.use(router.routes());

app.listen(3000, () => {
    console.log("server is running");
}) 