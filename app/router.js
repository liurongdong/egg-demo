"use strict"

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  console.log(app.router.resources)
  const apiV1Router = router.namespace("/api/v1")
  apiV1Router.get("/", controller.swagger.index)
  apiV1Router.get("/aaa", controller.swagger.index)
  apiV1Router.get("/login/codeLogin", controller.login.index)
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
