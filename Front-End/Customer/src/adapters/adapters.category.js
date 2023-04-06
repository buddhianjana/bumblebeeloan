import { createCategory } from "../models/models.category";
import { Category } from "../models";

/**
 *
 * @module Adapter_Category
 */

/**
 *
 * @param {string} strResponse
 * @returns {Category}
 */

const adaptCategory = (strResponse) => {
  try {
    return createCategory(strResponse);
  } catch (error) {
    throw error;
  }
};

export { adaptCategory };
