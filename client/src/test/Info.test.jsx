import { Info } from "../pages";
import { afterEach, describe, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

describe("Info", () => {
  afterEach(cleanup);
  it("should render", () => {
    render(<Info />);
  });

  it("should render creators", () => {
    render(<Info />);
    screen.getByText("creators");
  });
});
