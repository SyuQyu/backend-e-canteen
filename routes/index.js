"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./feature.auth.routes/auth"));
const errorHandler_1 = __importDefault(require("../handler/errorHandler"));
function routes(app) {
    (0, auth_1.default)(app);
    app.use(errorHandler_1.default);
}
exports.default = routes;
