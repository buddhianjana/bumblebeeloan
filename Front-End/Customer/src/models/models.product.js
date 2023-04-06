import { Variation } from "./models.variation";

/**
 *
 * @module Factory_Product
 */

/**
 *
 * @typedef {Object} Product
 * @property {string} Product.strId
 * @property {string} Product.strGender
 * @property {string} Product.strCategoryId
 * @property {string} Product.strDescription
 * @property {number} Product.fltPrice
 * @property {string} Product.strImagePath
 * @property {string} Product.strTitle
 * @property {Variation[]} Product.arrVariations
 */

/**
 *
 * @param {string} strId
 * @param {string} strGender
 * @param {string} strCategoryId
 * @param {string} strDescription
 * @param {number} fltPrice
 * @param {string} strImagePath
 * @param {string} strTitle
 * @param {Variation[]} arrVariations
 * @returns {Product}
 */
const createProduct = (
  strId,
  strGender,
  strCategoryId,
  strDescription,
  fltPrice,
  strImagePath,
  strTitle,
  arrVariations
) => ({
  strId,
  strGender,
  strCategoryId,
  strDescription,
  fltPrice,
  strImagePath,
  strTitle,
  arrVariations,
});

export { createProduct };
