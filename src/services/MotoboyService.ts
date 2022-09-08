import { PrismaClient } from "@prisma/client"
import { UserService } from "./UserService";

const prisma = new PrismaClient()

type PropCreate = {
    name: string,
    celular: string,
    userId: string,
    email?: string
}
type PropUpdate = {
    name?: string,
    celular?: string,
    email?: string
}

export const MotoboyService = {
    findOne: async(id: string) => {
        return await prisma.motoboy.findUnique({ where: { id }})
    },
    findAll: async() => {
        return await prisma.motoboy.findMany({})
    },
    findByName: async(name: string) => {
        return await prisma.motoboy.findUnique({ where: { name }})
    },
    create: async( data: PropCreate) => {
        return await prisma.motoboy.create({ data }) 
    },
    update: async( id: string, data: PropUpdate) => {
        const motoboy = await prisma.motoboy.findUnique({ where: { id }})
        if(motoboy) {
            return await prisma.motoboy.update({
                where: { id: motoboy.id },
                data: { 
                    name: data.name,
                    celular: data.celular,
                    email: data.email
                }
            })
        }
    },
    delete: async(id: string) => {
        const motoboy = await prisma.motoboy.findUnique({ where: { id }})
        if(motoboy) {
            return await prisma.motoboy.delete({ where: { id: motoboy.id }})
        }
    }
}
