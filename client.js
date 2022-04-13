const net = require('net');
const setupInput = require('./input');

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
    setInterval(() => {conn.write('Move: up')}, 250)
  })

  return conn;
};



module.exports = {connect}