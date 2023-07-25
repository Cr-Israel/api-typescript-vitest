import { FastifyReply, FastifyRequest } from "fastify";
import Pet from "../../models/Pets";

export async function update(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as {
    id: string;
  };
  const { name, age, description } = req.body as {
    name: string;
    age: string;
    description: string;
  };

  const pet = {
    name,
    age,
    description,
  };

  try {
    await Pet.findByIdAndUpdate(id, pet);
    reply.code(200).send({ message: "Pet atualizado com suceso!", pet });
  } catch (error) {
    reply.code(400).send({ message: "Pet não encontrado" });
  }
}
