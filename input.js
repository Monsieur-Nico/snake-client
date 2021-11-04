const stdin = process.stdin;
const constants = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
    switch (key) {
      case '\u0003':
        process.exit();
      case 'a':
        connection.write(constants.gameKeys.a);
        break;
      case 'd':
        connection.write(constants.gameKeys.d);
        break;
      case 's':
        connection.write(constants.gameKeys.s);
        break;
      case 'w':
        connection.write(constants.gameKeys.w);
        break;
      case 'l':
        connection.write(constants.gameKeys.l);
        break;
      case 'k':
        connection.write(constants.gameKeys.k);
        break;
    }
};

module.exports = setupInput;