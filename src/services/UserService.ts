import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { generateToken } from '../config/passport'

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
        const dataNewUser =  await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: bcrypt.hashSync(data.password, 10)
            }
        })
        if(dataNewUser) {
            const token = generateToken({ id: dataNewUser.id })
            return { dataNewUser, token}
        }
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
    },
    login: async(email: string, password: string) => {
        const user =  await prisma.user.findUnique({ where: { email }})
        if(user) {
            let hash = bcrypt.compareSync(password as string, user.password)
            if(hash) {
                const token = generateToken({ id: user.id })
                return { hash, token }
            }
        }
    },
    deleteUser: async(id: string) => {
        return await prisma.user.delete({ where: { id }})
    }
}