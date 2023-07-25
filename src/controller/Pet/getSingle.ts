import { FastifyReply, FastifyRequest } from "fastify";
import Pet from "../../models/Pets";

export async function getSinglePet(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as {
    id: string;
  };

  try {
    const pet = await Pet.findById(id);
    if (!pet) {
      reply.code(400).send({ message: "Pet não encontrado!" });
      return;
    }
    reply.code(200).send(pet);
  } catch (error) {
    reply.code(400).send({ message: "Pet não encontrado" });
  }
}
