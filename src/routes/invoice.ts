import { Router } from 'express'
import { privateRoute } from '../config/passport'
import * as InvoiceController from '../controllers/invoiceControllers'

const router = Router()

router.post('/invoice/', privateRoute, InvoiceController.create)
// router.get('/client', privateRoute, ClientController.all)
// router.get('/client/:idClient', privateRoute, ClientController.one)
// router.put('/client/:idClient', privateRoute, ClientController.update)
// router.delete('/client/:idClient', privateRoute, ClientController.deleteClient)


export default router