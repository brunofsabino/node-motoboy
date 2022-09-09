import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { MotoboyService } from '../services/MotoboyService'
import { RouteService } from '../services/RouteService'
import { ClientService } from "../services/ClientService";

export const all = async(req: Request, res: Response) => {
    const routes = await RouteService.findAll()
    if(routes) {
        res.status(200).json({routes})
    } else {
        res.json(400).json({ error: "Dados invalidos"})
    }
}
export const one = async(req: Request, res: Response) => {
    const { id } = req.params
    const route = await RouteService.findOne(id)
    if(route) {
        res.status(200).json({route})
    } else {
        res.json(400).json({ error: "Dados invalidos"})
    }
}
export const create = async(req: Request, res: Response) => {
    const { idClient } = req.params
    const { startRoute, endRoute, valueRoute, cep, requester } = req.body
    const client = await ClientService.findOne(idClient)
    // const motoboy = await MotoboyService.findOne(idMotoboy)
    if(client && startRoute && endRoute && valueRoute) {
        const route = await RouteService.create( {
            startRoute, 
            endRoute, 
            valueRoute: parseInt(valueRoute), 
            cep: client.cep, 
            clientId: client.id, 
            requester: requester ?? undefined,
            userId: client.userId
        })
        if(route) {
            res.status(200).json({ route })
        } else {
            res.json(400).json({ error: "Dados invalidos"})
        }
        
    } else {
        res.json(400).json({ error: "Dados invalidos"})
    }
}