/**
 *
 * @module Factory_Variation
 */

/**
 *
 * @typedef {Object} Variation
 * @property {string} strVariationId
 * @property {string} strName
 * @property {Object[]} arrValues
 * @property {string} arrValues.name
 * @property {string} arrValues.value
 */

/**
 *
 * @param {string} strVariationId
 * @param {string} strName
 * @param {object[]} arrValues
 * @param {string} arrValues.name
 * @param {string} arrValues.value
 * @returns {Variation}
 */
const createVariation = (strVariationId, strName, arrValues) => ({
  strVariationId,
  strName,
  arrValues,
});

export { createVariation };
