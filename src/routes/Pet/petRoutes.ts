import { FastifyInstance } from "fastify";
import { Create } from "../../controller/Pet/Create";
import { getAllPets } from "../../controller/Pet/getAllPets";
import { getSinglePet } from "../../controller/getSinglePet";

export async function petRoutes(server: FastifyInstance) {
  // Create a Pet
  server.post("/", Create);
  // Get All Pets
  server.get("/", getAllPets);
  // Get a Single Pet
  server.get("/:id", getSinglePet);
}
