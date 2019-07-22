const Router = require('koa-router')
const router = new Router()

const view = require('../view')
const api = require('../api')

router.use('', view.routes(), view.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())

module.exports = router
