import * as express from "express";
import * as socketIo from "socket.io";
import * as http from "http";

export class App {
    public static readonly PORT:number = 7070

    public app: express.Application
    private io: SocketIO.Server
    private port: number
    private server: http.Server

    constructor() {
        this.app = express()
        this.config()
        this.listen()
    }

    private config(): void {
        this.port = App.PORT
        this.server = new http.Server(this.app);
        this.io = socketIo(this.server)
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        })
    }
}