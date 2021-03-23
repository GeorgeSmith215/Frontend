function checkToken(){
    // 在中间件中进行一定拦截，如果要继续跳转到controller中，执行next，如果不跳转直接拦截可以用ctx.body做一定的响应
    return async function(ctx,next){
        // 验证token
        try{
            let token = ctx.header.token;
            ctx.app.jwt.verify(token,ctx.app.config.secret);
            await next();
        }catch(e){
            ctx.body = {
                code:40000,
                msg:"token验证失败"
            }
        }
    }
}

module.exports = checkToken;