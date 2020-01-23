System.register(["./app"], function (exports_1, context_1) {
    "use strict";
    var app_1, app;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (app_1_1) {
                app_1 = app_1_1;
            }
        ],
        execute: function () {
            app = new app_1.App().app;
        }
    };
});
//# sourceMappingURL=server.js.map