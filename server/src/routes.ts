import express, { response } from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'
const routes = express.Router()
const classesController = new ClassesController()
const connectionsController = new ConnectionsController()

routes.get('/', async (req, res) => {
  return res.json({
    API: 'Proffy API',
    Version: '0.1v',
    Description: 'Find a class or give a class if you are awesome',
    Author: 'Pedro Henrique',
    Contact: 'https://github.com/ghostdovahkiin'
  })
})

routes.post('/aulas', classesController.create)
routes.get('/aulas', classesController.index)
routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes