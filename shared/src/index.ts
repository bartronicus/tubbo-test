// shared/index.ts

export * as deep from "./deep";

export function greetUser(user: string) {
  console.log(`Hello, ${user}! You are not an admin.`);
}
