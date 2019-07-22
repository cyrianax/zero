const mongoose = require('mongoose')
const config = require('../config')

module.exports = () => {
  mongoose.Promise = global.Promise
  mongoose.connect(config.db, { useNewUrlParser: true }).then(() => {
    console.log('::: Database has connected')
  }, err => {
    console.log(err)
  })

  return async (ctx, next) => {
    await next()
  }
}
