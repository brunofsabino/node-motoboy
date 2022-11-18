import { Router } from 'express'
import { privateRoute } from '../config/passport'
import * as RouteController from '../controllers/routeControllers'

const router = Router()

router.post('/route/:idClient', privateRoute, RouteController.create)

router.get('/route', privateRoute, RouteController.all)
router.get('/route/done/false', privateRoute, RouteController.allDoneFalse)
router.get('/route/done/true', privateRoute, RouteController.allDoneTrue)
router.get('/route/:id', privateRoute, RouteController.one)

router.put('/route/:id', privateRoute, RouteController.update)
router.put('/route/done/:id', privateRoute, RouteController.done)

router.delete('/route/:id', privateRoute, RouteController.deleteRoute)


export default router