const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const contentSchema = new Schema({
	"__v": { type: String, select: false },
	title: { type: String, required: true },
	description: String,
	author: String,
	tags: { type: [{ type: Schema.Types.ObjectId, ref: 'Tag' }] },
	create_date: { type: Date, default: Date.now },
	update_date: { type: Date, default: Date.now },
	// 审核
	statusId: { type: Number, default: 0 },
	content: { type: String, required: true },
	read_quantity: { type: Number, default: 0 }
}, { timestamps: { updatedAt: 'update_date', createdAt: 'create_date' } });

// 定义Model
const model = Mongoose.model('Content', contentSchema)

// 导出数据模型
module.exports = model
