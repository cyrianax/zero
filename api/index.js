const Router = require('koa-router')
const api = new Router()

const content = require('./api.content')
const gather = require('./api.gather')

api.use('/content', content.routes(), content.allowedMethods())
api.use('/gather', gather.routes(), gather.allowedMethods())

module.exports = api
