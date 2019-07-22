const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const schema = new Schema({
	title: String,
	description: String,
	author: String,
	tags: {
		type: Array,
		default: []
	},
	createDate: {
		type: Date,
		default: Date.now
	},
	publishDate: Date,
	statusId: {
		type: Number,
		default: 0
	},
	content: String
})

// 定义Model
const model = Mongoose.model('content', schema)

// 导出数据模型
module.exports = model
