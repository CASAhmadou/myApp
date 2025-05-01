const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');

router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.get('/', auth, userCtrl.getAllUsers);
router.put('/:id', auth, userCtrl.updateUser);
router.delete('/:id', auth, userCtrl.deleteUser);

module.exports = router;