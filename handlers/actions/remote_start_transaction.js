function remoteStartTransaction(client) {
  client.handle("RemoteStartTransaction", async (request) => {
    console.log("RemoteStartTransaction", request);
    return {
      status: "Accepted",
    };
  });
}
