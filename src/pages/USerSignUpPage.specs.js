import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserSignUpPage } from "./UserSignUpPage";

beforeEach(cleanup);

describe("UserSignInPage", () => {
  describe("Layout", () => {
    it("has header of signup", () => {
      const { container } = render(<UserSignUpPage />);
      const header = container.querySelector("h1");
      expect(header).toHaveTextContent("SignIn");
    });
  });
});
