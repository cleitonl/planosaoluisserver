const express = require('express')
const checkRole = require('../middlewares/auth');
const userRoutes = express.Router()

const usersControllers = require('../controllers/usersControllers')

userRoutes.route('/login')
  .all()
  .post(usersControllers.login)

userRoutes.route('/')
  .get(checkRole(['ADMIN', 'PUBLIC']), usersControllers.findUser)
  .post(checkRole(['ADMIN']), usersControllers.createUser)

userRoutes.route('/all')
  .get(checkRole(['ADMIN', 'PUBLIC']), usersControllers.findAllUsers)

userRoutes.route('/usersWorking')
  .get(checkRole(['ADMIN']), usersControllers.usersWorking)

userRoutes.route('/usersVacation')
  .get(checkRole(['ADMIN']), usersControllers.usersVacations)

userRoutes.route('/vacations/:_id')
  .put(checkRole(['ADMIN']), usersControllers.updateVacations)
  .get(checkRole(['ADMIN']), usersControllers.findUserVacations)

userRoutes.route('/:_id')
  .all(checkRole(['ADMIN', 'PUBLIC']))
  .put(usersControllers.updateUser)
  .delete(usersControllers.deleteUser)
module.exports = userRoutes;