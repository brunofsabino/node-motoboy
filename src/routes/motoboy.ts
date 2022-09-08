import { Router } from 'express'
import { privateRoute } from '../config/passport'
import * as MotoboyController from '../controllers/motoboyControllers'

const router = Router()

router.get('/motoboy', privateRoute, MotoboyController.all)
router.get('/motoboy/:id', privateRoute, MotoboyController.one)

router.post('/motoboy/:id', privateRoute, MotoboyController.create)

router.put('/motoboy/:id', privateRoute, MotoboyController.update)

router.delete('/motoboy/:id', privateRoute, MotoboyController.deleteMotoboy)


export default router