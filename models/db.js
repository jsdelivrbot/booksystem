/*
 * @Author: X_Heart
 * @Date: 2017-06-09 10:33:51
 * @Last Modified by: X_Heart
 * @Last Modified time: 2017-06-10 00:07:34
 * @description: mongoose数据库
 */
const mongoose = require('mongoose')
const uristring = 'mongodb://<dbuser>:<dbpassword>@ds113702.mlab.com:13702/xheart'
const db = mongoose.createConnection(uristring)

db.once('open', (callback) => {
  console.log('数据库连接成功')
})

module.exports = db