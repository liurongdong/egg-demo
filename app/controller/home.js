"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, eg32g";
  }
  async login() {
    console.log("LOGIN  IN   ");
    const { ctx } = this;
    const token = ctx.app.jwt.sign("liuuu", ctx.app.jwt.secret, { expiresIn: "1h" }); //token签名 有效期为1小时
    ctx.cookies.set("token", token);
    ctx.body = {
      token
    };
    ctx.status = 200;
  }
}

module.exports = HomeController;
