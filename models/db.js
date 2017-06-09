/*
 * @Author: X_Heart
 * @Date: 2017-06-09 10:33:51
 * @Last Modified by: X_Heart
 * @Last Modified time: 2017-06-09 11:12:13
 * @description: mongoose数据库
 */
const mongoose = require('mongoose')
const db = mongoose.createConnection('mongodb://localhost/booksystem')

db.once('open', (callback) => {
  console.log('数据库连接成功')
})

module.exports = db