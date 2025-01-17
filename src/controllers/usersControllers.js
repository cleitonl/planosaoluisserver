const User = require('../models/User')
const mongoose = require('mongoose');
const moment = require('moment');

module.exports = {
  
  index(req, res) {
    return res.status(200).json({ ok: 'bem vindo A User' });
  },
 
  async createUser (req, res) {
    try {
      if (await User.findOne({ cpf: req.body.cpf })) {
        res.status(200).json({
          success: false,
          message: 'Cpf já em uso!'
        })
      } else {
        const user = new User(req.body)
        user.pis = ("000000000000" + req.body.pis).slice(-12)
        console.log(user.pis)

        await user.save()
        return res.status(201), res.json({
          success: true,
          message: 'Usuario criado!',
        })
      }
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },
  
  async findUser(req, res) {
    try {
      const user = await User.findById(req.user._id)
      res.status(200).json({
        success: true,
        data: user
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },
  
  async usersWorking(req, res) {
    try {
      const usersWorking = await User.countDocuments({ isWorking: true })
      const usersTotal = await User.countDocuments()
      res.status(200).json({
        success: true,
        data: { usersWorking, usersTotal }
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },
  
  async usersVacations(req, res) {
    let date = moment()

    try {
      const vacationInMonth = await User.countDocuments({
        'vacations.start': {
          $gte: date.startOf('month').format('YYYY-MM-DD[T00:00:00.000Z]'),
          $lte: date.endOf('month').format('YYYY-MM-DD[T00:00:00.000Z]')
        }
      })
      const vacationInNextMonth = await User.countDocuments({
        'vacations.start': {
          $gte: date.add(1, 'M').format('YYYY-MM-DD[T00:00:00.000Z]'),
          $lte: date.endOf('month').format('YYYY-MM-DD[T00:00:00.000Z]')
        }
      })
      res.status(200).json({
        success: true,
        data: { vacationInMonth, vacationInNextMonth }
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },

  async findAllUsers (req, res) {
    try {
      const user = await User.find().sort({ "fullName": 1 })
      res.status(200).json({
        success: true,
        data: user
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },

  async updateUser(req, res) {
    try {
      await User.findByIdAndUpdate(req.params._id, req.body)
      res.status(200).json({
        success: true,
        message: 'Usuario atualizado!'
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error
      })
    }
  },

  async deleteUser (req, res) {
    try {
      await User.findByIdAndDelete(req.params._id)
      res.status(201), res.json({
        success: true,
        message: 'Usuario excluido!',
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },

  async login(req, res) {

    try {
      const user = await User.findOne({ cpf: req.body.cpf });
      if (!user) {
        res.status(404).json({
          success: false,
          message: 'Usuario não encontrado!',
        })
      } else 
      user.comparePassword(req.body.password, (match) => {
        if (match) {
          const payload = {_id: user._id};
          const token = user.generateToken(payload);
          res.status(200).json({
            success: true,
            token: token,
            user: {
              _id: user._id,
              role: user.role,
            }
          });
        } else {
          res.status(400).json({
            success: false,
            message: 'Senha invalida!',
          });
        }
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error,
      })
    }
  },

  async updateVacations(req, res) {
    try {
      await User.findByIdAndUpdate(req.params._id, { vacations: req.body })
      res.status(200).json({
        success: true,
        message: 'Férias Atualizadas!'
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error
      })
    }
  },

  // now not utilizable
  async newUserVacations(req, res) {
    try {
      await User.findByIdAndUpdate(
        { _id: req.params._id },
        { $push: { vacations: req.body } },
        done
      )
      res.status(200).json({
        success: true,
        message: 'Férias Atualizadas!'
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error
      })
    }
  },

  // now not utilizable
  async findUserVacations(req, res) {
    let id = mongoose.Types.ObjectId(req.params._id);
    try {
      const vacations = await User.aggregate([
        {
          $match: { _id: id }
        },
        {
          $project: { vacations: 1 }
        },
      ])
      res.status(200).json({
        success: true,
        data: vacations,

      })
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error
      })
    }
  },

  async findUsersByCnpj(req, res) {
    try {
      const user = await User.find({ company: req.body.company, pis: { $ne: null } }, { _id: 0, fullName: 1, pis: 1 }).sort({ fullName: 1 })
      res.status(200).json({
        success: true,
        data: user
      })
    } catch (error) {
      res.status(400), res.json({
        success: false,
        message: error,
      })
    }
  },

}