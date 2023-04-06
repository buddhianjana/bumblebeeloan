import { render, screen } from "@testing-library/react";
import { ShoppingCart } from "./../components/NavBar/components/ShoppingCart";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

describe("ShoppingCart component", () => {
  it("Showing a Button with 2 children inside", () => {
    render(
      <CartContext.Provider
        value={{
          addCartItem: jest.fn(),
          getCartSubTotal: jest.fn().mockReturnValue(0),
          deleteCartItem: jest.fn().mockReturnValue(true),
          getCartItems: jest.fn().mockReturnValue([]),
        }}
      >
        <BrowserRouter>
          <ShoppingCart strPortalDivId={"any"} />
        </BrowserRouter>
      </CartContext.Provider>
    );
    expect(screen.getByRole("button").childElementCount).toBe(2);
  });

  it("Showing two products in the Shopping Cart popup", () => {});
});
