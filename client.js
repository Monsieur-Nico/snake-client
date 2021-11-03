const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log("Connected to game server!");
    conn.write("Name: NAL");
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 50);
  // //   setTimeout(() => {
  // //     conn.write("Move: right");
  // //   }, 50);
  // //   setTimeout(() => {
  // //     conn.write("Move: down");
  // //   }, 100);
  // //   setTimeout(() => {
  // //     conn.write("Move: left");
  // //   }, 150);
  // //   setTimeout(() => {
  // //     conn.write("Move: up");
  // //   }, 200);
  });

  
  conn.on('data', data => {
    console.log(`data: ${data}`);
  });
  
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;