"use strict";
// shared/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetUser = exports.deep = void 0;
exports.deep = require("./deep");
function greetUser(user) {
    console.log(`Hello, ${user}! You are not an admin.`);
}
exports.greetUser = greetUser;
