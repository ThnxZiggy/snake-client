const net = require('net');
// const connect = require('./client');

// establishes a connection with the game server

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
let conn = connect();

setupInput(conn);

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", (handleUserInput) => { ------this is anon function
//     if (handleUserInput === '\u0003'){
//       process.stdout.write('exited game\n')
//       process.exit();
//     }
//   });