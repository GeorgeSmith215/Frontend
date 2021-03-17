const Koa = require("koa");
const router = require("koa-router")();
const parser = require("koa-parser");
const views = require("koa-views");
const nunjucks = require("nunjucks");
const static = require("koa-static");
const app = new Koa();
app.use(parser());
// public目录是纯放静态文件的，比如图片，css，js，静态的html等
app.use(static(__dirname+"/public"));
app.use(views(__dirname+"/views",{
    map:{html:'nunjucks'}
}));

// 模拟数据库数据
let dataList = ["Banana","apple","orange"];

router.get("/",async ctx=>{
    await ctx.render("home");
})

// get查看
router.get("/fruits", ctx =>{
    ctx.body = dataList;
})

// post添加
router.post("/fruits",  ctx =>{
    let fruit = ctx.request.body.fruit;
    // push方法可以再array结尾追加数据
    dataList.push(fruit);
    ctx.body = dataList;
})

// put更新
// “/:id”:路由传参。用ctx.params.id获取id值。Postman中直接写"地址/id"形式传id
router.put("/fruits/:id", ctx=>{
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
router.delete("/fruits/:id",ctx => {
    let id = ctx.params.id;
    dataList.splice(id,1);
    ctx.body = dataList;
})

app.use(router.routes());

app.listen(3000,()=>{
    console.log("server running")
})