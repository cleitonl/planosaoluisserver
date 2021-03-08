const User = require('../models/User')
const UserTime = require('../models/UserTime');
const moment = require('moment');

module.exports = {
  
  index(req, res) {
    return res.status(200).json({ ok: 'bem vindo A UserTime' });
  },
 
  async postUserTimes(req, res) {
    const now = moment().subtract(3, 'h');
    try {
      const currUserTime = await UserTime.findOne({ userId: req.user._id }).sort({ "date": -1 })
      if (currUserTime && moment(currUserTime.date).isSame(now, 'day')) {
        const lastTime = await currUserTime.times[currUserTime.times.length - 1]
        const timeLength = Object.keys(lastTime).length
        if (timeLength === 2) {
          currUserTime.times.push({ in: now.format('HH:mm') })
          await User.findByIdAndUpdate(req.user._id, {isWorking: true})
        } else {
          currUserTime.times[currUserTime.times.length - 1].out = now.format("HH:mm")
          await User.findByIdAndUpdate(req.user._id, {isWorking: false})
            var sumIn = moment(currUserTime.times[currUserTime.times.length - 1].in, "HH:mm")
            var sumOut = moment(now.format("HH:mm"), "HH:mm")
            var diff = moment.utc(sumOut).diff(moment(sumIn))
            currUserTime.totalTimes = moment(currUserTime.totalTimes, "HH:mm").add(moment.duration(diff)).format("HH:mm")
        }

        const updatedUserTime = new UserTime(currUserTime);
        await updatedUserTime.save()
        res.status(200).json({
          success: true,
          message: 'Ponto Cadastrado!'
        })
      } else {
        const userTime = new UserTime()
        userTime.date = now;
        userTime.times = [{ in: now.format('HH:mm') }];
        userTime.userId = req.user._id;
        await userTime.save()
        await User.findByIdAndUpdate(req.user._id, {isWorking: true})
        res.status(201), res.json({
          success: true,
          message: 'Novo Ponto Cadastrado!',
        })
      }
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },
  
  async getAllUserTimes(req, res) {
    try {
      const currUserTimes = await UserTime.find({ userId: req.user._id }).sort({ "date": -1 })
        res.status(200).json({
          success: true,
          data: currUserTimes
        })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },
  
  async getUserTimes(req, res) {
    try {
      const currUserTimes = await UserTime.find({ userId: req.params._id }).sort({ "date": -1 })
        res.status(200).json({
          success: true,
          data: currUserTimes
        })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },
}