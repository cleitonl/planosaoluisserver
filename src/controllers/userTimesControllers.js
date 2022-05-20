const UserTime = require('../models/UserTime');
const User = require('../models/User')
const mongoose = require('mongoose');
const moment = require('moment');

module.exports = {
  index(req, res) {
    return res.status(200).json({ ok: 'bem vindo A UserTime' });
  },
 
  async postUserTime(req, res) {
    const now = moment().subtract(3, 'hours');
    try {
      const userTime = await UserTime.findOne({ userId: req.user._id }).sort({ "date": -1 })
      const lastTime = userTime && userTime.times[userTime.times.length - 1]
      const timeLength = userTime && await Object.keys(lastTime).length
      
      if (userTime === null) {
        let newUserTime = new UserTime()
        newUserTime.date = now.format('YYYY-MM-DD[T00:00:00.000Z]');
        newUserTime.times = [{ in: now.format('HH:mm') }];
        newUserTime.userId = req.user._id;
        await User.findByIdAndUpdate(req.user._id, { isWorking: true })
        await newUserTime.save()
        req.io.emit('time', `${req.user.name} bateu o ponto de entrada!`)
      } else {
        if (timeLength === 2 || timeLength === 0) {
          if (userTime && moment.utc(userTime.date).format('YYYY-MM-DD') === (now.format('YYYY-MM-DD'))) {
            let updatedUserTime = new UserTime(userTime);
            updatedUserTime.times.push({ in: now.format('HH:mm') })
            await User.findByIdAndUpdate(req.user._id, { isWorking: true })
            await updatedUserTime.save()
            req.io.emit('time', `${req.user.name} bateu o ponto de entrada!`)
          } else {
            let newUserTime = new UserTime()
            newUserTime.date = now.format('YYYY-MM-DD[T00:00:00.000Z]');
            newUserTime.times = [{ in: now.format('HH:mm') }];
            newUserTime.userId = req.user._id;
            await newUserTime.save()
            await User.findByIdAndUpdate(req.user._id, { isWorking: true })
            req.io.emit('time', `${req.user.name} bateu o ponto de entrada!`)
          }
        } else {
          let updatedUserTime = new UserTime(userTime);
          updatedUserTime.times[userTime.times.length - 1].out = now.format("HH:mm")
          await updatedUserTime.save()
          await User.findByIdAndUpdate(req.user._id, { isWorking: false })
          req.io.emit('time', `${req.user.name} bateu o ponto de saída!`)
        }
      }
      res.status(200).json({
        success: true,
        message: 'Ponto Cadastrado!'
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },
  
  async postNewUserTime(req, res) {
    const date = moment(req.body.date);
    try {
      const user = new UserTime(req.body)
      user.date = date.format('YYYY-MM-DD[T00:00:00.000Z]')
      await user.save()

      res.status(200).json({
        success: true,
        message: 'Ponto Cadastrado!'
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },

  async getAllUserTimes(req, res) {
    try {
      const currUserTimes = await UserTime.find({ userId: req.user._id }).sort({ "date": -1 }).limit(30)
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
  
  async getUserTimesInMonth(req, res) {
    console.log(req.body)
    try {
      const currUserTimes = await UserTime.aggregate([
        {
          $addFields: {
            "month": { $month: '$date' },
            "year": { $year: '$date' }
          }
        },
        {
          $match: {
            userId: mongoose.Types.ObjectId(req.user._id),
            year: req.body.year,
            month: req.body.month
          }
        },
        { $sort: { date: 1 } }
      ])
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

  async getTimesToday(req, res) {
    var today = new Date(moment().format('YYYY-MM-DD[T00:00:00.000Z]'));
    try {
      const currUserTimes = await UserTime.aggregate([
        {
          $match: { date: { $gte: new Date(today) } }
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user"
          }
        },
        {
          $unwind: "$user"
        },
        {
          $project: {
            times: 1,
            date: 1,
            totalTimes: 1,
            user: { fullName: 1 }
          }
        },
        {
          $sort: {
            user: 1
          }
        }
        ])
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

  async getTimesDayOff(req, res) {
    let date = moment()
    try {
      const TimesDayOff = await UserTime.countDocuments({
        'date': {
          $eq: date.format('YYYY-MM-DD[T00:00:00.000Z]')
        },
        'times.in': {
          $eq: 'Folga'
        }
      })
      res.status(200).json({
        success: true,
        data: { TimesDayOff }
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },

  async putUserTime(req, res) {
    try {
      const currUserTime = await UserTime.findById(req.params._id)
      currUserTime.date = req.body.date
      currUserTime.times = req.body.times
      currUserTime.save()
        res.status(200).json({
          success: true,
          data: currUserTime,
          message: 'Ponto Atualizado!'
        })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },

  async deleteUserTime(req, res) {
    try {
      await UserTime.findByIdAndDelete(req.params._id)
      res.status(200).json({
        success: true,
        message: 'Ponto removido!'
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },

  //------------------------------------

  async getLastCurrUserTime(req, res) {
    try {
      const lastUserTime = await UserTime.findOne({ userId: req.user._id, date: moment().format('YYYY-MM-DD[T00:00:00.000Z]') }).limit(1);
      res.status(200).json({
        lastUserTime
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },

  async getLastFiveUserTimes(req, res) {
    try {
      const lastUserTime = await UserTime.find({ userId: req.user._id }).sort({ "date": -1 }).limit(5);
      res.status(200).json({
        lastUserTime
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },

  async newPostUserTime(req, res) {
    const reqTime = moment(req.body.dateTime).format();
    const location = req.body.location;
    var message = 'Ponto Cadastrado!'
    try {
      const lastUserRegistry = await UserTime
        .findOne({ userId: req.user._id })
        .sort({ "date": -1 })
      const lastTimeRegistry = lastUserRegistry?.times.length || {}

      if (moment(lastUserRegistry?.date).add(1, 'd').format('YYYY-MM-DD') === (moment(reqTime).format('YYYY-MM-DD'))) {
        if (lastTimeRegistry === 0 || lastTimeRegistry === 2) {
          let updatedUserTime = new UserTime(lastUserRegistry);
          updatedUserTime.times.push({ in: moment(reqTime).format('HH:mm'), location })
          await User.findByIdAndUpdate(req.user._id, { isWorking: true })
          await updatedUserTime.save()
          req.io.emit('time', `${req.user.name} bateu o ponto de entrada!`)
        } else if (lastTimeRegistry <= 3) {
          let updatedUserTime = new UserTime(lastUserRegistry);
          updatedUserTime.times.push({ out: moment(reqTime).format('HH:mm'), location })
          await updatedUserTime.save()
          await User.findByIdAndUpdate(req.user._id, { isWorking: false })
          req.io.emit('time', `${req.user.name} bateu o ponto de saída!`)
        }
      } else {
        let newUserTime = new UserTime()
        newUserTime.date = moment(reqTime).format('YYYY-MM-DD[T00:00:00.000Z]');
        newUserTime.times = [{ in: moment(reqTime).format('HH:mm'), location }];
        newUserTime.userId = req.user._id;
        await newUserTime.save()
        await User.findByIdAndUpdate(req.user._id, { isWorking: true })
        req.io.emit('time', `${req.user.name} bateu o ponto de entrada!`)
      }

      res.status(200).json({
        success: true,
        message: message
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error.data,
      })
    }
  }
}