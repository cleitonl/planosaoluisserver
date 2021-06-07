const express = require('express')
const checkRole = require('../middlewares/auth');
const timeRequest = express.Router()

const timesRequestsControllers = require('../controllers/timesRequestsControllers')

timeRequest.route('/')
  .all(checkRole(['ADMIN', 'PUBLIC']))
  .post(timesRequestsControllers.createTimeRequest)

timeRequest.route('/listAll')
  .all(checkRole(['ADMIN']))
  .get(timesRequestsControllers.listAllTimeRequest)

timeRequest.route('/Countpendings')
  .all(checkRole(['ADMIN']))
  .get(timesRequestsControllers.countPendingTimeRequests)

timeRequest.route('/:_id')
  .all(checkRole(['ADMIN', 'PUBLIC']))
  .put(timesRequestsControllers.updateTimeRequest)

module.exports = timeRequest;