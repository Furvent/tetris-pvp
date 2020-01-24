"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Everything is working!");
const socket_io_1 = __importDefault(require("socket.io"));
const socket = socket_io_1.default("http://localhost:7070");
