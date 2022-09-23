import { PrismaClient } from "@prisma/client"
import { UserService } from "./UserService";

const prisma = new PrismaClient()

type PropCreate = {
    name: string,
    celular: string,
    address?: string,
    userId: string,
    email?: string,
    cpf?: string,
    rg?: string,
    numberBoard?: string,
    cityBoard?: string
}
type PropUpdate = {
    name?: string,
    celular?: string,
    email?: string,
    cpf?: string,
    rg?: string,
    address?: string,
    numberBoard?: string,
    cityBoard?: string
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
    findByCelular: async(celular: string) => {
        return await prisma.motoboy.findUnique({ where: { celular: celular }})
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
                    email: data.email,
                    cpf: data.cpf,
                    rg: data.rg,
                    numberBoard: data.numberBoard,
                    cityBoard: data.cityBoard
                }
            })
        }
    },
    deleteBoy: async(id: string) => {
        return await prisma.motoboy.delete({ where: {id}})
    }
}
