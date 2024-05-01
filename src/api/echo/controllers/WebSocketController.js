const WebSocket = require("ws");
const http = require("http");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
  console.log("Client connected");

  ws.on("message", function incoming(message) {
    console.log("Received message: ", message);

    // Echo back the received message to the client
    ws.send(message);
  });

  ws.on("close", function close() {
    console.log("Client disconnected");
  });
});

module.exports = {
  async initializeWebSocket(ctx) {
    server.listen(3000, () => {
      console.log("WebSocket server initialized");
      ctx.send({ message: "WebSocket server initialized" });
    });
  },
};
