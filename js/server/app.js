import * as express from "express";
import * as socketIo from "socket.io";
import * as http from "http";
var App = (function () {
    function App() {
        this.app = express();
        this.config();
        this.listen();
    }
    App.prototype.config = function () {
        this.port = App.PORT;
        this.server = new http.Server(this.app);
        this.io = socketIo(this.server);
    };
    App.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log("Server is running on port " + _this.port);
        });
    };
    App.PORT = 7070;
    return App;
}());
export { App };
//# sourceMappingURL=app.js.map