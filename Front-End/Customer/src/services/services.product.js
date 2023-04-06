import { strBASE_URL, callFetchRetry } from "./services.util";

/**
 * @module Service_Product
 */

/**
 * RequestInit configuration options
 */
const objRequestInit = {
  mode: "cors",
};

/**
 *
 * @param {string} strId
 * @returns {Promise<Object>}
 */
const getProductById = (strId) => {
  const strURL = strBASE_URL;

  return callFetchRetry(strURL, objRequestInit, 1);
};

/**
 *
 * @param {string} strCategoryName
 * @returns {Promise<Object[]>}
 */
const getProductsByCategory = (strCategoryName) => {
  const strURL = strBASE_URL;

  return callFetchRetry(strURL, objRequestInit, 1);
};

/**
 *
 * @returns {Promise<Object[]>}
 */
const getProductsAll = () => {
  const strURL = strBASE_URL;

  return callFetchRetry(strURL, objRequestInit, 1);
};

/**
 *
 * @returns {Promise<Object[]>}
 */
const getProductsMostViwed = () => {
  const strURL = strBASE_URL;

  return callFetchRetry(strURL, objRequestInit, 1);
};

export {
  getProductById,
  getProductsByCategory,
  getProductsAll,
  getProductsMostViwed,
};
