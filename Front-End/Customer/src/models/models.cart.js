/**
 *
 * @module Factory_Cart
 */

/**
 * @typedef {Object} CartItem
 * @property {string} CartItem.strId
 * @property {string} CartItem.strProductName
 * @property {string} CartItem.strPicturePath
 * @property {number} CartItem.intQuatity
 * @property {string[]} CartItem.arrVariationValues
 * @property {number} CartItem.dblUnitPrice
 */

/**
 * @typedef {Object} Cart
 * @property {string} strCartId
 * @property {Date} dtCreation
 * @property {number} dblSubTotal
 * @property {number} dblDiscountPercentage
 * @property {CartItem[]} arrItems
 *
 */

/**
 *
 * @param {string} strCartId
 * @param {Date} dtCreation
 * @param {number} dblSubTotal
 * @param {number} dblDiscountPercentage
 * @param {CartItem[]} arrItems
 * @returns {Cart}
 */
const createCart = (
  strCartId,
  dtCreation,
  dblSubTotal,
  dblDiscountPercentage,
  arrItems
) => {
  return {
    strCartId: strCartId,
    dtCreation: dtCreation,
    dblSubTotal: dblSubTotal,
    dblDiscountPercentage: dblDiscountPercentage,
    arrItems: arrItems,
  };
};

/**
 *
 * @param {string} strProductName
 * @param {string} strId
 * @param {string} strPicturePath
 * @param {number} intQuatity
 * @param {number} dblUnitPrice
 * @param {string[]} arrVariationValues
 * @returns {CartItem}
 */
const createCartItem = (
  strProductName,
  strId,
  strPicturePath,
  intQuatity,
  dblUnitPrice,
  arrVariationValues
) => {
  return {
    strId: strId,
    strProductName: strProductName,
    strPicturePath: strPicturePath,
    intQuatity: intQuatity,
    dblUnitPrice: dblUnitPrice,
    arrVariationValues: arrVariationValues,
  };
};

export { createCart, createCartItem };
