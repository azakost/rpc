function heartbeat(client) {
  client.handle("Heartbeat", ({ params }) => {
    const date = new Date();
    console.log(`Heartbeat ${client.identity}:`, date);
    return {
      currentTime: date.toISOString(),
    };
  });
}

module.exports = { heartbeat };
