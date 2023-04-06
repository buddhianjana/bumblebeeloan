/**
 *
 * @module ComponentUtil_HambugerMenu
 */

import { HamburgerMenuLink } from "./HamburgerMenu.Link";

/**
 *
 * @param {Object[]} arrOptions
 * @param {string} arrOptions.title
 * @param {string} arrOptions.uriParameter
 * @param {function(string):void} navigateTo
 * @param {function():void} closeSideMenu
 * @returns {JSX.Element}
 */
const getPopUpContent = (arrOptions, navigateTo, closeSideMenu) => {
  return (
    <ul className="flex flex-col gap-6 px-4 sm:px-6 mr-8">
      {arrOptions.map((objOption, index) => (
        <li key={index}>
          <HamburgerMenuLink
            objOption={objOption}
            navigateTo={navigateTo}
            closeSideMenu={closeSideMenu}
          />
        </li>
      ))}
    </ul>
  );
};

export { getPopUpContent };
