function authorize(client) {
  client.handle("Authorize", ({ params }) => {
    console.log(`Authorize from ${client.identity}:`, params);
    return {
      idTagInfo: {
        status: "Accepted",
        expiryDate: new Date().toISOString(),
      },
    };
  });
}

module.exports = { authorize };
