import fastify from "fastify";
const server = fastify({ logger: true });

// Route
import { petRoutes } from "./routes/Pet/petRoutes";
server.register(petRoutes, { prefix: "/pets" });

export default server;
