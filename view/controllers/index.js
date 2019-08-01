const Router = require('koa-router')
const Content = require('../../models/contents')
const { pagingFormat } = require('../../utils')

const router = new Router()

router.get('/', async ctx => {

  const { size, index } = pagingFormat(ctx.query)
  const { tag_id, q = '' } = ctx.query
  const filter = [{ title: RegExp(q) }]

  if (tag_id !== undefined) filter.push({ tags: tag_id })

  const contents = await Content.find({ $and: filter }, {title: 1, create_date: 1}).populate('tags').limit(size).skip(index)
  console.log(contents);
  

  ctx.render('index', {
    contents
  })
})

module.exports = router
