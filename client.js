const net = require('net');
const setupInput = require('./input');
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(data.toString())
  })

  conn.on('connect', () => {
    console.log('connected')
    conn.write('Name: Zig')
  })

  return conn;
};



module.exports = {connect}