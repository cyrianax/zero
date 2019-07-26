const Tag = require('../models/tags');
const Content = require('../models/contents');

class TagCtl {
	async create(ctx) {
		ctx.verifyParams({
			name: 'string'
		});

		const tag = await Tag.findOne({name: ctx.request.body.name});
		if(tag) ctx.throw(409, 'tag已存在');
		ctx.body = await Tag(ctx.request.body).save();
	}
	async find(ctx) {
		ctx.body = await Tag.find();
	}
	async delete(ctx) {
		const tag = await Tag.findByIdAndRemove(ctx.params.id);
		if(!tag) ctx.throw(404, 'tag不存在');
		ctx.status = 204;
	}
	async update(ctx) {
		const tag = await Tag.findByIdAndUpdate(ctx.params.id, ctx.request.body);
		if(!tag) ctx.throw(404, 'tag不存在');
		ctx.body =  tag;
	}
	async contentFindById(ctx) {
		const tag = await Tag.findById(ctx.params.id);
		if(!tag) ctx.throw(404, 'tag不存在');
		ctx.body =  await Content.find({tags: ctx.params.id}).populate('tags');
	}
}

module.exports = new TagCtl();
