const mongoose = require('mongoose');
const { Schema } = mongoose;

const TimeRequestSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  timeId: { type: Schema.Types.ObjectId, ref: 'UserTime', required: true },
  date: { type: Date },
  type: { type: String },
  status: { type: String },
  times: { type: Object },
  motivation: { type: String }
});

mongoose.set('debug', true);

const TimeRequest = mongoose.model('TimeRequest', TimeRequestSchema)

module.exports = TimeRequest;
