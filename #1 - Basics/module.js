// imports and deconstructs { exports } from require(route)
const { people, ages } = require("./sheople");

console.log(people, ages);

const os = require("os");
console.log(os.platform());
