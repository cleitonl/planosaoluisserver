const express = require('express')
const checkRole = require('../middlewares/auth');
const userTimeRoutes = express.Router()

const userTimeControllers = require('../controllers/userTimesControllers')

userTimeRoutes.route('/')
  .all(checkRole(['ADMIN', 'PUBLIC']))
  .get(userTimeControllers.getAllUserTimes)
  .post(userTimeControllers.postUserTime)
//  .put(userTimeControllers.updateUser)
//  .delete(userTimeControllers.deleteUser)
userTimeRoutes.route('/user/:userId')
  .all(checkRole(['ADMIN']))
  .post(userTimeControllers.getUserTimes)

userTimeRoutes.route('/:_id')
  .all(checkRole(['ADMIN']))
  .post(userTimeControllers.postNewUserTime)
  .put(userTimeControllers.putUserTime)
  .delete(userTimeControllers.deleteUserTime)

module.exports = userTimeRoutes;