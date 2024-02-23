const { sendMessageToBuddy } = require("../telegram");

function authorize(client) {
  client.handle("Authorize", ({ params }) => {
    sendMessageToBuddy(
      `Authorize ${client.identity}:\n${JSON.stringify(params)}`
    );
    return {
      idTagInfo: {
        status: "Accepted",
        expiryDate: new Date().toISOString(),
      },
    };
  });
}

function bootNotification(client) {
  client.handle("BootNotification", ({ params }) => {
    sendMessageToBuddy(
      `BootNotification ${client.identity}:\n${JSON.stringify(params)}`
    );
    return {
      status: "Accepted",
      interval: 3000,
      currentTime: new Date().toISOString(),
    };
  });
}

function heartbeat(client) {
  client.handle("Heartbeat", ({ params }) => {
    const date = new Date();
    sendMessageToBuddy(`Heartbeat ${client.identity}:\n${date.toISOString()}`);
    return {
      currentTime: date.toISOString(),
    };
  });
}

function startTransaction(client) {
  client.handle("StartTransaction", ({ params }) => {
    sendMessageToBuddy(
      `StartTransaction ${client.identity}:\n${JSON.stringify(params)}`
    );
    return {
      transactionId: 1,
      idTagInfo: {
        status: "Accepted",
      },
    };
  });
}

function stopTransaction(client) {
  client.handle("StopTransaction", ({ params }) => {
    sendMessageToBuddy(
      `StopTransaction ${client.identity}:\n${JSON.stringify(params)}`
    );
    return {
      idTagInfo: {
        status: "Accepted",
      },
    };
  });
}

function meterValues(client) {
  client.handle("MeterValues", ({ params }) => {
    sendMessageToBuddy(
      `MeterValues ${client.identity}:\n${JSON.stringify(params)}`
    );
    return {
      status: "Accepted",
    };
  });
}

module.exports = {
  authorize,
  bootNotification,
  heartbeat,
  startTransaction,
  stopTransaction,
  meterValues,
};
