/**
 * @description 校验Token 中间件
 */
module.exports = (options, app) => {
  return async function auth(ctx, next) {
    console.log(ctx.path);

    if (ctx.path == "/" || ctx.path == "/api/login" || ctx.path == "/authCallback") {
      await next();
    } else {
      let payload;
      const token = ctx.headers.Authorization;
      if (token) {
        //验证token
        console.log(ctx);
        payload = await ctx.app.jwt.verify(token, ctx.app.jwt.secret);
        //  验证用户信息 并且更新token
        console.log(payload);

        await next();
        console.log("是否回来");
      } else {
        ctx.body = {
          message: "token错误",
          code: -1
        };
      }
      console.log(ctx.headers.authorization);
    }
  };
};
