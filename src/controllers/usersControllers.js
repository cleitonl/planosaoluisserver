const User = require('../models/User')

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
  
  async findUser (req, res) {
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
  
  async UserResume (req, res) {
    try {
      const usersWorking = await User.count({ isWorking: true })
      const usersTotal = await User.count()
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

  
}