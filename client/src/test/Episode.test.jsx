import { describe, expect, test } from "vitest";
import axios from "axios";

describe("Episode", () => {
  test("should work Api call", async () => {
    try {
      const response = await axios.get(
        "https://futurama.onrender.com/api/v1//getEpisode",
        { timeout: 10000 }
      );
      expect(response.status).toBe(200);
      expect(response.data).toBeTruthy();
    } catch (error) {
      console.error(error);
      expect(error).toBeFalsy();
    }
  });
});
