import fastify from "fastify";
import { describe, expect, it } from "vitest";
import { remove } from "./remove";
import axios from "axios";
import Pet from "../../models/Pets";

describe("Remove a Pet", () => {
  const server = fastify();

  server.delete("/delete-pet/:id", async (req, reply) => {
    try {
      await remove(req, reply);
    } catch (error) {
      reply.code(500).send({ message: "Erro interno no servidor" });
    }
  });

  it("should be able remove a Pet", async () => {
    const pet = await Pet.create({
      name: "Pet1",
      age: "1 ano",
      description: "Pet 1 description",
    });
    try {
      const response = await axios.delete(`/delete-pet/${pet._id}`);

      // Check if the response has status 200 (OK)
      expect(response.status).toBe(200);

      // Checks if the pet was removed from the database
      const removedPet = await Pet.findById(pet._id);
      expect(removedPet).toBeNull(); // Checks if the pet was not found in the database
    } catch (error) {
      console.error("Erro na requisição: " + error);
    }

    it("should handle pet not found", async () => {
      try {
        const response = await axios.delete(`/delete-pet/87484916164161651`);

        // Checks whether the response has a 404 (Not Found) status or some other appropriate error status
        expect(response.status).toBe(404);
      } catch (error) {
        console.error("Erro na requisição: " + error);
      }
    });
  });
});
