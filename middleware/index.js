const path = require('path')

// 第三方中间件
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')
const statics = require('koa-static')
const compress = require('koa-compress')

// 自定义中间件
const mongoose = require('./mid.mongoose')
const router = require('./mid.router')
const template = require('./mid.template')

module.exports = app => {
  app.use(logger())
  app.use(bodyparser())
  app.use(template())
  app.use(compress())
  app.use(statics((path.resolve(__dirname, '../static'))))
  app.use(mongoose())
  app.use(router.routes())
  app.use(router.allowedMethods())
}