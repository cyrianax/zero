const Router = require('koa-router')
const Content = require('../../models/contents')
const moment = require('moment')
const marked = require('marked')

const router = new Router()
router.get('/content/:id', async ctx => {
  if (ctx.params.id) {
    const content = await Content.findById(ctx.params.id)
    if (content) {
      ctx.render('content', {
        content: {
          title: content.title,
          createDate: moment(content.create_date).format('YYYY-MM-DD hh:mm'),
          content: marked(content.content)
        }
      })
    } else{
      ctx.redirect('/')
    }
  } else {
    ctx.redirect('/')
  }
})

module.exports = router
