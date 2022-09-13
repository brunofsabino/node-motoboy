import { PrismaClient } from "@prisma/client"
import { UserService } from "./UserService";

const prisma = new PrismaClient()

type PropCreate = {
    
    motoboyId: string,
    cnpjId: string,
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
    numberBoard?: string
}

export const InvoiceService = {
    create: async(data: PropCreate) => {
        return await prisma.invoice.create({ data })
    }
}