"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 数据库
  mysql: {
    enable: true,
    packages: "egg-mysql"
  },
  validate: {
    enable: true,
    package: "egg-validate"
  }
};
