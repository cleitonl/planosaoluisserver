const express = require('express')
const checkRole = require('../middlewares/auth');
const userTimeRoutes = express.Router()

const userTimeControllers = require('../controllers/userTimesControllers')

userTimeRoutes.route('/')
  .all(checkRole(['ADMIN', 'PUBLIC']))
  .get(userTimeControllers.getAllUserTimes)
  .post(userTimeControllers.postUserTimes)
//  .put(userTimeControllers.updateUser)
//  .delete(userTimeControllers.deleteUser)
userTimeRoutes.route('/:_id')
  .all(checkRole(['ADMIN']))
  .get(userTimeControllers.getUserTimes)
//  .put(userTimeControllers.updateUser)
//  .delete(userTimeControllers.deleteUser)

module.exports = userTimeRoutes;