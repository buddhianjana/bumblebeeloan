import { Link } from "react-router-dom";
import { CartItem } from "../../../../models/models.cart";
import { BaseURLPath } from "../../../../utilities/constants";

/**
 *
 * @param {object} props
 * @param {CartItem} props.cartItem
 * @param {function(CartItem):void} props.addCartItem
 * @param {function(string):boolean} props.deleteCartItem
 * @returns
 */
const ShoppingCartItem = ({ cartItem, addCartItem, deleteCartItem }) => {
  return (
    <>
      <Link
        to={BaseURLPath + "/product/" + cartItem.strId.split("-")[0]}
        className="h-auto w-24 flex-shrink-0 overflow-hidden rounded-md "
      >
        <img
          src={cartItem.strPicturePath}
          alt={cartItem.strProductName}
          className="h-full w-full object-contain object-center"
        />
      </Link>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link
                title={cartItem.strProductName}
                to={BaseURLPath + "/product/" + cartItem.strId.split("-")[0]}
              >
                {(() => {
                  if (cartItem.strProductName.length <= 30) {
                    return cartItem.strProductName;
                  }

                  return cartItem.strProductName.substring(0, 27) + "...";
                })()}
              </Link>
            </h3>
            <p className="ml-4">{cartItem.dblUnitPrice.toString()+ " LKR" }</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {cartItem.arrVariationValues.join(", ").toLocaleUpperCase()}
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">
            {"Qty " + cartItem.intQuatity.toString()}
          </p>

          <div className="flex">
            <button
              type="button"
              onClick={deleteCartItem.bind(null, cartItem.strId)}
              className="font-medium text-color_primary hover:text-color_primary_softer"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export { ShoppingCartItem };
