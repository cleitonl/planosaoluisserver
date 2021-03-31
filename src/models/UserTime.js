const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment');

const UserTimeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  local: {type: String},
  date: { type: Date, unique: true },
  times: { type: Object},
  totalTimes: { type: String, default: "00:00" }
});

mongoose.set('debug', true);

UserTimeSchema.pre('save', function () {
  var userTimes = this;
  userTimes.totalTimes = "00:00"
  userTimes.times.map((time) => {
    if (Object.keys(time).length === 2) {
      let In = moment(time.in, "HH:mm")
      let Out = moment(time.out, "HH:mm")
      let diff = moment.utc(Out).diff(moment(In))
      userTimes.totalTimes = moment(userTimes.totalTimes, "HH:mm").add(moment.duration(diff)).format("HH:mm")
    }
  })
});

const UserTime = mongoose.model('UserTime', UserTimeSchema)

module.exports = UserTime;

/**
 * var sumIn = moment(currUserTime.times[currUserTime.times.length - 1].in, "HH:mm")
            var sumOut = moment(now.format("HH:mm"), "HH:mm")
            var diff = moment.utc(sumOut).diff(moment(sumIn))
            currUserTime.totalTimes = moment(currUserTime.totalTimes, "HH:mm").add(moment.duration(diff)).format("HH:mm")
 */