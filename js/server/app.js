System.register(["express", "socket.io", "http"], function (exports_1, context_1) {
    "use strict";
    var express, socketIo, http, App;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (express_1) {
                express = express_1;
            },
            function (socketIo_1) {
                socketIo = socketIo_1;
            },
            function (http_1) {
                http = http_1;
            }
        ],
        execute: function () {
            App = (function () {
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
            exports_1("App", App);
        }
    };
});
//# sourceMappingURL=app.js.map