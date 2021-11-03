const stdin = process.stdin;

const setupInput = function () {
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
        conn.write("Move: left");
        break;
      case 'd':
        conn.write("Move: right");
        break;
      case 's':
        conn.write("Move: down");
        break;
      case 'w':
        conn.write("Move: up");
    }
};

module.exports = setupInput;