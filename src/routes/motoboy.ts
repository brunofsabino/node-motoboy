import { Router } from 'express'
import { privateRoute } from '../config/passport'
import * as MotoboyController from '../controllers/motoboyControllers'

const router = Router()


router.post('/motoboy/:id', MotoboyController.create)
// router.get('/user', privateRoute, UserController.all)
// router.get('/user/:id', privateRoute, UserController.one)

// router.post('/user', UserController.create)


// router.put('/user/:id', privateRoute, UserController.update)

// router.delete('/user/:id', privateRoute, UserController.deleteUser)

export default router