import "./App.css";
import { getCategoryAll } from "./services";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { useEffect, useState } from "react";
import { CartContext } from "./contexts/CartContext";
import { createCart } from "./models/models.cart";
import { CartItem } from "./models";
import { adaptCategory } from "./adapters/";
import uniqid from "uniqid";
import { Credits } from "./components/Credit";

/**
 *
 * @param {{strPortalDivId:string}} param0
 * @returns
 */
function App({ strPortalDivId }) {
  const [cart, setCart] = useState(createCart(uniqid(), new Date(), 0, 0, []));
  const [arrOptions, setArrOptions] = useState([]);

  useEffect(() => {
    getCategoryAll().then((response) => {
      const arrOptionsNew = response.map((strCateogryRaw) => {
        const objCategory = adaptCategory(strCateogryRaw);
        return {
          title: objCategory.strName,
          uriParameter: objCategory.strName.trim(),
        };
      });
      setArrOptions(arrOptionsNew);
    });
  }, []);

  /**
   *
   * @param {CartItem[]} arrCartItems
   * @param {CartItem} objItem
   * @returns {CartItem[]}
   */
  const includeItemInCartArray = (arrCartItems, objItem) => {
    const index = arrCartItems.findIndex(
      (cartItem) => cartItem.strId === objItem.strId
    );

    if (index === -1) {
      return [...arrCartItems, objItem];
    } else {
      return arrCartItems.map((cartItem) => {
        if (cartItem.strId === objItem.strId) {
          objItem.intQuatity += cartItem.intQuatity;
          return objItem;
        }

        return cartItem;
      });
    }
  };

  /**
   *
   * @param {CartItem} objItem
   * @returns {void}
   */
  const addCartItem = (objItem) => {
    const newCart = { ...cart };
    const newCartItems = includeItemInCartArray(cart.arrItems, objItem);
    newCart.arrItems = newCartItems;

    newCart.dblSubTotal = newCartItems.reduce((prev, current) => {
      prev += current.intQuatity * current.dblUnitPrice;
      return prev;
    }, 0);

    setCart(newCart);
  };

  /**
   *
   * @returns {number}
   */
  const getCartSubTotal = () => {
    return cart.dblSubTotal;
  };

  /**
   *
   * @param {string} strCartItemId
   * @returns {boolean}
   */
  const deleteCartItem = (strCartItemId) => {
    const newCartItems = cart.arrItems.filter(
      (cartItem) => cartItem.strId !== strCartItemId
    );

    if (newCartItems.length < cart.arrItems.length) {
      const newCart = {
        ...cart,
        dblSubTotal: newCartItems.reduce(
          (subTotal, carItem) =>
            (subTotal += carItem.dblUnitPrice * carItem.intQuatity),
          0
        ),
      };
      newCart.arrItems = newCartItems;
      setCart(newCart);
      return true;
    }

    return false;
  };

  /**
   *
   * @returns {import("./models/models.cart").CartItem[]}
   */
  const getCartItems = () => {
    return cart.arrItems;
  };

  return (
    <CartContext.Provider
      value={{ addCartItem, getCartSubTotal, deleteCartItem, getCartItems }}
    >
      <div className="flex flex-col  min-h-screen h-full relative">
        <NavBar strPortalDivId={strPortalDivId} arrOptions={arrOptions} />
        <div className="flex-1">
          <Outlet />
        </div>
        <div id="div-portal"></div>
      </div>
    </CartContext.Provider>
  );
}

export default App;
