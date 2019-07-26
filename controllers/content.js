const Content = require('../models/contents');

class ContentCtl {
	async create(ctx) {
		ctx.verifyParams({
			title: 'string',
			content: 'string',
			residence: {type: 'array', itemType: 'string', required: false},
		});

		const content = await Content(ctx.request.body).save();
		ctx.body = content;
	}
	async find(ctx) {
		const contents = await Content.find().populate('tags');
		ctx.body = contents;
	}
	async delete(ctx) {
		const content = await Content.findByIdAndRemove(ctx.params.id);
		if(!content) ctx.throw(404, '文章不存在');
		ctx.status = 204;
	}
	async update(ctx) {
		ctx.verifyParams({
			title: {type: 'string', required: false},
			content: {type: 'string', required: false},
			residence: {type: 'array', itemType: 'string', required: false},
		});

		const content = await Content.findByIdAndUpdate(ctx.params.id, ctx.request.body);
		if(!content) ctx.throw(404, '文章不存在');
		ctx.body = content;
	}
	async findById(ctx) {
		const content = await Content.findById(ctx.params.id);
		if(!content) ctx.throw(404, '文章不存在');
		ctx.body = content;
	}
}


module.exports = new ContentCtl();
