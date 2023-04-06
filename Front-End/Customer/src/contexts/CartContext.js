import { createContext } from "react";

/**
 * @typedef {Object} CartContextValue
 * @property {function():number} getCartSubTotal
 * @property {function(import("../models/models.cart").CartItem):void} addCartItem
 * @property {function(string):boolean} deleteCartItem
 * @property {function():import("../models/models.cart").CartItem[]} getCartItems
 */

/**
 * @type {React.Context<CartContextValue>}
 */
const CartContext = createContext(null);

export { CartContext };
