import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export const all = async(req: Request, res: Response) => {
    const all = await UserService.findAll()
    res.status(200).json({users: all})
}
export const one = async(req: Request, res: Response) => {
    const { id } = req.params
    const user = await UserService.findOne(id)
    if(user) {
        res.status(200).json({user})
    } else {
        res.status(500).json({error : "Dados invalidos"})
    }
}
export const create = async(req: Request, res: Response) => {
    const { name, password, email } = req.body
    if(name && password && email) {
        const emailExists = await UserService.findByEmail(email)
        if(!emailExists) {
            const newUser = await UserService.create({name, password, email})
            if(newUser) {
                res.status(201).json({ user: newUser})
            }
        } else {
            res.status(500).json({error : "E-mail já cadastrado. Faça o login!"})
        }
    } else {
        res.status(500).json({error : "Dados invalidos"})
    }
}
export const update = async(req: Request, res: Response) => {
    const { id } = req.params
    const { name, password } = req.body

    const user = await UserService.findOne(id)
    if(user) {
        if(name || password) {
            const userUpdate = await UserService.update(id, {
                name, password
            })
            if(userUpdate) {
                res.status(201).json({ user: userUpdate})
            } else {
                res.status(500).json({error : "Dados invalidos"})
            }
        } else {
            res.status(500).json({error : "Dados invalidos"})
        }
    } else {
        res.status(500).json({error : "Dados invalidos"})
    }

}