"use strict"

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  console.log(app.router.resources)
  router.get("/", controller.swagger.index)
  // router.post(
  //   "/api/login",
  //   app.passport.authenticate("local", { successRedirect: "/authCallback", failureRedirect: "/login/fail" }),
  //   controller.home.login
  // );

  // // 鉴权成功后的回调页面
  // router.get("/authCallback", controller.home.authCallback);
  // router.get("/list", controller.new.list);
  // router.resources("topics", "/api/topics", controller.topics);
}
