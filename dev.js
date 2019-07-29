const nodemon = require('nodemon')
const chalk = require('chalk')
const cp = require('child_process')

// 开发模式欢迎界面
console.log(chalk.gray.bold('////////////////////////////////////////////'))
console.log(chalk.gray.bold('///                                      ///'))
console.log(chalk.gray.bold('///   ' + chalk.green.bold('Start development mode, enjoy it') + '   ///'))
console.log(chalk.gray.bold('///                                      ///'))
console.log(chalk.gray.bold('////////////////////////////////////////////'))
console.log('\n')

// 通过Nodemon运行应用
nodemon({
	script: './app.js',
	ext: '*',
	watch: [
		'api',
		'controllers',
		'models',
		'middleware',
		'view'
	],
}).on('start', () => {
	console.log(chalk.cyan.bold('--- Server has started at 7777 ---'))
}).on('quit', () => {
	console.log(chalk.blue.bold('--- Server has quited ---'))
	process.exit()
}).on('restart', files => {
	console.log(chalk.blue.bold(`--- Server restarted due to: ${files ? files : 'manual operation'} ---`))
	if (files[0].match('view/assets')) {
		const child = cp.spawn('node', ['dev.build.js'])
		child.stdout.on('data', data => {console.log(data.toString())})
		child.stderr.on('data', data => {console.log(data)})
	}
})