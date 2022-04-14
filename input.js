let connection;

const handleUserInput = function (input) {
  if (input === '\u0003'){
    process.stdout.write('exited game\n')
    process.exit();
  }
  if (input === 'w') {
    connection.write('Move: up')
  }
  if (input === 's') {
    connection.write('Move: down')
  }
  if (input === 'd') {
    connection.write('Move: right')
  }
  if (input === 'a') {
    connection.write('Move: left')
  }
  if (input === 'k') {
    connection.write('Say: hiThere')
  }
}

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);


  return stdin;
};

//setupInput(); // calling function was registering moves twice in terminal
module.exports = {setupInput}