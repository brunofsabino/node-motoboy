import { Router } from 'express'
import { privateRoute } from '../config/passport'
import * as ClientController from '../controllers/clientControllers'

const router = Router()

router.post('/client/:id', privateRoute, ClientController.create)
router.get('/client', privateRoute, ClientController.all)
router.get('/client/:idClient', privateRoute, ClientController.one)
router.put('/client/:idClient', privateRoute, ClientController.update)
router.delete('/client/:idClient', privateRoute, ClientController.deleteClient)

// router.get('/motoboy', privateRoute, MotoboyController.all)
// router.get('/motoboy/:id', privateRoute, MotoboyController.one)



// router.put('/motoboy/:id', privateRoute, MotoboyController.update)

// router.delete('/motoboy/:id', privateRoute, MotoboyController.deleteMotoboy)


export default router