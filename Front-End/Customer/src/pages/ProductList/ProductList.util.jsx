/**
 * @module ComponentUtil_ProductList
 */

import { ProductListPaths } from "../../utilities/constants";

/**
 *
 * @param {string} strBranch
 * @param {URLSearchParams} searchParams
 * @returns {JSX.Element}
 */
const getListTitle = (strBranch, searchParams) => {
  if (strBranch.toLowerCase() === ProductListPaths.MOST_VIWED) {
    return (
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
        {"Bumble Bee"}
      </h2>
    );
  }

  if (strBranch.toLowerCase() === ProductListPaths.CATEGORY) {
    return (
      <h2 className=" capitalize text-2xl font-extrabold tracking-tight text-gray-900">
        {searchParams.get("value")}
      </h2>
    );
  }

  if (strBranch.toLowerCase() === ProductListPaths.SEARCH) {
    return (
      <div className="flex gap-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          {"Search results "}
        </h2>
        <p className="text-base text-gray-90 tracking-tight italic">
          {"Search term: " + searchParams.get("value")}
        </p>
      </div>
    );
  }

  return (
    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
      {"All Products"}
    </h2>
  );
};

export { getListTitle };
