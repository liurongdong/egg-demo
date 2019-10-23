/**
 * @description 校验Token 中间件
 */
module.exports = (options, app) => {
  return async function auth(ctx, next) {
    console.log("是否来校验Token");

    if (ctx.path == "/" || ctx.path == "/login") {
      await next();
    } else {
      let payload;
      const token = ctx.headers.authorization;
      if (token) {
        //验证token
        // console.log(ctx.app);
        payload = await ctx.app.jwt.verify(token, ctx.app.jwt.secret);
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
