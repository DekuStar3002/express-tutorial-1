const express = require('express');
const { userMiddleware } = require('../middlewares/index');
const { userController } = require('../controllers/index');
const router = express.Router();

router.route('/')
  .post(userMiddleware.extractBodyContentMiddleware, userController.saveUser);

module.exports = router;