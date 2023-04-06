import { Location } from "react-router-dom";
import { NavBarMenuLink } from "./NavBarMenu.Link";

/**
 *
 * @module Util_NavBarMenu
 */

/**
 *
 * @param {Object[]} arrOptions
 * @param {string} arrOptions.title
 * @param {string} arrOptions.uriParameter
 * @param {Location} location
 * @returns {JSX.Element[]}
 */
const getMainBarOptions = (arrOptions, location) => {
  return arrOptions.map((objOption, index) => {
    return (
      <div
        key={index}
        className="relative z-10 flex items-center transition-colors ease-out duration-200 border-b-2 -mb-px pt-px border-transparent"
      >
        <NavBarMenuLink objOption={objOption} />
      </div>
    );
  });
};

export { getMainBarOptions };
