/**
 * @module Service_Variation
 */

/**
 *
 * @typedef {Object} VariationObject
 * @property {string} name
 * @property {Object[]} entities
 * @property {string} entities.value
 * @property {string} entities.name
 */

/**
 * Mockuping variations for products
 */
const objColors = {
  name: "Color",
  entities: [
    { value: "color 1", name: "#bbbbbb" },
    { value: "color 2", name: "#0474fa" },
    { value: "color 3", name: "#f7e940" },
    { value: "color 4", name: "#ffffff" },
  ],
};

const objSizes = {
  name: "Size",
  entities: [
    { value: "xs", name: "XS" },
    { value: "s", name: "S" },
    { value: "m", name: "M" },
    { value: "l", name: "L" },
    { value: "xl", name: "XL" },
    { value: "2xl", name: "2XL" },
  ],
};

/**
 *
 * @param {string} strProductId
 * @returns {Promise<VariationObject[]>}
 */
const getProductVariations = (strProductId) => {
  objColors.productId = strProductId;
  objSizes.productId = strProductId;

  const arrVariations = [objColors, objSizes];
  return Promise.resolve(arrVariations);
};

export { getProductVariations };
