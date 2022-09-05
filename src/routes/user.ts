import { Router } from 'express'
import { privateRoute } from '../config/passport'
import * as UserController from '../controllers/userControllers'

const router = Router()


router.get('/user', privateRoute, UserController.all)
router.get('/user/:id', privateRoute, UserController.one)

router.post('/user', UserController.create)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)

router.put('/user/:id', privateRoute, UserController.update)

router.delete('/user/:id', privateRoute, UserController.deleteUser)

export default router