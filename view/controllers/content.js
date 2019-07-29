const Router = require('koa-router')

const router = new Router()
router.get('/content', ctx => {
  ctx.render('content', {
    pageName: 'i am content'
  })
})

module.exports = router
