import { FastifyReply, FastifyRequest } from "fastify";
import Pet from "../../models/Pets";

export async function getAllPets(req: FastifyRequest, reply: FastifyReply) {
  const pets = await Pet.find();
  reply.code(200).send(pets);
}
