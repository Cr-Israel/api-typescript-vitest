import { FastifyReply, FastifyRequest } from "fastify";
import Pet from "../../models/Pets";

export async function Create(req: FastifyRequest, reply: FastifyReply) {
  const { name, age, description } = req.body as {
    name: string;
    age: string;
    description: string;
  };

  if (!name) {
    reply.code(400).send({ message: "O nome é obrigatório, tente novamente!" });
    return;
  }
  if (!age) {
    reply
      .code(400)
      .send({ message: "A idade é obrigatória, tente novamente!" });
    return;
  }
  if (!description) {
    reply
      .code(400)
      .send({ message: "A descrição é obrigatória, tente novamente!" });
    return;
  }

  const pet = new Pet({
    name,
    age,
    description,
  });

  try {
    await pet.save();
    reply.code(201).send({ message: "Pet criado com sucesso!" });
  } catch (error) {
    console.error("Erro na criação do pet: " + error);
  }
}
