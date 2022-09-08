import { PrismaClient } from "@prisma/client"
import { MotoboyService } from "./MotoboyService";
import { UserService } from "./UserService";

const prisma = new PrismaClient()

type PropCreate = {
    nameFantasy: string,
    userId: string,
    cnpj: string,
    telephone: string,
    address: string,
    cep: string,
    city: string,
    corporateName: string
}
type PropUpdate = {
    nameFantasy?: string,
    cnpj?: string,
    telephone?: string,
    address?: string,
    cep?: string,
    city?: string,
    corporateName?: string
}

export const ClientService = {
    findAll: async() => {
        return await prisma.client.findMany({})
    },
    findOne: async(id: string) => {
        return await prisma.client.findUnique({ where: { id }})
    },
    findByEmail: async(cnpj: string) => {
        return await prisma.client.findUnique({ where: { cnpj }})
    },
    create: async(data: PropCreate) => {
        return await prisma.client.create( { 
            data
        })
    },
    update: async(id: string, data: PropUpdate) => {
        return await prisma.client.update({ 
            where: { id },
            data 
        })
    },
    deleteClient: async(id: string) => {
        return await prisma.client.delete({ where: { id }})
    }
}