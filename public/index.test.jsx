import { render, screen } from "@testing-library/react";
import App from "../../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("heading이 존재한다.", () => {
    render(<App />);
    expect(screen.getByText("ttv-admin-client")).toBeInTheDocument;
  });
});
