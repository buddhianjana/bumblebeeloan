import { render, screen } from "@testing-library/react";
import { ColorPicker } from "../pages/ProductPage/components/ColorPicker";
//

const objColorOptions = [
  {
    value: "White",
    name: "#ffffff",
  },
  {
    value: "Black",
    name: "#000000",
  },
  {
    value: "Gray",
    name: "#808080",
  },
  {
    value: "Wine Red",
    name: "#b11226",
  },
];

describe("ColorPicker component", () => {
  it("ColorPicker was setup to dosplay 4 radiobuttons and contains 4 elements inside", () => {
    render(
      <ColorPicker arrColorOptions={objColorOptions} handleClick={jest.fn()} />
    );

    expect(screen.getByTestId("colorpicker-container").childElementCount).toBe(
      4
    );
  });
});
