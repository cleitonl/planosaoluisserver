const express = require('express')
const checkRole = require('../middlewares/auth');
const timeRequest = express.Router()

const timesRequestsControllers = require('../controllers/timesRequestsControllers')

timeRequest.route('/')
  .all(checkRole(['ADMIN', 'PUBLIC']))
  .get(timesRequestsControllers.listAllTimeRequest)
  .post(timesRequestsControllers.createTimeRequest)

timeRequest.route('/:_id')
  .all(checkRole(['ADMIN', 'PUBLIC']))
  .put(timesRequestsControllers.updateTimeRequest)

module.exports = timeRequest;