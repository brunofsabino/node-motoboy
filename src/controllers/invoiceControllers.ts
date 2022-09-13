import { Request, Response } from 'express'
import { UserService } from '../services/UserService'
import { ClientService } from '../services/ClientService'
import { MotoboyService } from '../services/MotoboyService'
import { RouteService } from '../services/RouteService'
import { InvoiceService } from '../services/InvoiceService'

export const create = async(req: Request, res: Response) => {
    const { idClient, idMotoboy, idRoute } = req.body
    const client = await ClientService.findOne(idClient)
    const motoboy = await MotoboyService.findOne(idMotoboy)
    const route = await RouteService.findOne(idRoute)
    if(client && motoboy && route) {
        const newInvoice = await InvoiceService.create({
            
            motoboyId: motoboy.id,
            cnpjId: client.id,
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
            numberBoard: motoboy.numberBoard ?? 'null'
        })
        if(newInvoice) {
            res.status(200).json({ invoice: newInvoice})
        } else {
            res.status(400).json({ error: "Dados invalidos"})
        }
    } else {
        res.status(400).json({ error: "Dados invalidos"})
    }
   
}