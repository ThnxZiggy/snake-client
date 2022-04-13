const net = require('net');
const connect = require('./client');

// establishes a connection with the game server


console.log("connecting...");
connect();


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (handleUserInput) => {
    if (handleUserInput === '\u0003'){
      process.stdout.write('exited game\n')
      process.exit();
    }
  });


  return stdin;
};

setupInput();

module.exports = {net}
