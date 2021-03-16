const Koa = require("koa");
const router = require("koa-router")();
const views = require("koa-views");
const nunjucks = require("nunjucks");
const session = require("koa-session");
const parser = new require("koa-parser");
const app = new Koa();

app.use(parser());
// 有关session详细配置可以上npmjs.com搜索
// 加密的密钥，服务器通过加密的cookie获取session
app.keys=["George"];
app.use(session({
    maxAge:10000
},app));

//使用nunjucks模板引擎渲染以html为后缀的文件。
app.use(views(__dirname+"/views",{
    map:{html:"nunjucks"}
}))

router.get("/",async ctx =>{
    // cookie是以明值对的方式记录在客户端(浏览器)的
    ctx.cookies.set("user","admin");
    ctx.body = "cookie";
});

router.get("/count", async ctx => {
    // 获取cookie
    let count = ctx.cookies.get("count");
    // 判断是否有cookie
    if(count > 0){
        // 设置cookie+1值
        count = ++count;
        ctx.cookies.set("count",count,{
            // 设置cookie过期时间为2000ms
            maxAge:2000
        });
    }else{
        count = 1;
        ctx.cookies.set("count",1);
    }
    ctx.body = count
});
// 设置session，服务器会response加密的cookies，客户端会产生加密的cookies，服务器通过加密的cookie获取session
router.get("/session",async ctx=>{
    ctx.session.user = "admin";
    ctx.body = "set session";
});
// 获取session并显示在页面上，必须要在session过期前才能获取值
router.get("/sessionTest",async ctx=>{
    let user = ctx.session.user;
    ctx.body = user;
});

router.get("/sessionCount", async ctx => {
    if(ctx.session.count>0){
        ctx.session.count = ++ctx.session.count;
    }else{
        ctx.session.count = 1
    }
    ctx.body = ctx.session.count;
});

// 首页，任何用户都可访问 
router.get("/home",async ctx=>{
    await ctx.render("homepage.html");
    if(ctx.session.user){
        await ctx.render("homepage.html",{
            username:ctx.session.user
        });
    };
})
// 登录页，任何用户都可以访问，表单
router.get("/login",async ctx=>{
    await ctx.render("login.html");
})
// 内容页，只有登录成功才能访问（有没有user的session）
router.get("/list",async ctx=>{
    if(ctx.session.user){
        await ctx.render("list.html",{
            username:ctx.session.user,
        });
    }else{
        ctx.redirect("/login");
    }
})

router.post("/login",async ctx =>{
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    if(username === "George" && password === "123456"){
        // 登录成功需要设置session.use来判断是否登录成功
        ctx.session.user = "George";
        // 重定向
        ctx.redirect("/list");
    }else{
        ctx.redirect("/home");
    }
})
// 用户登出，清空session.user，并重定向到home页
router.get("/logout",async ctx=>{
    ctx.session.user = "";
    ctx.redirect("/home");
});

app.use(router.routes());

app.listen("3000",()=>{
    console.log("server is running");
})