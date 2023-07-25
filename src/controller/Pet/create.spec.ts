import { afterEach, describe, expect, it } from "vitest";
import Pet from "../../models/Pets";
import fastify from "fastify";
import axios from "axios";
import { Create } from "./create";

describe("Create a Pet", () => {
  it("Should be able to create a pet", () => {
    const pet = new Pet({
      name: "Thor",
      age: "2 anos",
      description: "Um lindo Pastor Alemão!",
    });

    expect(pet).toBeInstanceOf(Pet);
  });

  const server = fastify();

  server.post("/create-pet", async (req, reply) => {
    try {
      await Create(req, reply);
    } catch (error) {
      reply.code(500).send({ message: "Erro interno no servidor" });
    }
  });
  it("should not be able to create a pet with missing name", async () => {
    try {
      const response = await axios.post("/create-pet", {
        name: "",
        age: "2 anos",
        description: "Um lindo Pastor Alemão!",
      });
      // Check if the response has status 400 (Bad Request)
      expect(response.status).toBe(400);

      // Check if the response has error
      expect(response.data.message).toBe(
        "O nome é obrigatório, tente novamente!"
      );
    } catch (error) {
      // If an error occurs in the request, it will be displayed in the console
      console.error("Erro na requisição: " + error);
    }
  });
  it("should not be able to create a pet with missing age", async () => {
    try {
      const response = await axios.post("/create-pet", {
        name: "Thor",
        age: "",
        description: "Um lindo Pastor Alemão!",
      });
      // Check if the response has status 400 (Bad Request)
      expect(response.status).toBe(400);

      // Check if the response has error
      expect(response.data.message).toBe(
        "O nome é obrigatório, tente novamente!"
      );
    } catch (error) {
      // If an error occurs in the request, it will be displayed in the console
      console.error("Erro na requisição: " + error);
    }
  });
  it("should not be able to create a pet with missing description", async () => {
    try {
      const response = await axios.post("/create-pet", {
        name: "Thor",
        age: "2 anos",
        description: "",
      });
      // // Check if the response has status 400 (Bad Request)
      expect(response.status).toBe(400);

      // Check if the response has error
      expect(response.data.message).toBe(
        "O nome é obrigatório, tente novamente!"
      );
    } catch (error) {
      // If an error occurs in the request, it will be displayed in the console
      console.error("Erro na requisição: " + error);
    }
  });
  
  afterEach(async () => {
    await server.close();
  });
});
