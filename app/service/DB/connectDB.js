'use strict';
const MongoClient = require('mongodb').MongoClient; // 引入mongobd

const connectDB = (url = 'mongodb://47.106.148.23:27017/') => {
  return new Promise((res, rej) => { // 远程连接mongdb
    MongoClient.connect(url, (err, client) => {
      if (err) rej(err);
      else res(client);
    });
  });
};

module.exports = connectDB;
