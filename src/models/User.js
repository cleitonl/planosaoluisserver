const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const { Schema } = mongoose;

const { saltRounds } = require('../config/configs.json');
const { secret, expiresIn } = require('../config/configs.json');

const UserSchema = new Schema({
  fullName: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  email: { type: String },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  company: { type: String },
  isWorking: { type: Boolean },
  role: {
    type: String,
    required: true,
    enum: ['ADMIN', 'PUBLIC'],
    default: 'PUBLIC'
  },
});

//mongoose.set('debug', true);

UserSchema.pre('save', function () {
  var user = this;
  try {
    var hash = bcrypt.hashSync(user.password, saltRounds);
    user.password = hash;
  } catch (error) {
    console.log(error)
  }
});

UserSchema.pre('findOneAndUpdate', async function (next) {
  try {
    const userUpdates = this.getUpdate();
    if (!userUpdates.password) return next();
    this._update.password = await bcrypt.hashSync(
      userUpdates.password,
      saltRounds
    )
  } catch (error) {
    console.log(error)
  }
});

UserSchema.method({
  comparePassword: async function (password, callback) {
    var user = this;
    console.log(password, user.password)
    const match = await bcrypt.compare(password, user.password);
    try {
      callback(match);
    } catch (error) {
      console.log(error);
    }
  },

  generateToken: function (payload) {
    return jwt.sign(payload, secret,
      {
        expiresIn
      }
    );
  }
});

const User = mongoose.model('User', UserSchema)

module.exports = User;