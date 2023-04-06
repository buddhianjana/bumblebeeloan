import { SidePopUp } from "../components/SidePopUp";
import { render, screen } from "@testing-library/react";

describe("SidePopUp component", () => {
  it("Showing the Portal on top of all to the Rigth", () => {
    Element.prototype.scrollIntoView = jest.fn();

    const children = (
      <div>
        {" "}
        <a href="#">link 1</a>
        <a href="#">link 2</a>
      </div>
    );

    render(<div id="div-container-popup" />);
    render(
      <SidePopUp
        side="rigth"
        children={children}
        strPortalDivId="div-container-popup"
        strMaxWidth="200px"
        onClosePopUp={jest.fn()}
        strTitle="PopUp Title"
      />
    );
    expect(screen.getByTestId("div-sidepopup").childElementCount).toBe(1);
    expect(
      screen.getByTestId("div-sidepopup").classList.contains("justify-end")
    ).toBe(true);
    expect(
      screen.getByTestId("div-sidepopup").classList.contains("justify-start")
    ).toBe(false);
  });
});
