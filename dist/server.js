"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
    }
    start() {
        const app = express_1.default();
        const serverHttp = http_1.default.createServer(app);
        const io = socket_io_1.default(serverHttp);
        app.get('/status', (req, res) => {
            res.send('Server running');
        });
        serverHttp.listen(Server.PORT, () => {
            console.log(`Server launch on port:${Server.PORT}`);
        });
        io.on('connect', (socket) => {
            console.log(`Connected client with id ${socket.id}`);
        });
    }
}
exports.default = Server;
Server.PORT = 7070;
