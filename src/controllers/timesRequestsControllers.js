const TimeRequest = require('../models/TimeRequest');
const UserTime = require('../models/UserTime');


module.exports = {
  index(req, res) {
    return res.status(200).json({ ok: 'bem vindo A timeRequests' });
  },

  async createTimeRequest(req, res) {
    try {
      const timeRequest = new TimeRequest(req.body)
      timeRequest.userId = req.user._id

      await timeRequest.save()
      return res.status(201), res.json({
        success: true,
        message: 'Solicitação enviada!',
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },

  async updateTimeRequest(req, res) {
    try {
      const timeRequest = await TimeRequest.findById(req.params._id)
      timeRequest.status = req.body.status
      if (req.body.status === 'Aprovado') {
        const currUserTime = await UserTime.findById(req.body.timeId)
        currUserTime.date = req.body.date
        currUserTime.times = req.body.times
        currUserTime.save()
      }

      await timeRequest.save()

      return res.status(200), res.json({
        success: true,
        message: 'Solicitação atualizada!',
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },

  async listAllTimeRequest(req, res) {
    try {
      const timeRequest = await TimeRequest.aggregate([
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
            timeId: 1,
            date: 1,
            times: 1,
            type: 1,
            status: 1,
            motivation: 1,
            user: { fullName: 1, cpf: 1 }
          }
        },
        {
          $sort: {
            date: -1
          }
        }
      ])
      return res.status(200), res.json({
        success: true,
        data: timeRequest,
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },

  async countPendingTimeRequests(req, res) {
    try {
      const response = await TimeRequest.aggregate([
        {
          $match: {
            status: "Pendente",
          }
        },
        {
          $group: {
            _id: null,
            count: { $sum: 1 }
          }
        },
        {
          $project: {
            _id: 0,
            count: 1
          }
        }
      ])
      return res.status(200), res.json({
        success: true,
        data: response[0],
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  }
}