import { Router } from 'express'
import { privateRoute } from '../config/passport'
import * as RouteController from '../controllers/routeControllers'

const router = Router()

router.post('/route/:idClient', privateRoute, RouteController.create)

router.get('/route', privateRoute, RouteController.all)
router.get('/route/:id', privateRoute, RouteController.one)



// router.put('/motoboy/:id', privateRoute, MotoboyController.update)

// router.delete('/motoboy/:id', privateRoute, MotoboyController.deleteMotoboy)


export default router