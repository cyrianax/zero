const Router = require('koa-router')

const router = new Router()
router.get('/list', ctx => {
  ctx.render('list', {
    pageName: 'i am list'
  })
})

module.exports = router
