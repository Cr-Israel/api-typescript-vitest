import fastify from "fastify";
import { afterEach, describe, expect, it } from "vitest";
import { getAllPets } from "./getAll";
import axios from "axios";
import Pet from "../../models/Pets";

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
    try {
      const response = await axios.get("get-all-pets");
      // Verifica se a resposta tem status 200 (OK)
      expect(response.status).toBe(200);

      // Verifica se a resposta contém os dados esperados dos pets
      expect(response.data).toContain(Pet);
    } catch (error) {
      console.error("Erro na requisição: " + error);
    }
  });

  afterEach(async () => {
    await server.close();
  });
});
