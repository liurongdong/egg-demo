"use strict"

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 数据库
  mysql: {
    enable: true,
    package: "egg-mysql"
  },
  sequelize: {
    enable: true,
    package: "egg-sequelize"
  },
  // 配置 egg-swagger-doc 插件信息。
  swaggerdoc: {
    enable: true, // 是否启用。
    package: "egg-swagger-doc" // 指定包名称。
  },
  validate: {
    enable: true,
    package: "egg-validate"
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
  cors: {
    enable: true,
    package: "egg-cors"
  },
  //鉴权，
  passport: {
    enable: true,
    package: "egg-passport"
  },
  passportLocal: {
    enable: true,
    package: "egg-passport-local"
  },
  // 路由插件
  routerPlus: {
    enable: true,
    package: "egg-router-plus"
  }
}
