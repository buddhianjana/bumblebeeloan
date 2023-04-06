import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMainBarOptions } from "./NavBarMenu.util";

/**
 *
 * @param {Object} props
 * @param {Object[]} props.arrOptions
 * @param {string} props.arrOptions.title
 * @param {string} props.arrOptions.uriParameter
 * @returns {JSX.Element}
 */
const NavBarMenu = ({ arrOptions }) => {
  const [mainLinkOptions, setMainLinkOptions] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMainLinkOptions(getMainBarOptions(arrOptions, location));
  }, [arrOptions, location]);

  return <div className="h-full flex space-x-8">{mainLinkOptions}</div>;
};

export { NavBarMenu };
