import { FastifyReply, FastifyRequest } from "fastify";
import Pet from "../../models/Pets";

export async function remove(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as {
    id: string;
  };

  try {
    await Pet.findByIdAndDelete(id);
    reply.code(200).send({ message: "Pet deletado com suceso!" });
  } catch (error) {
    reply.code(400).send({
      message: "Erro na hora de deletar o Pet, por favor tentar mais tarde!",
    });
    console.error("Erro ao deletar o Pet: " + Error);
  }
}
