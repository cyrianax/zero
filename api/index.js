const Router = require('koa-router')
const api = new Router()

const content = require('./api.content')

api.use('/content', content.routes(), content.allowedMethods())

module.exports = api
