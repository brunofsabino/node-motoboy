import { Request, Response } from 'express'
import { UserService } from '../services/UserService'
import { ClientService } from '../services/ClientService'
import { MotoboyService } from '../services/MotoboyService'
import { RouteService } from '../services/RouteService'
import { InvoiceService } from '../services/InvoiceService'

export const create = async(req: Request, res: Response) => {
    const { idClient, idMotoboy, idRoute } = req.params
    const client = await ClientService.findOne(idClient)
    const motoboy = await MotoboyService.findOne(idMotoboy)
    const route = await RouteService.findOne(idRoute)
    if(client && motoboy && route) {
        let numberInvoice = 35674
        const newInvoice = await InvoiceService.create({
            
            motoboyId: motoboy.id,
            date: route.createdAt,
            cnpjId: client.id,
            cnpj: client.cnpj,
            description: route.description,
            corporateName: client.corporateName,
            endRoute: route.endRoute,
            idRoute: route.id,
            nameFantasy: client.nameFantasy,
            requester: route.requester ?? 'null',
            startRoute: route.startRoute ?? 'null',
            telephone: client.telephone,
            valueRoute: route.valueRoute,
            nameMotoboy: motoboy.name,
            numberBoard: motoboy.numberBoard ?? 'null',
            
        })
        if(newInvoice) {
            newInvoice.numberInvoice += 23210
            res.status(200).json({ invoice: newInvoice})
        } else {
            res.status(400).json({ error: "Dados invalidos"})
        }
    } else {
        res.status(400).json({ error: "Dados invalidos"})
    }
   
}
export const remove = async(req: Request, res: Response) => {
    const { idInvoice } = req.params
    const invoice = await InvoiceService.findOne(idInvoice)
    if(invoice) {
        const invoiceDelete = await InvoiceService.delete(invoice.id)
        if(invoiceDelete) {
            res.status(200).json({ sucess: true})
        } else {
            res.status(400).json({ error: "Dados invalidos"})
        }
    } else {
        res.status(400).json({ error: "Dados invalidos"})
    }
}
export const all = async(req: Request, res: Response) => {
    const { idClient, dataInitial, dataFinal } = req.params
    console.log(idClient, dataInitial, dataFinal)
    const client = await ClientService.findOne(idClient)
    if(client) {
        const initialDate = new Date(dataInitial)
        const finalDate = new Date(dataFinal)
        console.log(client.corporateName, initialDate, finalDate)
        let all = await InvoiceService.findAll(client.corporateName, initialDate, finalDate)
        if(all) {
           let invoices = [...all]
           invoices.forEach(invoice => invoice.numberInvoice += 23210 )
                res.status(200).json({invoices})
        } else {
            res.status(400).json({ error: "Dados invalidos"})
        }
    }
    
}
export const one = async(req: Request, res: Response) => {
    const { idInvoice } = req.params
    const invoice = await InvoiceService.findOne(idInvoice)
    if(invoice) {
        res.status(200).json({ invoice })
    } else {
        res.status(400).json({ error: "Dados invalidos"})
    }
}
// export const update = async(req: Request, res: Response) => {
//     const { idInvoice } = req.params
//     const { idClient, idMotoboy, idRoute } = req.body
//     const client = await ClientService.findOne(idClient)
//     const motoboy = await MotoboyService.findOne(idMotoboy)
//     const route = await RouteService.findOne(idRoute)
//     const invoice = await InvoiceService.findOne(idInvoice)
//     if(invoice) {
//         if(client ) { // || motoboy || route
//             const newInvoice = await InvoiceService.update(invoice.id, {
//                 // motoboyId: motoboy.id ?? invoice.id,
//                 cnpjId: client.id,
//                 cnpj: client.cnpj,
//                 // description: route.description,
//                 corporateName: client.corporateName,
//                 // endRoute: route.endRoute,
//                 // idRoute: route.id,
//                 nameFantasy: client.nameFantasy,
//                 // requester: route.requester ?? 'null',
//                 // startRoute: route.startRoute ?? 'null',
//                 telephone: client.telephone,
//                 // valueRoute: route.valueRoute,
//                 // nameMotoboy: motoboy.name,
//                 // numberBoard: motoboy.numberBoard ?? 'null'
//             })
//             if(newInvoice) {
//                 res.status(200).json({ invoice: newInvoice})
//             } else {
//                 res.status(400).json({ error: "Dados invalidos"})
//             }
//         } else {
//             res.status(400).json({ error: "Dados invalidos"})
//         }
//     } else {
//         res.status(400).json({ error: "Dados invalidos"})
//     }
// }