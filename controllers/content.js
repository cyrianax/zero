const Content = require('../models/contents');

class ContentCtl {
	async create(ctx) {
		const content = await Content(ctx.request.body).save();

		ctx.body = content;
	}
	async find(ctx) {
		const contents = await User.find();
		ctx.body = contents;
	}
	async delete(ctx) {
		const content = await Content.findByIdAndRemove(ctx.params.id);
		ctx.body = content;
	}
	async update(ctx) {
		const content = await Content.findByIdAndUpdate(ctx.params.id);
		if(!content) ctx.throw(404, '内容不存在');
		ctx.body = content;
	}
	async findById(ctx) {
		const content = await Content.findById(ctx.params.id);
		if(!content) ctx.throw(404, '内容不存在');
		ctx.body = content;
	}
}

module.exports = new ContentCtl();
