import { describe, expect, it } from "vitest";
import Pet from "../../models/Pets";

describe("Create a Pet", () => {
  it("Should be able to create a pet", () => {
    const pet = new Pet({
      name: "Thor",
      age: "2 anos",
      description: "Um lindo Pastor Alemão!",
    });

    expect(pet).toBeInstanceOf(Pet);
  });

  it("should not be able to create a pet", () => {
    const pet = new Pet({
      name: "Thor",
      age: "2 anos",
      description: "Um lindo Pastor Alemão!",
    });

    expect(pet).toBeInstanceOf(Error);
  });
});
