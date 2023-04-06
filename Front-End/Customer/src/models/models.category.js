/**
 *
 * @module Factory_Category
 */

/**
 *
 * @typedef {Object} Category
 * @property {string} strName
 * @returns
 */

/**
 * Returns the basic structure of a Category
 * @param {string} strName
 * @returns {Category}
 */
const createCategory = (strName) => ({
  strName: strName,
});

export { createCategory };
