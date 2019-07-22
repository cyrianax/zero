const Koa = require('koa')
const config = require('./config')
const useMiddleware = require('./middleware')

const app = new Koa()
app.name = 'zero'

useMiddleware(app)

app.listen(config.port)
