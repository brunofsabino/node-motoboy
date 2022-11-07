import { Request, Response } from "express";
import { RouteService } from "../services/RouteService";
import { MotoboyService } from "../services/MotoboyService";
import { MotoboyRouteService } from '../services/MotoboyRouteService'

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
    const { motoboyId, routeId } = req.params
    const motoboy = await MotoboyService.findOne(motoboyId)
    const route = await RouteService.findOne(routeId)
    if(route && motoboy) {
        const motoboyRoute = await MotoboyRouteService.create({
            motoboyId: motoboy.id,
            routeId: route.id,
            nameMotoboy: motoboy.name,
            clientName: route.clientName,
            cepStartRoute: route.cepStartRoute ?? '',
            cepEndRoute: route.cepEndRoute ?? '',
            startRoute: route.startRoute ?? '',
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