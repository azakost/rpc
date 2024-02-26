const {
  authorize,
  bootNotification,
  heartbeat,
  startTransaction,
  stopTransaction,
  meterValues,
  statusNotification,
  notImplemented,
} = require("./handlers");

const { buddy } = require("./telegram");

const { RPCServer, createRPCError } = require("ocpp-rpc");

const server = new RPCServer({
  protocols: ["ocpp1.6", "ocpp2.0.1"],
  strictMode: true,
});

const allClients = new Map();

buddy.on("message", async (msg) => {
  console.log("Message received from buddy:", msg.text);
  const client = allClients.values().next().value;

  switch (msg.text) {
    case "/remoteStartTransaction":
      const res = await client.call("RemoteStartTransaction", {
        idTag: "123",
        connectorId: 1,
      });
      console.log("RemoteStartTransaction", res.status);
      break;

    case "/remoteStopTransaction":
      client.call("RemoteStopTransaction", {
        transactionId: 1,
      });
      break;

    default:
  }
});

server.on("client", async (client) => {
  console.log(`${client.identity} connected!`);
  allClients.set(client.identity, client);
  bootNotification(client);
  authorize(client);
  heartbeat(client);
  startTransaction(client);
  stopTransaction(client);
  meterValues(client);
  statusNotification(client);
  notImplemented(client);
});
console.log("Server listening on port 3000");
server.listen(3000);
