import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()
type PropCreate = {
    name: string,
    email: string,
    password: string
}
type PropUpdate = {
    name?: string,
    password?: string
}
export const UserService = {
    findOne: async(id: string) => {
        return await prisma.user.findUnique({ where: { id }})
    },
    findAll: async() => {
        return await prisma.user.findMany({})
    },
    create: async(data: PropCreate) => {
        return await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: bcrypt.hashSync(data.password, 10)
            }
        })
    },
    findByEmail: async(email: string) => {
        return await prisma.user.findUnique({ where: { email }})
    },
    update: async(id: string, data: PropUpdate) => {
        return await prisma.user.update({
            where: { id },
            data : {
                name : data.name,
                password : bcrypt.hashSync(data.password as string, 10)
            }
        })
    }
}