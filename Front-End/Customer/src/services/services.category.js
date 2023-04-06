/**
 *
 * @module Service_Category
 */

import { callFetchRetry, strBASE_URL } from "./services.util";

/**
 * RequestInit configuration options
 */
const objRequestInit = {
  mode: "cors",
};

/**
 * Mockuping the categories, since there is no testing API service by the time this app was build.
 */
const objCategories = [
  {
    id: "Cables & Connectors",
    displayName: "Cables & Connectors",
    value: "Cables & Connectors",
  },
  {
    id: "jewelery",
    displayName: "Jewelery",
    value: "jewelery",
  },
  {
    id: "men's clothing",
    displayName: "Men's Clothing",
    value: "men's%20clothing",
  },
  {
    id: "women's clothing",
    displayName: "Women's Clothing",
    value: "women's%20clothing",
  },
];

/**
 *
 * @typedef {Object} CategoryObject
 * @property {string} id
 * @property {string} displayName
 * @property {string} value
 */

/**
 *
 * @returns {Promise<string[]>}
 */
const getCategoryAll = () => {
  try {
    const strURL = strBASE_URL;
    return callFetchRetry(strURL, objRequestInit, 1);
  } catch (error) {
    console.log("getCategoryAll.catch!");
    console.error(error);
    return Promise.resolve([
      "Cables & Connectors",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ]);
  }
};

export { getCategoryAll };
