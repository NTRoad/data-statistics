'use strict';

const Controller = require('egg').Controller;

class insert extends Controller {
  async index() {
    const res = await this.ctx.service.insert.index(this.ctx.request.body);
    this.ctx.body = res;
  }
}

module.exports = insert;
