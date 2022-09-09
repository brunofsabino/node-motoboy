import { PrismaClient } from "@prisma/client"
import { MotoboyService } from "./MotoboyService";
import { UserService } from "./UserService";

const prisma = new PrismaClient()

type PropCreate = {
    startRoute?: string, 
    endRoute: string,
    valueRoute: number,
    cep?: string,
    clientId: string,
    requester?: string,
    userId: string
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
    }
}