import { Router } from 'express'
import { privateRoute } from '../config/passport'
import * as MotoboyRouteController from '../controllers/motoboyRouteController'

const router = Router()

router.get('/motoboyRoute', privateRoute, MotoboyRouteController.all)
router.get('/motoboyRoute/:id', privateRoute, MotoboyRouteController.one)

router.post('/motoboyRoute/:motoboyId/:routeId/:clientId', privateRoute, MotoboyRouteController.create)
// router.put('/motoboyRoute/:id', privateRoute, MotoboyRouteController.update)

// router.delete('/motoboyRoute/:id', privateRoute, MotoboyRouteController.deleteRoute)


export default router