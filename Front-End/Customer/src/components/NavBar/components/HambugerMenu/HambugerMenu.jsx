import { useState } from "react";
import { HamburgerMenuContent } from "./HambugerMenu.Content";

/**
 *
 * @param {object} props
 * @param {string} props.strPortalDivId
 * @param {Object[]} props.arrOptions
 * @param {string} props.arrOptions.title
 * @param {string} props.arrOptions.uriParameter
 * @returns {JSX.Element}
 */
const HamburgerMenu = ({ strPortalDivId, arrOptions }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const openSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };
  return (
    <>
      <button
        type="button"
        onClick={openSideMenu}
        className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      {isSideMenuOpen ? (
        <HamburgerMenuContent
          closeSideMenu={closeSideMenu}
          strPortalDivId={strPortalDivId}
          arrOptions={arrOptions}
        />
      ) : null}
    </>
  );
};

export { HamburgerMenu };
