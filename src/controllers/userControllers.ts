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
        res.status(200).json({id: user })
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
                res.status(201).json({ id: newUser.dataNewUser.id, token: newUser.token })
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
        if(name && password != undefined) {
            const userUpdate = await UserService.update(user.id, {
                name, password: password !== undefined ? password : user.password
            })
            if(userUpdate) {
                res.status(201).json({ id: userUpdate.id, name: userUpdate.name, email: userUpdate.email})
            } else {
                res.status(500).json({error : "Dados invalidos"})
            }
        } else if(name) {
            const userUpdateName = await UserService.updateName(user.id, {
                name
            })
            if(userUpdateName) {
                res.status(201).json({ id: userUpdateName.id, name: userUpdateName.name, email: userUpdateName.email})
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
export const login = async(req: Request, res: Response) => {
    const { email, password } = req.body
    if(email && password) {
        const loggedUser = await UserService.login(email, password)
        if(loggedUser) {
            res.status(200).json({sucess: true, token: loggedUser.token, name: loggedUser.name, email: loggedUser.email, id: loggedUser.id})
        } else {
            res.status(500).json({error : "Dados invalidos"})
        }
    } else {
        res.status(500).json({error : "Dados invalidos"})
    }
}
export const logout = async(req: Request, res: Response) => {
    
}
export const home = async(req: Request, res: Response) => {
    const users = await UserService.findAll()
    if(users) {
        res.status(200).json({ users})
    }
}
export const deleteUser = async(req: Request, res: Response) => {
    const { id } = req.params
    const user = await UserService.deleteUser(id)
    if(user) {
       res.json({ success: true})
    } else {
        res.status(500).json({error : "Dados invalidos"})
    }
}