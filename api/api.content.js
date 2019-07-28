
const KoaRouter = require('koa-router');
const {
	create,
	delete: del,
	update,
	find,
	findById
} = require('../controllers/content');
const router = new KoaRouter({ prefix: '/content' });

// 新增文章
router.post('/', create);
// 删除文章
router.delete('/', del);
// 修改文章
router.put('/:id', update);
// 查询文章列表
router.get('/', find);
// 查询指定文章
router.get('/:id', findById);

module.exports = router;
