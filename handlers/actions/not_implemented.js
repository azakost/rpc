function notImplemented(client) {
  client.handle(({ method, params }) => {
    console.log(`Server got ${method} from ${client.identity}:`, params);
    throw createRPCError("NotImplemented");
  });
}

module.exports = { notImplemented };
