'use strict';

const connectDB = require('./connectDB');

const insertDB = async (collectionName, data, dbName) => {
  // collectionName--集合名，data--向集合中插入的数据，dbName--数据库名
  const client = await connectDB();
  const db = await client.db(dbName); // 使用相应数据库
  const collection = await db.collection(collectionName); // 使用相应集合
  return new Promise((res, rej) => {
    collection.insert(data, (err, result) => { // 插入数据
      if (err) rej(err);
      else res(result);
      client.close();
    });
  });
};

module.exports = insertDB;
