"use strict";
exports.__esModule = true;
// import { greetUser } from "@monorepo/shared";
var deep_1 = require("@monorepo/shared/deep");
// greetUser("client");
var aws_cdk_lib_1 = require("aws-cdk-lib");
console.log(aws_cdk_lib_1.RemovalPolicy.RETAIN);
deep_1.greetUserDeeply("client");
