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

userRoutes.route('/working')
  .get(checkRole(['ADMIN']), usersControllers.findWorkingUser)

userRoutes.route('/:_id')
  .all(checkRole(['ADMIN', 'PUBLIC']))
  .put(usersControllers.updateUser)
  .delete(usersControllers.deleteUser)
module.exports = userRoutes;