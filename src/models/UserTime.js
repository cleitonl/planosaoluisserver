const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserTimeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  local: {type: String},
  date: { type: Date, unique: true },
  times: { type: Object},
  totalTimes: { type: String, default: "00:00" }
});

mongoose.set('debug', true);

const UserTime = mongoose.model('UserTime', UserTimeSchema)

module.exports = UserTime;