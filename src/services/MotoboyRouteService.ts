import { PrismaClient } from "@prisma/client"
import { UserService } from "./UserService";

const prisma = new PrismaClient()

type PropCreate = {
    motoboyId: string,
    routeId: string,
    clientId: string,
    nameMotoboy: string,
    celularMotoboy: string,
    requesterRoute: string,
    commentsEndRoute: string,
    clientName: string,
    cepStartRoute?: string,
    cepEndRoute?: string,
    startRoute?: string,
    endRoute: string,
    createdAt: Date,
    valueRoute: number,
    description: string
}

export const MotoboyRouteService = {
    findAll: async() => {
        return await prisma.motoboyRoute.findMany({})
    },
    findOne: async(id: string) =>{
        return await prisma.motoboyRoute.findUnique({ where: { id} })
    },
    findOneRoute: async(id: string) => {
        return await prisma.motoboyRoute.findMany({ where: { routeId: id } }) 
    },
    delete: async(id: string) => {
        return await prisma.motoboyRoute.delete({ where: { id } }) 
    },
    create: async(data: PropCreate) => {
        return await prisma.motoboyRoute.create({ data })
    }
}