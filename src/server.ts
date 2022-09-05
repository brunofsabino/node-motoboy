import express, { ErrorRequestHandler } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport'
import userRouter from './routes/user'
import motoboyRouter from './routes/user'


dotenv.config()

const server = express()

server.use(cors())

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({ extended: true}))

server.use(passport.initialize())
server.use(userRouter)
server.use(motoboyRouter)

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if(err.status) {
        res.status(err.status)
    } else {
        res.status(400)
    }
    if(err.message) {
        res.json({ error: err.message})
    } else {
        res.json({ error: "Ocorreu algum erro"})
    }
}
server.use(errorHandler)

server.listen(process.env.PORT, () => {
    console.log("Running in the door 4000")
})
