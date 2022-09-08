import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { MotoboyService } from '../services/MotoboyService'
import { RouteService } from '../services/RouteService'
import { ClientService } from "../services/ClientService";

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