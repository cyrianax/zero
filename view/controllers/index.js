const Router = require('koa-router')

const router = new Router()
router.get('/', ctx => {
  ctx.render('index', {
    pageName: 'i am index'
  })
})

module.exports = router
