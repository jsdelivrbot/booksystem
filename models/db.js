/*
 * @Author: X_Heart
 * @Date: 2017-06-09 10:33:51
 * @Last Modified by: X_Heart
 * @Last Modified time: 2017-06-09 22:58:31
 * @description: mongoose数据库
 */
const mongoose = require('mongoose')
const uristring = process.env.MONGODB_URI || 'mongodb://localhost/booksystem';
const db = mongoose.createConnection(uristring)

db.once('open', (callback) => {
  console.log('数据库连接成功')
})

module.exports = db