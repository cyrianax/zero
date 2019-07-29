const Router = require('koa-router')
const api = new Router()

const index = require('./controllers/index')

api.use(index.routes(), index.allowedMethods())

module.exports = api
