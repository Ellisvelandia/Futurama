import { afterEach, describe, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  afterEach(cleanup);
  it("should render", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
