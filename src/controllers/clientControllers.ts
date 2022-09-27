import { Request, Response } from 'express'
import { UserService } from '../services/UserService'
import { ClientService } from '../services/ClientService'

export const all = async(req: Request, res: Response) => {
    const clients = await ClientService.findAll()
    if(clients) {
        res.status(200).json({ clients })
    } else {
        res.status(400).json({ error: "Dados invalidos"})
    }
}
export const one = async(req: Request, res: Response) => {
    const { idClient } = req.params
    const client = await ClientService.findOne(idClient)
    if(client) {
        res.status(200).json({ client })
    } else {
        res.status(400).json({ error: "Dados invalidos"})
    }
}
export const create =  async(req: Request, res: Response) => {
    const { id } = req.params
    const { nameFantasy, cnpj, address, telephone, cep, city, corporateName } = req.body
    const user = await UserService.findOne(id)
    const cnjpClient = await ClientService.findByCNPJ(cnpj)
    if(!cnjpClient) {
        if(user && nameFantasy && cnpj && address && telephone && cep && city && corporateName) {
            const newClient = await ClientService.create({
                nameFantasy, cnpj, address, telephone, userId: user.id, cep, city, corporateName
            })
            if(newClient) {
                res.status(200).json({ client: newClient})
            } else {
                res.status(400).json({ error: "Dados invalidos"})
            }
        } else {
            res.status(400).json({ error: "Dados invalidos"})
        }
    } else {
        res.status(400).json({ error: "CNPJ já cadastrado"})
    }
}
export const update = async(req: Request, res: Response)  => {
    const { idClient } = req.params
    const { nameFantasy, cnpj, address, telephone, cep, city, corporateName } = req.body
    const client = await ClientService.findOne(idClient)
    if(client) {
        if(nameFantasy || cnpj || address || telephone || cep || city || corporateName ) {
            const cnjpClient = await ClientService.findByCNPJ(cnpj)
            if(!cnjpClient) {
                const clientUpdated = await ClientService.update(client.id, {
                    nameFantasy: nameFantasy ? nameFantasy : client.nameFantasy,
                    cnpj: cnpj ? cnpj : client.cnpj,
                    address: address ? address : client.address,
                    telephone: telephone ? telephone : client.telephone,
                    cep: cep ? cep : client.cep,
                    city: city ? city : client.city,
                    corporateName: corporateName ? corporateName : client.corporateName
                })
                if(clientUpdated) {
                    res.status(200).json({ client: clientUpdated})
                } else {
                    res.status(400).json({ error: "Dados invalidos"})
                }
            } else {
                res.status(400).json({ error: "CNPJ já cadastrado"})
            }
        } else {
            res.status(400).json({ error: "Dados invalidos"})
        }
    } else {
        res.status(400).json({ error: "Dados invalidos"})
    }
}
export const deleteClient = async(req: Request, res: Response) => {
    const { idClient } = req.params
    const client = await ClientService.findOne(idClient)
    if(client) {
        await ClientService.deleteClient(client.id)
        res.status(200).json({ success: true})
    } else {
        res.status(400).json({ error: "Dados invalidos"})
    }
}