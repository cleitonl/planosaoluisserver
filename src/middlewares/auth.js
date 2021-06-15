const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const User = require('../models/User')

const {secret} = require('../config/configs.json');

const checkRole = (checkRoles) => async (req, res, next) => {
  const autHeader = req.headers.authorization;
  if (!autHeader) {
    return res.status(401), res.json({
      success: false,
      message: 'Token não encontrado!',
    });
  }
  
  try {
    var [, token] = autHeader.split(' ');
    var decodedToken = await promisify(jwt.verify)(token, secret);
    
    var user = await User.findById(decodedToken._id) || null;
    
    req.user = {
      _id: user._id,
      name: user.fullName.split(' ')[0]
    }

    var userRole = user.role
    if (userRole && !(checkRoles.some(role => role === userRole))) {
      res.status(401).json({
        success: false,
        message: 'Usuário sem permissão!'
        });
    } else {
      next();
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = checkRole;