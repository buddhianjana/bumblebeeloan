import { createProduct, createVariation } from "../models";
import { Product, Variation } from "../models";

/**
 *
 * @module Adapter_Product
 */

/**
 *
 * @param {string} strCategory
 * @returns {("f"|"m"|"")}
 */
const getGender = (strCategory) => {
  if (strCategory.toLowerCase().trim() === "women's clothing") {
    return "f";
  }

  if (strCategory.toLowerCase().trim() === "men's clothing") {
    return "m";
  }

  return "";
};

const arrColors = [
  {
    value: "White",
    name: "#ffffff",
  },
  {
    value: "Black",
    name: "#000000",
  },
  {
    value: "Gray",
    name: "#808080",
  },
  {
    value: "Wine Red",
    name: "#b11226",
  },
  { name: "#FFDF00", value: "Golden Yellow" },
  { name: "#02590F", value: "Deep Green" },
  { name: "#659EC7", value: "Blue Koi" },
  { name: "#BB6528", value: "Ruddy Brown" },
  { name: "#BB6528", value: "Blaze Orange" },
];

const getRandomColors = () => {
  const shuffled = [...arrColors].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, 3);
};

/**
 *
 * @param {string} strCategory
 * @returns {Variation[]}
 */
const getSimulatedVariations = (strCategory) => {
  if (
    strCategory.toLowerCase() === "women's clothing" ||
    strCategory.toLowerCase() === "men's clothing"
  ) {
    const objSizes = createVariation("size", "Size", [
      { value: "xs", name: "XS" },
      { value: "s", name: "S" },
      { value: "m", name: "M" },
      { value: "l", name: "L" },
      { value: "xl", name: "XL" },
      { value: "2xl", name: "2XL" },
    ]);
    const objColors = createVariation("color", "Color", getRandomColors());

    return [objSizes, objColors];
  }

  if (strCategory.toLowerCase() === "jewelry") {
    const objSizes = createVariation("size", "Size", [
      { value: "s", name: "S" },
      { value: "m", name: "M" },
      { value: "l", name: "L" },
    ]);

    return [objSizes];
  }

  return [];
};

/**
 *
 * @param {object} objResponse
 * @returns {Product}
 */
const adaptProduct = (objResponse) => {
  try {
    return createProduct(
      objResponse.id.toString(),
      getGender(objResponse.category),
      objResponse.category,
      objResponse.description,
      !isNaN(objResponse.price) ? Number(objResponse.price) : 0,
      objResponse.image,
      objResponse.title,
      getSimulatedVariations(objResponse.category)
    );
  } catch (error) {
    throw error;
  }
};

export { adaptProduct };
