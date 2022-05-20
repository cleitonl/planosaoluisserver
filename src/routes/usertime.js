const express = require('express')
const checkRole = require('../middlewares/auth');
const userTimeRoutes = express.Router()

const userTimeControllers = require('../controllers/userTimesControllers')

userTimeRoutes.route('/')
  .all(checkRole(['ADMIN', 'PUBLIC']))
  .get(userTimeControllers.getAllUserTimes)
  .post(userTimeControllers.newPostUserTime)
//  .put(userTimeControllers.updateUser)
//  .delete(userTimeControllers.deleteUser)

userTimeRoutes.route('/today')
  .all(checkRole(['ADMIN']))
  .get(userTimeControllers.getTimesToday)

userTimeRoutes.route('/lastCurrUserTime')
  .all(checkRole(['ADMIN', 'PUBLIC']))
  .get(userTimeControllers.getLastCurrUserTime)

userTimeRoutes.route('/lastFiveUserTimes')
  .all(checkRole(['ADMIN', 'PUBLIC']))
  .get(userTimeControllers.getLastFiveUserTimes)

userTimeRoutes.route('/timesInMonth')
  .all(checkRole(['ADMIN', 'PUBLIC']))
  .post(userTimeControllers.getUserTimesInMonth)

userTimeRoutes.route('/dayOff')
  .all(checkRole(['ADMIN']))
  .get(userTimeControllers.getTimesDayOff)

userTimeRoutes.route('/:_id')
  .all(checkRole(['ADMIN']))
  .post(userTimeControllers.postNewUserTime)
  .put(userTimeControllers.putUserTime)
  .delete(userTimeControllers.deleteUserTime)

module.exports = userTimeRoutes;