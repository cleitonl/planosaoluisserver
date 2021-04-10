const User = require('../models/User')
const UserTime = require('../models/UserTime');
const moment = require('moment');
const mongoose = require('mongoose');

module.exports = {
  
  index(req, res) {
    return res.status(200).json({ ok: 'bem vindo A UserTime' });
  },
 
  async postUserTime(req, res) {
    const now = moment();
    try {
      const userTime = await UserTime.findOne({ userId: req.user._id }).sort({ "date": -1 })
      const lastTime = userTime && userTime.times[userTime.times.length - 1]
      const timeLength = userTime && await Object.keys(lastTime).length
      
      if (userTime === null) {
        let newUserTime = new UserTime()
        newUserTime.date = now.format('YYYY-MM-DD[T00:00:00.000Z]');
        newUserTime.times = [{ in: now.format('HH:mm') }];
        newUserTime.userId = req.user._id;
        await newUserTime.save()
        await User.findByIdAndUpdate(req.user._id, { isWorking: true })
      } else {
        if (timeLength === 2 || timeLength === 0) {
          console.log(moment.utc(userTime.date).format('YYYY-MM-DD[T00:00:00.000Z]') + '   ------     ' + now.format('YYYY-MM-DD[T00:00:00.000Z]'))
          if (userTime && moment.utc(userTime.date).format('YYYY-MM-DD') === (now.format('YYYY-MM-DD'))) {
            userTime.times.push({ in: now.format('HH:mm') })
          await User.findByIdAndUpdate(req.user._id, {isWorking: true})
          } else {
            let newUserTime = new UserTime()
            newUserTime.date = now.format('YYYY-MM-DD[T00:00:00.000Z]');
            newUserTime.times = [{ in: now.format('HH:mm') }];
            newUserTime.userId = req.user._id;
            await newUserTime.save()
            await User.findByIdAndUpdate(req.user._id, { isWorking: true })
          }
        } else {
          userTime.times[userTime.times.length - 1].out = now.format("HH:mm")
          await User.findByIdAndUpdate(req.user._id, { isWorking: false })
        }

        const updatedUserTime = new UserTime(userTime);
        await updatedUserTime.save()
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
      const currUserTimes = await UserTime.find({ userId: req.user._id }).sort({ "date": -1 }).limit(15)
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
      const currUserTimes = await UserTime.aggregate([
        {
          $addFields: {
            "month": { $month: '$date' },
            "year": { $year: '$date' }
          }
        },
        {
          $match: {
            userId: mongoose.Types.ObjectId(req.params.userId),
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
    var today = moment.utc().startOf('days').toDate();
    try {
      const currUserTimes = await UserTime.aggregate([
        {
          $match: { date: { $gte: today } }
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
      console.log(error)
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


}