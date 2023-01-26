import { Home } from "../pages";
import { afterEach, describe, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

describe("Home", () => {
  afterEach(cleanup);
  it("should render", () => {
    render(<Home />);
  });

  it("should render poster img", () => {
    render(<Home />);
    screen.getByAltText("poster");
  });

  it("should render logo img", () => {
    render(<Home />);
    screen.getByAltText("logo");
  });
});
