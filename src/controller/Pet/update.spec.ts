import fastify from "fastify";
import { describe, expect, it } from "vitest";
import { update } from "./update";
import axios from "axios";
import Pet from "../../models/Pets";

describe("Update a Pet", () => {
  const server = fastify();

  server.patch("/update-pet/id", async (req, reply) => {
    try {
      await update(req, reply);
    } catch (error) {
      reply.code(500).send({ message: "Erro interno no servidor" });
    }
  });

  it("should be able update a pet", async () => {
    const pet = await Pet.create({
      name: "Pet1",
      age: "1 ano",
      description: "Pet 1 description",
    });
    try {
      const response = await axios.patch(`/update-pet/${pet._id}`);

      // Verifica se a resposta tem status 200 (OK)
      expect(response.status).toBe(200);

      // Verifica se a resposta contém os dados esperados dos pets
      expect(response.data).toContainEqual({
        name: "Pet1",
        age: "2 years",
        description: "A cute dog!",
      });
    } catch (error) {
      console.error("Erro na requisição: " + error);
    }
  });
});
