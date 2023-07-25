import { FastifyInstance } from "fastify";
import { Create } from "../../controller/Pet/Create";
import { getAllPets } from "../../controller/Pet/getAll";
import { getSinglePet } from "../../controller/Pet/getSingle";
import { update } from "../../controller/Pet/update";

export async function petRoutes(server: FastifyInstance) {
  // Create a Pet
  server.post("/", Create);
  // Get All Pets
  server.get("/", getAllPets);
  // Get a Single Pet
  server.get("/:id", getSinglePet);
  // Update a Pet
  server.patch("/update/:id", update)
}
