import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import uniqid from "uniqid";
import { paraseProductList } from "../pages/ProductList/components/ProductListContent/ProductListContent.util";
//import { getProducts } from "../pages/ProductList/components/ProductListContent/ProductListContent.util";
import { ProductListPaths } from "../utilities/constants";

/**
 *
 * @param {string} strTitle
 * @returns
 */
const createRawProduct = (strTitle) => {
  return {
    id: uniqid(),
    title: strTitle,
    price: "22.3",
    category: "men's clothing",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  };
};

/**
 *
 * @param {string} strBranch
 * @param {string} searchParams
 */
const getProducts = (strBranch, searchParams) => {
  if (
    strBranch.toLowerCase() === ProductListPaths.MOST_VIWED ||
    strBranch.toLowerCase() === ProductListPaths.CATEGORY
  ) {
    return Promise.resolve([
      createRawProduct("product 1"),
      createRawProduct("product 2"),
      createRawProduct("product 3"),
    ]);
  } else return Promise.resolve([]);
};

describe("ProductList component", () => {
  it("Visualizing 3 elements in the list", async () => {
    await getProducts(ProductListPaths.MOST_VIWED, "").then((response) => {
      const arrJSXList = paraseProductList(response);
      render(
        <BrowserRouter>
          <div data-testid="test-div">{arrJSXList}</div>
        </BrowserRouter>
      );
      expect(screen.getByTestId("test-div").childElementCount).toBe(3);
    });
  });

  it("3 images with the specific AltText is shown", async () => {
    await getProducts(ProductListPaths.MOST_VIWED, "").then((response) => {
      const arrJSXList = paraseProductList(response);
      render(
        <BrowserRouter>
          <div>{arrJSXList}</div>
        </BrowserRouter>
      );
      expect(screen.getByRole("img", { name: "product 3" })).toBeVisible();
      expect(screen.getByRole("heading", { name: "product 3" })).toBeVisible();

      expect(screen.getByRole("img", { name: "product 1" })).toBeVisible();
      expect(screen.getByRole("heading", { name: "product 1" })).toBeVisible();

      expect(screen.getByRole("img", { name: "product 2" })).toBeVisible();
      expect(screen.getByRole("heading", { name: "product 2" })).toBeVisible();
    });
  });
});
