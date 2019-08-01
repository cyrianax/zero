const glob = require('glob')
const stylus = require('stylus')
const fs = require('fs')
const path = require('path')
const shell = require('shelljs')

fs.mkdirSync(__dirname + '/static/assets/css', { recursive: true })
shell.cp(__dirname + '/view/assets/css/common/*.css', __dirname + '/static/assets/css')
shell.cp('-R', __dirname + '/view/assets/img', __dirname + '/static/assets')
shell.cp('-R', __dirname + '/view/assets/font', __dirname + '/static/assets')

const files = glob.sync('./view/assets/css/*.styl')
const stylusRenderPromises = files.map(file => {
  const str = fs.readFileSync(file).toString()
  return new Promise((resolve, reject) => {
    stylus.render(str, {
      filename: file
    }, function (err, css) {
      if (err) reject(err)
      resolve(css)
    })
  })
})

Promise.all(stylusRenderPromises).then(result => {
  result.forEach((str, i) => {
    const basename = path.basename(files[i], '.styl')
    fs.writeFileSync(__dirname + `/static/assets/css/${basename}.css`, str)
  })
  console.log('::: Stylus file has compiled');
}).catch(err => {
  throw err
})
