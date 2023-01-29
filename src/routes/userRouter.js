const express = require('express');
const { userMiddleware } = require('../middlewares/index');
const { userController } = require('../controllers/index');
const router = express.Router();

router.route('/')
  .get(userController.getAllUsers)
  .post(userMiddleware.extractBodyContentMiddleware, userController.saveUser);
router.route('/:id')
  .get(userMiddleware.extractIdMiddleware, userController.getUserById);
module.exports = router;