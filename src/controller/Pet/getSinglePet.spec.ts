import fastify from "fastify";
import { afterEach, describe, expect, it } from "vitest";
import { getSinglePet } from "../getSinglePet";
import axios from "axios";
import Pet from "../../models/Pets";

describe("Get a Single Pet", () => {
  const server = fastify();

  server.get("/get-single-pet/id", async (req, reply) => {
    try {
      await getSinglePet(req, reply);
    } catch (error) {
      reply.code(500).send({ message: "Erro interno no servidor" });
    }
  });

  it("should get a single pet by id", async () => {
    try {
      const response = await axios.get("/get-single-pet/id");
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
