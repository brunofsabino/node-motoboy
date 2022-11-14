import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { MotoboyService } from '../services/MotoboyService'
import { RouteService } from '../services/RouteService'
import { ClientService } from "../services/ClientService";
import { Client } from "@prisma/client";

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
    const { startRoute, endRoute, valueRoute, cepStartRoute, cepEndRoute, requester, motoboyId, commentsEndRoute, fieldBairroRoute2, fieldNumeroRoute, fieldNumeroRoute2, fieldLocalidadeRoute, fieldLocalidadeRoute2, fieldLogradouroRoute, fieldLogradouroRoute2, fieldComplementoRoute, fieldComplementoRoute2, fieldBairroRoute } = req.body
    const client = await ClientService.findOne(idClient)
    console.log(startRoute, endRoute, valueRoute, cepStartRoute, cepEndRoute,  requester, commentsEndRoute, fieldBairroRoute2, fieldNumeroRoute, fieldNumeroRoute2, fieldLocalidadeRoute, fieldLocalidadeRoute2, fieldLogradouroRoute, fieldLogradouroRoute2, fieldComplementoRoute, fieldComplementoRoute2, fieldBairroRoute)
    if(client && startRoute && endRoute && valueRoute) {
        const route = await RouteService.create( {
            startRoute, 
            endRoute, 
            valueRoute: parseInt(valueRoute), 
            cepStartRoute: cepStartRoute ?? 'null', 
            cepEndRoute: cepEndRoute ?? 'null', 
            clientId: client.id, 
            clientName: client.nameFantasy,
            requester: requester ?? undefined,
            commentsEndRoute: commentsEndRoute ?? undefined,
            userId: client.userId,
            description: `Objeto retirado na ${startRoute} e entregue na ${endRoute}`,
            fieldLogradouroRoute: fieldLogradouroRoute ?? '',
            fieldLogradouroRoute2 : fieldLogradouroRoute2 ?? '',
            fieldComplementoRoute : fieldComplementoRoute ?? '',
            fieldComplementoRoute2: fieldComplementoRoute2 ?? '',
            fieldBairroRoute      : fieldBairroRoute ?? '',
            fieldBairroRoute2     : fieldBairroRoute2 ?? '',
            fieldLocalidadeRoute  : fieldLocalidadeRoute ?? '',
            fieldLocalidadeRoute2 : fieldLocalidadeRoute2 ?? '',
            fieldNumeroRoute      : fieldNumeroRoute ?? '',
            fieldNumeroRoute2     : fieldNumeroRoute2 ?? '',
            motoboyId: motoboyId ?? ''
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
export const update = async(req: Request, res: Response) => {
    const { id } = req.params
    const { requester, clientId, startRoute, endRoute, day, month, year, valueRoute } = req.body
    const route = await RouteService.findOne(id)
    
    let createdAt = new Date()
    if(route) {
        if(day && month && year) {
            createdAt = new Date(`${year}-${month}-${day}`)
        }
        if(requester || clientId || startRoute || endRoute  || valueRoute || createdAt) {
            // let client = await ClientService.findOne(clientId)
            const routeUpdated = await RouteService.update(route.id, {
                requester: requester ? requester : route.requester,
                clientId: clientId ? clientId : route.clientId,
                startRoute: startRoute ? startRoute : route.startRoute,
                endRoute: endRoute ? endRoute : route.endRoute,
                valueRoute: valueRoute ? parseInt(valueRoute) : route.valueRoute,
                createdAt: createdAt ? createdAt : route.createdAt
            })
            if(routeUpdated) {
                res.status(200).json({route: routeUpdated})
            } else {
                res.json(400).json({ error: "Dados invalidos"})
            }
        } else {
            res.json(400).json({ error: "Dados invalidos"})
        }
    } else {
        res.json(400).json({ error: "Dados invalidos"})
    }
}
export const done = async(req: Request, res: Response) => {
    const { id } = req.params
    const route = await RouteService.findOne(id)
    if(route) {
        
        const routeUpdated = await RouteService.update(route.id, {
           done: !route.done
        })
        if(routeUpdated) {
            res.status(200).json({route: routeUpdated})
        } else {
            res.json(400).json({ error: "Dados invalidos"})
        }
    } else {
        res.json(400).json({ error: "Dados invalidos"})
    }
}
export const deleteRoute = async(req: Request, res: Response) => {
    const { id } = req.params
    const route = await RouteService.findOne(id)
    if(route) {
        await RouteService.deleteRoute(route.id)
        res.status(200).json({success: true})
    } else {
        res.json(400).json({ error: "Dados invalidos"})
    }
}