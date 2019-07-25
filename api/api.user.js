
const KoaRouter = require('koa-router');
const config = require('../config');
const {
	create,
	delete: del,
	update,
	find,
	findById,
	login,
} = require('../controllers/users');
const router = new KoaRouter({prefix: '/user'});
const jwt = require('koa-jwt');
const auth = jwt({secret: config.secret});

// 新增用户
router.post('/', create);
// 删除用户
router.delete('/:id', auth, del);
// 修改用户
router.put('/:id', auth, update);
// 查询用户列表
router.get('/', find);
// 查询指定用户
router.get('/:id', findById);
// 用户登录
router.post('/login', login);

module.exports = router;
