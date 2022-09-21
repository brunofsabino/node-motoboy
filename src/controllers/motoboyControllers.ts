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
    const { name, email, celular, cpf, rg, numberBoard, cityBoard } = req.body
    const user = await UserService.findOne(id)
    const findEmail = await MotoboyService.findByEmail(email)
    if(!findEmail) {
        const findRG = await MotoboyService.findByRG(rg)
        if(!findRG) {
            const findCPF = await MotoboyService.findByCPF(cpf)
            if(!findCPF) {
                if(user && name && celular && cpf && rg) {
                    const motoboy = await MotoboyService.findByName(name)
                    if(!motoboy) {
                        const newMotoboy = await MotoboyService.create( {
                            name, celular, userId: user.id, email, cpf, rg, numberBoard: numberBoard ?? 'null', cityBoard: cityBoard ?? 'null' 
                        })
                        if(newMotoboy) {
                            res.status(201).json({ motoboy: newMotoboy})
                        } else {
                            res.status(500).json({ error: "Dados invalidos"})
                        }
                    } else {
                        res.status(500).json({ error: "Nome de motoboy já cadastrado!"})
                    }
                } else {
                    res.status(500).json({ error: "Dados invalidos"})
                }
            } else {
                res.status(500).json({ error: "CPF já cadastrado"})
            }
        } else {
            res.status(500).json({ error: "RG já cadastrado"})
        }
    } else {
        res.status(500).json({ error: "E-mail já cadastrado"})
    }
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email, celular, cpf, rg, numberBoard, cityBoard } = req.body
    const motoboy = await MotoboyService.findOne(id)
    if(motoboy) {
        if(name || email || celular || cpf || rg || numberBoard || cityBoard) {
            const motoboyUpdate = await MotoboyService.update(motoboy.id, {
                name, email, celular, cpf, rg, numberBoard, cityBoard
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
    const motoboy = await MotoboyService.delete(id)
    if(motoboy) {
        res.status(200).json({ success: true})
    } else {
        res.status(500).json({ error: "Dados invalidos"})
    }
}