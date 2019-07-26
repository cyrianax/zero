
const KoaRouter = require('koa-router');

const {
	create,
	delete: del,
	update,
	find,
	contentFindById
} = require('../controllers/tag');
const router = new KoaRouter({prefix: '/tag'});

// 新增tag
router.post('/', create);
// 删除tag
router.delete('/:id', del);
// 修改tag
router.put('/:id', update);
// 查询tag列表
router.get('/', find);
// tag id查询文章
router.get('/:id', contentFindById);

module.exports = router;
