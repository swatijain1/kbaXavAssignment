const Express = require('express')
const Router = Express.Router()
const someAuth = require('./auth')
const controller = require('./controller')

Router.get('/',someAuth, controller.getUser)
Router.post('/', someAuth, controller.addUser)

module.exports = Router