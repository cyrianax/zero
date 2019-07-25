
const KoaRouter = require('koa-router');

const {
	create,
	delete: del,
	update,
	find,
	findById
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
// 查询指定tag
router.get('/:id', findById);

module.exports = router;
