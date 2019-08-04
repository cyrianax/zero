const Content = require('../models/contents');
const { pagingFormat } = require('../utils');

class ContentCtl {
	async create(ctx) {
		ctx.verifyParams({
			title: 'string',
			content: 'string',
			residence: { type: 'array', itemType: 'string', required: false },
		});

		const content = await Content(ctx.request.body).save();
		ctx.body = content;
	}
	async find(ctx) {
		const { size, index } = pagingFormat(ctx.query);
		let { tag_id, q = '' } = ctx.query;
		let filter = [{ title: RegExp(q) }];
		if (tag_id !== undefined) filter.push({ tags: tag_id });

		const contents = await Content.find({ $and: filter }).populate('tags').limit(size).skip(index);
		const count = await Content.count();
		ctx.body = {
			list: contents,
			count
		};
	}
	async delete(ctx) {
		let { ids = [] } = ctx.request.body;
		ctx.verifyParams({
			ids: 'array'
		});

		const content = await Content.remove({ _id: { $in: ids } });
		if (!content) ctx.throw(404, '文章不存在');
		ctx.status = 204;
	}
	async update(ctx) {
		ctx.verifyParams({
			title: { type: 'string', required: false },
			content: { type: 'string', required: false },
			residence: { type: 'array', itemType: 'string', required: false },
		});

		const content = await Content.findByIdAndUpdate(ctx.params.id, ctx.request.body);
		if (!content) ctx.throw(404, '文章不存在');
		ctx.body = content;
	}
	async findById(ctx) {
		const content = await Content.findById(ctx.params.id).populate('tags');
		if (!content) ctx.throw(404, '文章不存在');
		ctx.body = content;
	}
}


module.exports = new ContentCtl();
