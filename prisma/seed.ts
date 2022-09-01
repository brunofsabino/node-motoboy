import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
    await prisma.client.deleteMany({})
    await prisma.invoice.deleteMany({})
    await prisma.motoboy.deleteMany({})
    await prisma.route.deleteMany({})
    await prisma.tableValues.deleteMany({})
    await prisma.user.deleteMany({})

    const user = await prisma.user.create({
        data: {
            name: "Vando",
            email: "vando@test.com",
            password: "123"
        }
    })

    const motoboy = await prisma.motoboy.create({
        data: {
            name: "Motoboy amigo",
            celular: "119999-9999",

        }
    })

    const route = await prisma.route.create({
        data: {
            startRoute: "Pinheiros",
            endRoute: "Guaianazes",
            valueRoute: 50,
            motoboyId: motoboy.id,
            createdAt: new Date()
        }
    })

    const client = await prisma.client.create({
        data: {
            name: "Cliente de teste",
            address: "Rua tal, numero 100",
            cnpj: "00.000/0001-00",
            telephone: "11-99999-9999"
        }
    })

    const invoice = await prisma.invoice.create({
        data: {
            date: new Date(),
            motoboyId: motoboy.id,
            cnpjId: client.cnpj,
            description: "Entrega de pacote"
        }
    })
}
