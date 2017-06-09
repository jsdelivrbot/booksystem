/*
 * @Author: X_Heart
 * @Date: 2017-06-09 10:46:38
 * @Last Modified by: X_Heart
 * @Last Modified time: 2017-06-10 00:20:00
 * @description: 
 */
const express = require('express')
const app = express()
const ejs = require('ejs')
const router = require('./router/router')

// 设置模板引擎
app.engine('html', ejs.__express)
app.set('view engine', 'html')

app.set('port', (process.env.PORT || 5000));
// 静态文件中间件
app.use(express.static('./public'))
// 图书列表页
app.get('/', router.showIndex)
// 添加图书页面
app.get('/addbook', router.addBook)
// 添加图书业务
app.get('/doadd', router.doAdd)
// 修改图书页面
app.get('/editbook', router.editBook)
// 修改图书业务
app.get('/doedit/:id', router.doEdit)

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});