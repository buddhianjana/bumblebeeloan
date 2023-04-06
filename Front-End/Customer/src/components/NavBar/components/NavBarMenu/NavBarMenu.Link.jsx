import { NavLink, useSearchParams } from "react-router-dom";
import { BaseURLPath, ProductListPaths } from "../../../../utilities/constants";

/**
 *
 * @param {Object} props
 * @param {Object} props.objOption
 * @param {string} props.objOption.title
 * @param {string} props.objOption.uriParameter
 * @returns {JSX.Element}
 */
const NavBarMenuLink = ({ objOption }) => {
  const [searchParams] = useSearchParams();
  return (
    <NavLink
      to={
        BaseURLPath +
        "/productlist/" +
        ProductListPaths.CATEGORY +
        "?value=" +
        objOption.uriParameter
      }
      className={({ isActive }) =>
        "text-sm capitalize font-medium h-full flex justify-center items-center text-gray-700 hover:text-color_primary border-b-2" +
        (searchParams.get("value") === objOption.uriParameter
          ? " border-b-color_primary text-color_primary"
          : " border-b-transparent")
      }
    >
      {objOption.title}
    </NavLink>
  );
};

export { NavBarMenuLink };
