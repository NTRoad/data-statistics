'use strict';

const Service = require('egg').Service;
const insertDB = require('./DB/insertDB');

class insert extends Service {
  async index(data) {
    const {
      pageId,
      startTime,
      endTime,
      uid,
      isNewVisiter,
      lastPageSc,
      openWay,
      referner,
    } = data;
    const json = {
      pageId,
      startTime,
      endTime,
      uid,
      isNewVisiter,
      lastPageSc,
      openWay,
      referner,
    };
    return insertDB('visit_info', json, 'data_statistics');
  }
}

module.exports = insert;
