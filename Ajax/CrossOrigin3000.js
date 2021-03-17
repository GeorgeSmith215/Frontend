const Koa = require("koa");
const router = require("koa-router")();
const views = require("koa-views");
const jsonp = require("koa-jsonp");
const parser = require("koa-parser");
const nunjucks = require("nunjucks");
const app = new Koa();
// public目录是纯放静态文件的，比如图片，css，js，静态的html等
app.use(views(__dirname+"/views",{
    map:{html:'nunjucks'}
}));
app.use(jsonp());
app.use(parser());

app.use(async (ctx, next)=> {
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200; 
    } else {
      await next();
    }
  });

// 模拟数据库数据
let dataList = ["Banana","apple","orange"];

router.get("/",async ctx=>{
    await ctx.render("CrossOrigin3000");
})

// get查看
router.get("/fruits", async ctx =>{
    // 设置服务器的响应头信息就可以允许跨域请求了
    // 虽然简单，但是有安全隐患，如果响应头中的服务器沦陷了，那么这台服务器也会受影响。
    // 一般开发时会有大量的跨域请求，可以设置跨域，当项目上线后去掉响应头即可
    ctx.body = dataList;
})

// post添加
router.post("/fruits",  async ctx =>{
    let fruit = ctx.request.body.fruit;
    // push方法可以再array结尾追加数据
    dataList.push(fruit);
    ctx.body = dataList;
})

// put更新
// “/:id”:路由传参。用ctx.params.id获取id值。Postman中直接写"地址/id"形式传id
router.put("/fruits/:id", async ctx=>{
    let id = ctx.params.id;
    let fruit = ctx.request.body.fruit;
    // splice(要删除元素的索引，删除几个元素，将删除的元素替换成XX)
    // splice(id,1);从索引为id的元素开始，删除1个元素
    // splice(id,1,"XX");从索引为id的元素开始，删除1个元素,替换为XX
    // splice(id,0,"XX");从索引为id的元素开始，不删除，增加XX元素
    dataList.splice(id,1,fruit);
    ctx.body = dataList;
})

// delete删除
router.delete("/fruits/:id",async ctx => {
    let id = ctx.params.id;
    dataList.splice(id,1);
    ctx.body = dataList;
})

app.use(router.routes());

app.listen(3000,()=>{
    console.log("server running")
})