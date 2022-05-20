const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment');

const UserTimeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date },
  times: { type: Object},
  totalTimes: { type: String, default: "00:00" }
});

mongoose.set('debug', true);

UserTimeSchema.pre('save', function () {
  var userTimes = this;
  userTimes.totalTimes = "00:00"
  if (userTimes.times?.length === 2) {
    let In = moment(userTimes.times[0]?.in, "HH:mm")
    let Out = moment(userTimes.times[1]?.out, "HH:mm")
    let diff = moment.utc(Out).diff(moment(In))
    userTimes.totalTimes = moment(userTimes.totalTimes, "HH:mm").add(moment.duration(diff)).format("HH:mm")
  } else
    if (userTimes.times?.length === 4) {
      let In1 = moment(userTimes.times[0]?.in, "HH:mm")
      let Out1 = moment(userTimes.times[1]?.out, "HH:mm")
      let diff1 = moment.utc(Out1).diff(moment(In1))
      userTimes.totalTimes = moment(userTimes.totalTimes, "HH:mm").add(moment.duration(diff1)).format("HH:mm")

      let In2 = moment(userTimes.times[2]?.in, "HH:mm")
      let Out2 = moment(userTimes.times[3]?.out, "HH:mm")
      let diff2 = moment.utc(Out2).diff(moment(In2))
      userTimes.totalTimes = moment(userTimes.totalTimes, "HH:mm").add(moment.duration(diff2)).format("HH:mm")
    }
});

const UserTime = mongoose.model('UserTime', UserTimeSchema)

module.exports = UserTime;

/**
 * var sumIn = moment(currUserTime.times[currUserTime.times.length - 1].in, "HH:mm")
            var sumOut = moment(now.format("HH:mm"), "HH:mm")
            var diff = moment.utc(sumOut).diff(moment(sumIn))
            currUserTime.totalTimes = moment(currUserTime.totalTimes, "HH:mm").add(moment.duration(diff)).format("HH:mm")
 */