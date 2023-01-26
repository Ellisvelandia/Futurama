import { describe, expect, test } from "vitest";
import axios from "axios";

describe("Episode", () => {
  test("should work Api call of the route episode", async () => {
    try {
      const response = await axios.get(
        "https://futurama.onrender.com/api/v1//getEpisode",
        { timeout: 1000 }
      );
      expect(response.status).toBe(200);
      expect(response.data).toBeTruthy();
    } catch (error) {
      console.error(error);
      expect(error).toBeFalsy();
    }
  });
});

describe("Character", () => {
  test("should work Api call of the route character", async () => {
    try {
      const response = await axios.get(
        "https://futurama.onrender.com/api/v1/getCharacter",
        { timeout: 1000 }
      );
      expect(response.status).toBe(200);
      expect(response.data).toBeTruthy();
    } catch (error) {
      console.error(error);
      expect(error).toBeFalsy();
    }
  });
});

describe("Sypnosis", () => {
  test("should work Api call of the route sypnosis", async () => {
    try {
      const response = await axios.get(
        "https://futurama.onrender.com/api/v1/getSypnosis",
        { timeout: 1000 }
      );
      expect(response.status).toBe(200);
      expect(response.data).toBeTruthy();
    } catch (error) {
      console.error(error);
      expect(error).toBeFalsy();
    }
  });
});

describe("Creator", () => {
  test("should work Api call of the route creator", async () => {
    try {
      const response = await axios.get(
        "https://futurama.onrender.com/api/v1//getCreator",
        { timeout: 1000 }
      );
      expect(response.status).toBe(200);
      expect(response.data).toBeTruthy();
    } catch (error) {
      console.error(error);
      expect(error).toBeFalsy();
    }
  });
});
