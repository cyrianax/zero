const path = require('path')
require('colors')

// 第三方中间件
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')
const statics = require('koa-static')
const compress = require('koa-compress')
const cors = require('@koa/cors')
const parameter = require('koa-parameter');
const jsonError = require('koa-json-error');

// 自定义中间件
const mongoose = require('./mid.mongoose')
const router = require('./mid.router')
const template = require('./mid.template')

module.exports = app => {
  // 校验参数
  app.use(parameter(app))
  // json错误处理
  app.use(jsonError({
    postFormat(e, { stack, ...rest }) {
      return process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
    }
  }));
  app.use(cors())
  app.use(logger())
  app.use(bodyparser())
  app.use(template())
  app.use(compress())
  app.use(statics((path.resolve(__dirname, '../static'))))
  app.use(mongoose())
  app.use(router.routes())
  app.use(router.allowedMethods())
}