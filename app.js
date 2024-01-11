const {
  authorize,
  bootNotification,
  notImplemented,
  heartbeat,
} = require("./handlers");

const { RPCServer, createRPCError } = require("ocpp-rpc");

const server = new RPCServer({
  protocols: ["ocpp1.6", "ocpp2.0.1"],
  strictMode: true,
});

server.auth((accept, reject, handshake) => {
  const jwt = handshake.headers["authorization"];
  console.log("Authenticating with token:", jwt);
  accept({
    token: jwt,
    sessionId: "XYZ123",
  });
});

server.on("client", async (client) => {
  console.log(`${client.identity} connected!`);
  bootNotification(client);
  authorize(client);
  heartbeat(client);

  notImplemented(client);
});
console.log("Server listening on port 3000");
server.listen(3000);
