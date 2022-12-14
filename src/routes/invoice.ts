import { Router } from 'express'
import { privateRoute } from '../config/passport'
import * as InvoiceController from '../controllers/invoiceControllers'

const router = Router()

router.post('/invoice/:idClient/:idMotoboy/:idRoute', privateRoute, InvoiceController.create)
router.get('/invoice/:idClient/:dataInitial/:dataFinal', privateRoute, InvoiceController.all)
router.get('/invoice/:idInvoice', privateRoute, InvoiceController.one)
// router.put('/invoice/:idInvoice', privateRoute, InvoiceController.update)
router.delete('/invoice/:idInvoice', privateRoute, InvoiceController.remove)


export default router