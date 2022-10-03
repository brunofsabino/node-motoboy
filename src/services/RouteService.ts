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
    requester?: string,
    userId: string,
    description: string,
    done?: boolean
}
type PropUpdate = {
    startRoute?: string, 
    endRoute?: string,
    valueRoute?: number,
    cep?: string,
    clientId?: string,
    requester?: string,
    createdAt?: Date,
    done?: boolean
}

export const RouteService = {
    findAll: async() => {
        return await prisma.route.findMany({})
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
    deleteRoute: async(id: string) => {
        return await prisma.route.delete({ where: { id }})
    }
}