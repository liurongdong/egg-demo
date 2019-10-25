"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, eg32g";
  }
  async login() {
    const { ctx } = this;
    const token = ctx.app.jwt.sign("liuuu", ctx.app.jwt.secret, { expiresIn: "1h" }); //token签名 有效期为1小时
    ctx.cookies.set("token", token);
    ctx.body = {
      token
    };
    ctx.status = 200;
  }
  async authCallback() {
    const { ctx } = this;
    console.log("shi", ctx.isAuthenticated());
    // 关键在这句，使用ctx.isAuthenticated()判断是否登录。这些都是eggjs自动将passport的方法挂到ctx上了。
    // 如果没登录跳渲染登录的页面。这里用了return阻止进一步逻辑
    if (!ctx.isAuthenticated()) {
      // 这里有一个点：ctx.session.returnTo就是如果登陆成功后，返回的页面路径。而ctx.path是当前访问的路径，也就是是说将当前路径保存下来，登陆成功了返回来继续
      ctx.session.returnTo = ctx.path;
      ctx.body = {
        sl: "登陆失"
      };
    }
    // 如果通过就继续正常的逻辑。
    // await ctx.render('91porn/list.tpl', {
    //   user: ctx.user
    // });
    ctx.body = {
      sl: "登陆成功"
    };
    ctx.status = 200;
  }
}

module.exports = HomeController;
