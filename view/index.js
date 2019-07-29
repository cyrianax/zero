const Router = require('koa-router')
const api = new Router()

const index = require('./controllers/index')
const list = require('./controllers/list')
const content = require('./controllers/content')

api.use(index.routes(), index.allowedMethods())
api.use(list.routes(), list.allowedMethods())
api.use(content.routes(), content.allowedMethods())

module.exports = api
