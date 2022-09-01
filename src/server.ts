import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import router from './routes/index'

dotenv.config()

const server = express()
server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({ extended: true}))

server.use(router)

server.listen(process.env.PORT, () => {
    console.log("Running in the door 4000")
})
