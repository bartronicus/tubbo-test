"use strict";
// shared/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetUser = void 0;
// export  as deep from "./deep";
function greetUser(user) {
    console.log(`Hello, ${user}! You are not an admin.`);
}
exports.greetUser = greetUser;
