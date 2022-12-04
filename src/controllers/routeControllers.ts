import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { MotoboyService } from '../services/MotoboyService'
import { RouteService } from '../services/RouteService'
import { ClientService } from "../services/ClientService";
import { MotoboyRouteService } from "../services/MotoboyRouteService";
import { Client } from "@prisma/client";

export const all = async(req: Request, res: Response) => {
    const routes = await RouteService.findAll()
    if(routes) {
        res.status(200).json({routes})
    } else {
        res.json(400).json({ error: "Dados invalidos"})
    }
}
export const allDate = async(req: Request, res: Response) => {
    const { idBoy, dataInitial, dataFinal } = req.params
    const boy = await MotoboyService.findOne(idBoy)
    if(boy) {
        const initialDate = new Date(dataInitial)
        const finalDate = new Date(dataFinal)
        let routes = await RouteService.findAllDate(boy.id, initialDate, finalDate)
        if(routes) {
           res.status(200).json({routes})
        } else {
            res.status(400).json({ error: "Dados invalidos"})
        }
    }
    
}

export const allDoneFalse = async(req: Request, res: Response) => {
    const routes = await RouteService.findAllDoneFalse()
    if(routes) {
        res.status(200).json({routes})
    } else {
        res.json(400).json({ error: "Dados invalidos"})
    }
}
export const allDoneTrue = async(req: Request, res: Response) => {
    let { date  } = req.params
    let dateTime = new Date(date)
    let createdAt = new Date(date)
    let createdAt2 = new Date(createdAt.setDate(createdAt.getDate() + 1))
    const routes = await RouteService.findAllDoneTrue( dateTime, createdAt2)  
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
    const motoboy = await MotoboyService.findOne(motoboyId)
    if(client && startRoute && endRoute && valueRoute && motoboy) {
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
            motoboyId: motoboyId ?? '',
            nameMotoboy: motoboy.name
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
    const { startRoute, endRoute, valueRoute, cepStartRoute, day, month, year, cepEndRoute, motoboyName, requester, clientId, motoboyId, commentsEndRoute, fieldBairroRoute2, fieldNumeroRoute, fieldNumeroRoute2, fieldLocalidadeRoute, fieldLocalidadeRoute2, fieldLogradouroRoute, fieldLogradouroRoute2, fieldComplementoRoute, fieldComplementoRoute2, fieldBairroRoute } = req.body

    const route = await RouteService.findOne(id)
    const client = await ClientService.findOne(clientId)
    let createdAt = new Date()
    if(route && client) {
        if(day && month && year) {
            createdAt = new Date(`${year}-${month}-${day}`)
        }
        if( startRoute || endRoute  || valueRoute  ) {
            // let client = await ClientService.findOne(clientId)
            const routeUpdated = await RouteService.update(route.id, {
                cepStartRoute: cepStartRoute ?? route.cepStartRoute,
                cepEndRoute: cepEndRoute ?? route.cepEndRoute,
                commentsEndRoute: commentsEndRoute ?? route.commentsEndRoute,
                clientName: client.nameFantasy ?? '',
                fieldBairroRoute2: fieldBairroRoute2 ?? route.fieldBairroRoute2,
                fieldNumeroRoute: fieldNumeroRoute ?? route.fieldNumeroRoute,
                fieldNumeroRoute2: fieldNumeroRoute2 ?? route.fieldNumeroRoute2,
                fieldLocalidadeRoute: fieldLocalidadeRoute ?? route.fieldLocalidadeRoute,
                fieldLocalidadeRoute2: fieldLocalidadeRoute2 ?? route.fieldLocalidadeRoute2,
                fieldLogradouroRoute: fieldLogradouroRoute ?? route.fieldLogradouroRoute,
                fieldLogradouroRoute2: fieldLogradouroRoute2 ?? route.fieldLogradouroRoute2,
                fieldComplementoRoute: fieldComplementoRoute ?? route.fieldComplementoRoute,
                fieldComplementoRoute2: fieldComplementoRoute2 ?? route.fieldComplementoRoute2,
                fieldBairroRoute: fieldBairroRoute ?? route.fieldBairroRoute,
                motoboyId: motoboyId ?? '',
                description: `Objeto retirado na ${startRoute} e entregue na ${endRoute}`,
                requester: requester ?? route.requester,
                clientId: clientId ?? route.clientId,
                startRoute: startRoute ?? route.startRoute,
                endRoute: endRoute ?? route.endRoute,
                valueRoute: parseInt(valueRoute) ?? route.valueRoute,
                createdAt: createdAt ?? route.createdAt,
                nameMotoboy: motoboyName ?? route.nameMotoboy
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
        const motoboyRoute = await MotoboyRouteService.findOneRoute(route.id)
        if(motoboyRoute) {
            await MotoboyRouteService.delete(motoboyRoute[0].id)
            await RouteService.deleteRoute(route.id)
            res.status(200).json({success: true})
        }
    } else {
        res.json(400).json({ error: "Dados invalidos"})
    }
}