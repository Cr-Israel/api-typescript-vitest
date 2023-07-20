import { FastifyInstance } from "fastify";
import { Create } from "../../controller/Pet/Create";

export async function petRoutes(server: FastifyInstance) {
  // Create a Pet
  server.post("/", Create);
}
