// app.js
const LocalStrategy = require("passport-local").Strategy;

// app.js
module.exports = app => {
  // 挂载 strategy
  console.log("是否进入app.ja");

  module.exports = app => {
    // 挂载 strategy
    app.passport.use(
      new LocalStrategy(
        {
          passReqToCallback: true
        },
        (req, username, password, done) => {
          // format user
          const user = {
            provider: "local",
            username,
            password
          };
          debug("%s %s get user: %j", req.method, req.url, user);
          app.passport.doVerify(req, user, done);
        }
      )
    );

    // 处理用户信息
    app.passport.verify(async (ctx, user) => {});
    app.passport.serializeUser(async (ctx, user) => {});
    app.passport.deserializeUser(async (ctx, user) => {});
  };
};
