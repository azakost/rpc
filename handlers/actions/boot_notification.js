function bootNotification(client) {
  client.handle("BootNotification", ({ params }) => {
    console.log(`BootNotification from ${client.identity}:`, params);
    return {
      status: "Accepted",
      interval: 30000,
      currentTime: new Date().toISOString(),
    };
  });
}

module.exports = { bootNotification };
