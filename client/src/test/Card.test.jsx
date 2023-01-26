import { Card } from "../pages";
import { afterEach, describe, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Card", () => {
  afterEach(cleanup);
  it("should render", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
  });

  it("should render Age", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
    screen.getByText("Age:");
  });

  it("should render Species", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
    screen.getByText("Species:");
  });

  it("should render Homeplanet", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
    screen.getByText("Homeplanet: unknown");
  });

  it("should render Occupation", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
    screen.getByText("Occupation: unknown");
  });

  it("should render Voicedby", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
    screen.getByText("Voicedby: unknown");
  });
});
