import { PrismaClient } from "@prisma/client"
import { MotoboyService } from "./MotoboyService";
import { UserService } from "./UserService";

const prisma = new PrismaClient()

type PropCreate = {
    startRoute?: string, 
    endRoute: string,
    valueRoute: number,
    cepStartRoute?: string,
    cepEndRoute?: string,
    clientName: string,
    clientId: string,
    commentsEndRoute?: string,
    requester?: string,
    userId: string,
    description: string,
    done?: boolean
    fieldLogradouroRoute?: string,
    fieldLogradouroRoute2?: string,
    fieldComplementoRoute?: string,
    fieldComplementoRoute2?: string,
    fieldBairroRoute?: string,
    fieldBairroRoute2?: string,
    fieldLocalidadeRoute?: string,
    fieldLocalidadeRoute2?: string,
    fieldNumeroRoute?: string,
    fieldNumeroRoute2?: string,
    motoboyId: string,
    nameMotoboy: string
}
type PropUpdate = {
    startRoute?: string, 
    endRoute?: string,
    valueRoute?: number,
    cepStartRoute?: string,
    cepEndRoute?: string,
    clientName?: string,
    clientId?: string,
    commentsEndRoute?: string,
    requester?: string,
    description?: string,
    done?: boolean,
    fieldLogradouroRoute?: string,
    fieldLogradouroRoute2?: string,
    fieldComplementoRoute?: string,
    fieldComplementoRoute2?: string,
    fieldBairroRoute?: string,
    fieldBairroRoute2?: string,
    fieldLocalidadeRoute?: string,
    fieldLocalidadeRoute2?: string,
    fieldNumeroRoute?: string,
    fieldNumeroRoute2?: string,
    motoboyId?: string,
    createdAt?: Date,
    nameMotoboy?: string
}

export const RouteService = {
    findAll: async() => {
        return await prisma.route.findMany({})
    },
    findAllDoneTrue: async(date: Date, dateMaisUm: Date) => {
        return await prisma.route.findMany({
            where: {
                done: true,
                createdAt: {
                    gte: new Date(date),
                    lt: new Date(dateMaisUm)
                }
            }
        })
    },
    findAllDoneFalse: async() => {
        return await prisma.route.findMany({
            where: {
                done: false
            }
        })
    },
    findOne: async(id: string) => {
        return await prisma.route.findUnique({ where: { id }})
    },
    create: async( data: PropCreate) => {
       return await prisma.route.create({ data })
    },
    update: async( id: string, data: PropUpdate) => {
        return await prisma.route.update({
            where: { id },
            data
        })
    },
    deleteRouteRelation: async(id: string) => {
        return await prisma.route.update({ 
            where: { id },
            data: {
               motoboyRoute : {
                    delete: {}
               } 
            }
            }
        )
    },
    deleteRoute: async(id: string) => {
        return await prisma.route.delete({
            where: { id }
        })
    }
}