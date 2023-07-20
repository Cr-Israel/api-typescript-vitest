import server from "./app";

server
  .listen({
    port: Number(process.env.PORT) || 5000,
  })
  .then(() => {
    console.log(`🚀 Fastify server running!`);
  });
