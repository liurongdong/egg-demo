/* eslint valid-jsdoc: "off" */

"use strict"
const errors = require('egg-errors')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1571473642294_1132"

  // add your middleware config here
  config.middleware = ["auth","errorHandler"]
  // 不需要验证TOKEN的路由
  config.auth = {
    allowed: ["/api/v1/login/codeLogin", '/api/v2']
  }
  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = {
    match: "/api"
  }
 
  config.eggErrors = {
    continue: { code: 100, message: 'Continue' },
    ok: { code: 200, message: 'OK' },
    created: { code: 201, message: 'Created' },
    noContent: { code: 204, message: 'No Content' },
    movedPermanently: { code: 301, message: 'Moved Permanently' },
    found: { code: 302, message: 'Found' },
    notModified: { code: 304, message: 'Not Modified' },
    badRequest: { code: 400, message: 'Bad Request', error: errors.E400 },
    unauthorized: { code: 401, message: 'Unauthorized', error: errors.E401 },
    forbidden: { code: 403, message: 'Forbidden', error: errors.E403 },
    notFound: { code: 404, message: 'Not Found', error: errors.E404 },
    conflict: { code: 409, message: 'Conflict', error: errors.E409 },
    unprocessable: { code: 422, message: 'Unprocessable Entity', error: errors.E422 },
    serverError: { code: 500, message: 'serverError', error: errors.E500 },
    otherServerError: { code: 502, message: 'Bad Gateway', error: errors.E502 },
    errors,
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    news: {
      pageSize: 5,
      serverUrl: "https://hacker-news.firebaseio.com/v0"
    }
  }

  // config/config.${env}.js
  config.sequelize = {
    dialect: "mysql",
    host: "47.97.201.129",
    port: 3306,
    username: "liuuu",
    password: "lrd6274...",
    database: "liuuu",
    define: {
      freezeTableName: true, // Model 对应的表名将与model名相同。
      timestamps: false // 默认情况下，Sequelize会将createdAt和updatedAt的属性添加到模型中，以便您可以知道数据库条目何时进入数据库以及何时被更新（ 确实是太方便了，然而我们一般用不到 ....）。
    }
  }

  // egg-swagger-doc 配置信息。

  config.swaggerdoc = {
    dirScanner: "./app/controller",
    apiInfo: {
      title: "lrd小程序后台",
      description: "来自伟大的DG",
      version: "1.0.0"
    },
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: false,
    // enableValidate: true,
    routerMap: false,
    enable: true
  }

  //jwt 私有key
  config.jwt = {
    secret: "1234567890"
  }
  //关闭csrf  跨站伪造请求
  config.security = {
    csrf: false
  }
  // 小程序相关
  config.wechatConfig = {
    secret: "0b37835038fa4a9d880908c4496a6f65",
    appid: "wxaf459495989c1b6f"
  }
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS"
  }
  config.logger = {
    outputJSON: true,
  };
  return {
    ...config,
    ...userConfig
  }
}
