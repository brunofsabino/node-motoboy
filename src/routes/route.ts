import { Router } from 'express'
import { privateRoute } from '../config/passport'
import * as RouteController from '../controllers/routeControllers'

const router = Router()

router.post('/route/:idClient', privateRoute, RouteController.create)

// router.get('/motoboy', privateRoute, MotoboyController.all)
// router.get('/motoboy/:id', privateRoute, MotoboyController.one)



// router.put('/motoboy/:id', privateRoute, MotoboyController.update)

// router.delete('/motoboy/:id', privateRoute, MotoboyController.deleteMotoboy)


export default router