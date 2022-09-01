import { Router } from 'express'
import * as UserController from '../controllers/userControllers'

const router = Router()

router.get('/', (req, res) => {
    res.send('oi')
})

router.get('/user', UserController.all)
router.get('/user/:id', UserController.one)

router.post('/user', UserController.create)

router.put('/user/:id', UserController.update)

export default router