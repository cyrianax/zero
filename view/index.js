const Router = require('koa-router')
const view = new Router()

const controller = name => require(`./${name}/controller`)

view.get('/', controller('index'))

module.exports = view
