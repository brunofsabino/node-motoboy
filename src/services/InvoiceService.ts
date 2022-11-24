import { PrismaClient } from "@prisma/client"
import { UserService } from "./UserService";

const prisma = new PrismaClient()

type PropCreate = {
    motoboyId: string,
    cnpjId: string,
    cnpj: string,
    date: Date,
    description: string,
    corporateName: string,
    startRoute: string,
    endRoute: string,
    idRoute: string,
    nameFantasy: string,
    requester: string,
    telephone: string,
    valueRoute: number,
    nameMotoboy: string,
    numberBoard?: string,
}
type PropUpdate = {
    motoboyId?: string,
    cnpjId?: string,
    cnpj?: string,
    description?: string,
    corporateName?: string,
    startRoute?: string,
    endRoute?: string,
    idRoute?: string,
    nameFantasy?: string,
    requester?: string,
    telephone?: string,
    valueRoute?: number,
    nameMotoboy?: string,
    numberBoard?: string
}

export const InvoiceService = {
    findAll: async() => {
        return await prisma.invoice.findMany({})
    },
    findOne: async(id: string) => {
        return await prisma.invoice.findUnique( {where: { id }})
    },
    create: async(data: PropCreate) => {
        return await prisma.invoice.create({ data })
    },
    delete: async(id: string) => {
        return await prisma.invoice.delete({ where: { id }})
    },
    update: async( id: string, data: PropUpdate) => {
        // return await prisma.invoice.updateMany({ 
        //     where: { id },
        //     client: {
        //         corporateName: data.corporateName
        //     }
        // })
    }
}