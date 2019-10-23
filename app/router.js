"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log(app.router.resources);
  router.get("/", controller.home.index);
  router.get("/login", controller.home.login);
  router.get("/list", controller.new.list);
  router.resources("topics", "/api/topics", controller.topics);
};
