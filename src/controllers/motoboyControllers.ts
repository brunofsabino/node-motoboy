import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { MotoboyService } from '../services/MotoboyService'

export const all = async (req: Request, res: Response) => {
    const motoboys = await MotoboyService.findAll()
    if(motoboys) {
        res.status(200).json({ motoboys })
    } else {
        res.status(500).json({ error: "Dados invalidos"})
    }
}

export const one = async (req: Request, res: Response) => {
    const { id } = req.params
    const motoboy = await MotoboyService.findOne(id)
    if(motoboy) {
        res.status(200).json({ motoboy })
    } else {
        res.status(500).json({ error: "Dados invalidos"})
    }
}

export const create = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email, celular, cpf, rg, numberBoard, cityBoard, address } = req.body
    const user = await UserService.findOne(id)
    const findName = await MotoboyService.findByName(name)
    const findCelular = await MotoboyService.findByCelular(celular)
    if(user) {
        if(!findName) {
            if(!findCelular) {
                const newMotoboy = await MotoboyService.create( {
                    name, celular, address: address ?? 'null', userId: user.id, email: email ?? 'null', cpf: cpf ?? 'null', rg : rg ?? 'null', numberBoard: numberBoard ?? 'null', cityBoard: cityBoard ?? 'null' 
                })
                if(newMotoboy) {
                    res.status(201).json({ motoboy: newMotoboy})
                } else {
                    res.status(500).json({ error: "Dados invalidos"})
                }
            } else {
                res.status(500).json({ error: "Celular do Motoboy já cadastrado"})
            }
        } else {
            res.status(500).json({ error: "Nome do Motoboy já cadastrado"})
        } 
    } else {
        res.status(500).json({ error: "Dados invalidos"})
    }  
    
    
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email, celular, cpf, rg, numberBoard, cityBoard, address } = req.body
    const motoboy = await MotoboyService.findOne(id)
    if(motoboy) {
        if(name || email || celular || cpf || rg || numberBoard || cityBoard || address) {
            const motoboyUpdate = await MotoboyService.update(motoboy.id, {
                name, email, celular, cpf, rg, numberBoard, cityBoard, address
            })
            if(motoboyUpdate) {
                res.status(200).json({ motoboy: motoboyUpdate})
            } else {
                res.status(500).json({ error: "Dados invalidos"})
            }
        } else {
            res.status(500).json({ error: "Dados invalidos"})
        }
    } else {
        res.status(500).json({ error: "Dados invalidos"})
    }
}

export const deleteMotoboy = async (req: Request, res: Response) => {
    const { id } = req.params
    const motoboy = await MotoboyService.findOne(id)
    if(motoboy) {
        const deleteBoy = await MotoboyService.deleteBoy(motoboy.id)
        if(deleteBoy) {
            res.status(200).json({ success: true})
        }
    } else {
        res.status(500).json({ error: "Dados invalidos"})
    }
}