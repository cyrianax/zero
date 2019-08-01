const Router = require('koa-router')
const Content = require('../../models/contents')
const moment = require('moment')
const { pagingFormat } = require('../../utils')

const router = new Router()

router.get('/', async ctx => {

  const { size, index } = pagingFormat(ctx.query)
  const { tag_id, q = '' } = ctx.query
  const filter = [{ title: RegExp(q) }]

  if (tag_id !== undefined) filter.push({ tags: tag_id })

  const list = await Content.find({ $and: filter }, {title: 1, create_date: 1}).populate('tags').limit(size).skip(index)
  const contents = list.map(item => ({
    tags: item.tags,
    _id: item._id,
    title: item.title,
    createDate: moment(item.create_date).format('YYYY-MM-DD hh:mm')
  }))

  ctx.render('index', {
    contents
  })
})

module.exports = router
