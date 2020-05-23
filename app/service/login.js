'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async codeLogin(code) {
    const { ctx, app } = this;

    const res = await ctx.curl(
      'https://api.weixin.qq.com/sns/jscode2session?appid=' +
        app.config.wechatConfig.appid +
        '&secret=' +
        app.config.wechatConfig.secret +
        '&js_code=' +
        code +
        '&grant_type=authorization_code',
      {
        dataType: 'json',
      }
    );
    ctx.logger.info(res);
    if (!res.data.errcode) {
      const user = await ctx.model.Users.findOrCreate({
        where: {
          openid: res.data.openid,
        },
      });
      // TODO: 这里会返回一个ture 或者false  判断是新增还是已经存在的
      return user;
    }
    ctx.throw(200, {
      data: {
        code: 0,
        msg: '微信获取openid失败',
        status: 'fail',
        result: res.data,
      },
    });

  }
}

module.exports = LoginService;
