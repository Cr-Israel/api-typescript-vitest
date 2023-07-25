import fastify from "fastify";
import { describe, it, expect, afterEach } from "vitest";
import { getAllPets } from "../../controller/Pet/getAll";
import Pet from "../../models/Pets";
import axios from "axios";

describe("Get All Pets", () => {
  const server = fastify();

  server.get("/get-all-pets", async (req, reply) => {
    try {
      await getAllPets(req, reply);
    } catch (error) {
      reply.code(500).send({ message: "Erro interno no servidor" });
    }
  });

  it("should get all pets", async () => {
    await Pet.create([
      { name: "Pet1", age: "1 ano", description: "Pet1 description" },
      { name: "Pet2", age: "2 anos", description: "Pet2 description" },
    ]);

    try {
      const response = await axios.get("/get-all-pets");
      // Verifique se a resposta tem status 200 (OK)
      expect(response.status).toBe(200);

      // Verifique se a resposta contém os dados esperados dos pets
      expect(response.data).toContain({
        name: "Pet3",
        age: "3 anos",
        description: "Pet3 description",
      });
    } catch (error) {
      console.error("Erro na requisição: " + error);
    }
  });
  
  afterEach(async () => {
    await server.close();
  });
});
