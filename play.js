const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(data.toString())
  })

  conn.on('connect', () => {
    console.log('connected')
    conn.write('Name: Zig')
    setInterval(() => {conn.write('Move: up')}, 500)
    setTimeout(() => {conn.write('Move: up')}, 500)
    setTimeout(() => {conn.write('Move: up')}, 500)
    conn.write('Move: left')
    conn.write("Move: left")
    conn.write('Move: down')
    setTimeout(() => {conn.write('Move: right')}, 500)
  })

  return conn;
};

console.log("connecting...");
connect();


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (handleUserInput) => {

  });
  return stdin;
};


module.exports = {
  connect
}