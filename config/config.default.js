/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1571473642294_1132";

  // add your middleware config here
  config.middleware = ["checkToken", "errorHandler"];
  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
    match: "/api"
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    news: {
      pageSize: 5,
      serverUrl: "https://hacker-news.firebaseio.com/v0"
    }
  };

  // config/config.${env}.js
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: "120.78.94.206",
      // 端口号
      port: "3306",
      // 用户名
      user: "liuuu",
      // 密码
      password: "cCGjtXtLjr",
      // 数据库名
      database: "my_table"
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  };

  //jwt 私有key

  config.jwt = {
    secret: "1234567890"
  };
  //关闭csrf  跨站伪造请求
  config.security = {
    csrf: false
  };
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS"
  };
  return {
    ...config,
    ...userConfig
  };
};
