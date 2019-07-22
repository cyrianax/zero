const fs = require('fs')
const path = require('path')
const handlebars = require('handlebars')

const getTemplate = name => fs.readFileSync(path.resolve(__dirname, `../view/${name}/template.html`)).toString('utf-8')

handlebars.registerPartial('header', getTemplate('header'))

module.exports = () => {
  return async (ctx, next) => {
    ctx.render = (name, state) => {
      const tpl = getTemplate(name)
      const hbs = handlebars.compile(tpl)
      ctx.body = hbs(state)
    }
    await next()
  }
}