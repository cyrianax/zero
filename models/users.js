const { model, Schema } = require('mongoose');

const userSchema = new Schema({
	"__v": { type: String, select: false },
	name: { type: String, required: true },
	last_login_date: { type: String, required: true, default: Date.now },
	create_date: { type: Date, required: true, default: Date.now },
	password: { type: String, required: true, select: false }
}, { timestamps: { createdAt: 'create_date', updatedAt: 'last_login_date' }, });

module.exports = model('User', userSchema);
