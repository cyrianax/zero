const Router = require('koa-router')
const api = new Router()

const content = require('./api.content')
const gather = require('./api.gather')
const user = require('./api.user');
const tag = require('./api.tag');

api.use(user.routes(), user.allowedMethods())
api.use(content.routes(), content.allowedMethods())
api.use(tag.routes(), tag.allowedMethods())
api.use('/gather', gather.routes(), gather.allowedMethods())

module.exports = api
