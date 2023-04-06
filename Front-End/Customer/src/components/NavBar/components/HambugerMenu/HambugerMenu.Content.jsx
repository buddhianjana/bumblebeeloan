import { useNavigate } from "react-router-dom";
import { SidePopUp } from "../../../SidePopUp";
import { getPopUpContent } from "./HambugerMenu.util";

/**
 *
 * @param {Object} props
 * @param {string} props.strPortalDivId
 * @param {function():void} props.closeSideMenu
 * @param {Object[]} props.arrOptions
 * @param {string} props.arrOptions.title
 * @param {string} props.arrOptions.uriParameter
 * @returns {JSX.Element}
 *
 */
const HamburgerMenuContent = ({
  strPortalDivId,
  closeSideMenu,
  arrOptions,
}) => {
  const navigateTo = useNavigate();
  return (
    <SidePopUp
      side="left"
      strPortalDivId={strPortalDivId}
      strMaxWidth={"200px"}
      onClosePopUp={closeSideMenu}
      strTitle="Categories"
    >
      {getPopUpContent(arrOptions, navigateTo, closeSideMenu)}
    </SidePopUp>
  );
};

export { HamburgerMenuContent };
