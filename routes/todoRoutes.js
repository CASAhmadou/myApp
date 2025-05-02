const exporess = require('express');
const router = exporess.Router();
const todoCtrl = require('../controllers/todoController');

router.get('/', todoCtrl.getTodos);
router.post('/', todoCtrl.createTodo);
router.put('/:id', todoCtrl.updateTodo);
router.delete('/:id', todoCtrl.deleteTodo);

module.exports = router;