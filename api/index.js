const Router = require('koa-router')
const api = new Router()

const content = require('./api.content')
const user = require('./api.user');
const tag = require('./api.tag');

api.use(user.routes(), user.allowedMethods())
api.use(content.routes(), content.allowedMethods())
api.use(tag.routes(), tag.allowedMethods())

module.exports = api
