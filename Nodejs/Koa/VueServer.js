const Koa = require("koa");
const router = require("koa-router")();
const parser = require("koa-parser");
const cors = require("koa2-cors");
const static = require("koa-static");
const app = new Koa();
app.use(parser());
app.use(cors());
app.use(static(__dirname+"/public"));
app.use(router.routes());

// 模拟数据库数据
const dataList = ["Banana","apple","orange"];
const studentList = [
    {id:1,name:"小明","age":11},
    {id:2,name:"小红","age":11},
    {id:3,name:"小刚","age":11}
]

// get查看
router.get("/fruits", ctx =>{
    ctx.body = dataList;
});

// post添加
router.post("/fruits",  ctx =>{
    let fruit = ctx.request.body.fruit;
    // push方法可以再array结尾追加数据
    dataList.push(fruit);
    ctx.body = true;
});

// put更新
// “/:id”:路由传参。用ctx.params.id获取id值。Postman中直接写"地址/id"形式传id
router.put("/fruits/:id", ctx=>{
    let id = ctx.params.id;
    let fruit = ctx.request.body.fruit;
    dataList.splice(id,1,fruit);
    ctx.body = true;
});

// delete删除
router.delete("/fruits/:id",ctx => {
    let id = ctx.params.id;
    dataList.map((item,index)=>{
        if(item.id == id){
            dataList.splice(index,1);
        }
    })
    ctx.body = true;
})




// get查看
router.get("/students", ctx =>{
    ctx.body = studentList;
})

// post添加
router.post("/students",  ctx =>{
    let student = ctx.request.body.student;
    // push方法可以再array结尾追加数据
    studentList.push(student);
    ctx.body = true;
})

// put更新
// “/:id”:路由传参。用ctx.params.id获取id值。Postman中直接写"地址/id"形式传id
router.put("/students/:id", ctx=>{
    let id = ctx.params.id;
    let student = ctx.request.body.student;
    studentList.splice(id,1,student);
    ctx.body = true;
})

// delete删除
router.delete("/students/:id",ctx => {
    let id = ctx.params.id;
    // console.log(id);
    // 从item.id的匹配找到对应删除的index
    studentList.map((item,index)=>{
        // console.log(index);
        // console.log(item);
        if(item.id == id){
            studentList.splice(index,1);
        }
    })
    ctx.body = studentList;
})

app.listen(3000,()=>{
    console.log("server running")
})