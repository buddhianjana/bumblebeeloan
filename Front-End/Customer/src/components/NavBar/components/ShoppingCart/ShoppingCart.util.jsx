import { SidePopUp } from "./../../../SidePopUp";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { CartItem } from "../../../../models/models.cart";
import { NavigateFunction } from "react-router-dom";
import { BaseURLPath } from "../../../../utilities/constants";

/**
 *
 * @module ComponentUtil_ShoppingCart
 */

/**
 *
 * @param {string} strPortalDivId
 * @param {function():void} closeSideMenu
 * @param {function(string):void} navigateTo
 * @returns {JSX.Element}
 */
const getCartMenu = (strPortalDivId, closeSideMenu, navigateTo) => {
  const testJSX = <div>Hola mundo!</div>;

  return (
    <SidePopUp
      side="rigth"
      strPortalDivId={strPortalDivId}
      strMaxWidth={"300px"}
      onClosePopUp={closeSideMenu}
      strTitle="Shopping Cart"
    >
      {testJSX}
    </SidePopUp>
  );
};

/**
 *
 * @param {import("../../../../models/models.cart").CartItem[]} arrCartItems
 */
const countItems = (arrCartItems) => {
  return arrCartItems.reduce((prev, curr) => {
    prev += 1;
    return prev;
  }, 0);
};

/**
 *
 * @param {CartItem[]} arrCartItems
 * @param {number} dblCartSubTotal
 * @param {function(CartItem):void} addCartItem
 * @param {function(string):boolean} deleteCartItem
 * @param {function():void} closeSideMenu
 * @param {NavigateFunction} navigateTo
 */
const getCartContent = (
  arrCartItems,
  dblCartSubTotal,
  addCartItem,
  deleteCartItem,
  closeSideMenu,
  navigateTo
) => {
  return (
    <>
      {arrCartItems.length > 0 ? (
        <div className="flex flex-col">
          <ul className="-my-6 divide-y py-6 divide-gray-200 px-4 sm:px-6">
            {arrCartItems.map((cartItem) => (
              <li key={cartItem.strId} className="flex py-6">
                <ShoppingCartItem
                  cartItem={cartItem}
                  addCartItem={addCartItem}
                  deleteCartItem={deleteCartItem}
                />
              </li>
            ))}
          </ul>
          <div>
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>{ dblCartSubTotal+ " LKR" }</p>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => {
                    navigateTo(BaseURLPath + "/checkout");
                    closeSideMenu();
                  }}
                  type="button"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-color_primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-color_primary_darker"
                >
                  Checkout
                </button>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{" "}
                  <button
                    onClick={closeSideMenu}
                    type="button"
                    className="font-medium text-color_primary hover:text-color_primary_soft"
                  >
                    Continue Shopping<span aria-hidden="true"> →</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-[320px] -m-2 p-2 py-6 text-center text-gray-900">
          {"The Cart is empty."}
        </div>
      )}
    </>
  );
};

export { getCartMenu, countItems, getCartContent };
