import { Request, Response } from "express";
import { RouteService } from "../services/RouteService";
import { MotoboyService } from "../services/MotoboyService";
import { MotoboyRouteService } from '../services/MotoboyRouteService'
import { ClientService } from "../services/ClientService";

export const all = async (req: Request, res: Response) => {
    const routesBoys = await MotoboyRouteService.findAll()
    if(routesBoys) {
        res.status(200).json({ routes: routesBoys })
    } else {
        res.status(404).json({ error: 'Dados invalidos'})
    }
}
export const one = async (req: Request, res: Response) => {
    const { id } = req.params
    const routesBoy = await MotoboyRouteService.findOne(id)
    if(routesBoy) {
        res.status(200).json({ route: routesBoy })
    } else {
        res.status(404).json({ error: 'Dados invalidos'})
    }
}

export const create = async (req: Request, res: Response) => {
    const { motoboyId, routeId, clientId } = req.params
    const motoboy = await MotoboyService.findOne(motoboyId)
    const route = await RouteService.findOne(routeId)
    const client = await ClientService.findOne(clientId)
    if(route && motoboy && client) {
        const motoboyRoute = await MotoboyRouteService.create({
            motoboyId: motoboy.id,
            clientId: client.id,
            routeId: route.id,
            nameMotoboy: motoboy.name,
            celularMotoboy: motoboy.celular,
            clientName: route.clientName,
            cepStartRoute: route.cepStartRoute ?? '',
            cepEndRoute: route.cepEndRoute ?? '',
            startRoute: route.startRoute ?? '',
            requesterRoute: route.requester ?? '',
            commentsEndRoute: route.commentsEndRoute ?? '',
            endRoute: route.endRoute,
            createdAt: route.createdAt,
            valueRoute: route.valueRoute,
            description: route.description
        })
        res.status(200).json({ route: motoboyRoute })
    } else {
        res.status(404).json({ error: 'Dados invalidos'})
    }
}

// export const deleteRoute = async(req: Request, res: Response) => {
//     const { id } = req.params
//     const idMotoboyRoute = await MotoboyRouteService.findOneIdRoute(id)
// }