import { createVariation } from "../models/models.variation";
/**
 *
 * @module Adapter_Variation
 */

/**
 *
 * @param {*} objResponse
 * @returns
 */
const adaptVariation = (objResponse) => {
  try {
    return createVariation(
      objResponse.id,
      objResponse.productId,
      objResponse.displayName,
      objResponse.values
    );
  } catch (error) {
    throw error;
  }
};

export { adaptVariation };
