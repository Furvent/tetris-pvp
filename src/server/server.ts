import { Response, Request } from "express"
import http from 'http'
import socketIo from 'socket.io'

import express from 'express'

export default class Server {

    static readonly PORT:number = 7070

    constructor() {
    }

    public start() {
        const app = express()
        const serverHttp = http.createServer(app)
        const io = socketIo(serverHttp)
        app.get('/status', (req: Request, res: Response) => {
            res.send('Server running')
        })
        serverHttp.listen(Server.PORT, () => {
            console.log(`Server launch on port:${Server.PORT}`)
        })
        io.on('connect', (socket) => {
            console.log(`Connected client with id ${socket.id}`)
        })
    }
}