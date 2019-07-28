const User = require('../models/users');
const jsonwebtoken = require('jsonwebtoken');
const config = require('../config');

class UserCtl {
	async create(ctx) {
		ctx.verifyParams({
			name: 'string',
			password: 'string'
		});

		const user = await User.findOne({ name: ctx.request.body.name });
		if (user) ctx.throw(409, '用户已存在');
		ctx.body = await User(ctx.request.body).save();
	}
	async find(ctx) {
		const users = await User.find();
		ctx.body = users;
	}
	async delete(ctx) {
		const user = await User.findByIdAndRemove(ctx.params.id);
		if (!user) ctx.throw(404, '用户不存在!');
		ctx.status = 204;
	}
	async update(ctx) {
		const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body);
		if (!user) ctx.throw(404, '用户不存在!');
		ctx.body = user;
	}
	async findById(ctx) {
		const user = await User.findById(ctx.params.id);
		if (!user) ctx.throw(404, '用户不存在!');
		ctx.body = user;
	}
	async login(ctx) {
		ctx.verifyParams({
			name: 'string',
			password: 'string'
		});
		const user = await User.findOne(ctx.request.body);

		if (user) {
			let token = jsonwebtoken.sign({ id: user._id, password: user.password }, config.secret, { expiresIn: '1d' });
			ctx.body = { token };
		} else {
			ctx.throw(401, '用户名或密码错误');
		}
	}
}

module.exports = new UserCtl();
