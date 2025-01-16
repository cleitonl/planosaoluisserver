const express = require('express')
const checkRole = require('../middlewares/auth');
const userTimeRoutes = express.Router()

const userTimeControllers = require('../controllers/userTimesControllers')
const newModel = require('../controllers/parseNewModel')

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

userTimeRoutes.route('/timesInMonth/:_id')
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

userTimeRoutes.route('/parseToNewModel')
  .all(checkRole(['ADMIN', 'PUBLIC']))
  .get(newModel.parseNewModel)

userTimeRoutes.route('/afd/generate')
  .all(checkRole(['ADMIN']))
  .post(userTimeControllers.generateAfd)

userTimeRoutes.route('/afd/download/:cnpj')
  .all(checkRole(['ADMIN']))
  .get(userTimeControllers.downloadAfd)

module.exports = userTimeRoutes;