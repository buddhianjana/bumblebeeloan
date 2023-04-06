import { useSearchParams } from "react-router-dom";
import { BaseURLPath, ProductListPaths } from "../../../../utilities/constants";

/**
 *
 * @param {Object} props
 * @param {Object} props.objOption
 * @param {string} props.objOption.title
 * @param {string} props.objOption.uriParameter
 * @param {function(string):void} props.navigateTo
 * @param {function():void} props.closeSideMenu
 * @returns {JSX.Element}
 */
const HamburgerMenuLink = ({ objOption, navigateTo, closeSideMenu }) => {
  const [searchParams] = useSearchParams();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          const strUtl =
            BaseURLPath +
            "/productlist/" +
            ProductListPaths.CATEGORY +
            "?value=" +
            objOption.uriParameter;
          navigateTo(strUtl);
          closeSideMenu();
        }}
        className={
          "whitespace-nowrap w-full pl-2 capitalize text-base font-medium text-left border-l-4 text-color_primary" +
          (searchParams.get("value") === objOption.uriParameter
            ? " border-l-color_primary_softer"
            : " border-l-transparent")
        }
      >
        {objOption.title}
      </button>
    </>
  );
};

export { HamburgerMenuLink };
