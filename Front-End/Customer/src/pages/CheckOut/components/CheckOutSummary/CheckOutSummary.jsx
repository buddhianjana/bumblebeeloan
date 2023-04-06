import { CartItem } from "../../../../models/";
import { CheckOutSummaryItem } from "../CheckOutSummaryItem";

/**
 *
 * @param {object} props
 * @param {number} props.dblOrderTotal
 * @param {CartItem[]} props.arrCartItems
 * @returns
 */
const CheckOutSummary = ({ dblOrderTotal, arrCartItems }) => {
  return (
    <div>
      <h3 className="text-xl tracking-tight text-gray-900">Your Order:</h3>

      {arrCartItems && arrCartItems.length > 0 ? (
        <div className="mt-6">
          <div className="grid grid-cols-[80%_20%] mb-6">
            <p className=" text-center  font-bold text-gray-700 ">Product</p>
            <p className=" text-center  font-bold text-gray-700">Subtotal</p>
          </div>
          <ul className="mt-4 mb-4 flex flex-col gap-4">
            {arrCartItems
              ? arrCartItems.map((objCartItem) => (
                  <div key={objCartItem.strId}>
                    <CheckOutSummaryItem objCartItem={objCartItem} />
                  </div>
                ))
              : null}
          </ul>
          <div className="grid grid-cols-[1fr_auto] justify-end gap-3 sm:gap-4">
            <p className="font-bold text-gray-700 text-right">Subtotal:</p>
            <p className=" flex justify-center items-center text-sm font-medium text-gray-700">
              {(dblOrderTotal ?? 0).toString() + " LKR" }
            </p>
            <div>

            </div>
            <p className=" flex justify-center items-center text-sm font-medium text-gray-700">
            
            </p>
            <p className="font-bold text-gray-700 text-right border-t-[2px] border-t-transparent pt-2">
              TOTAL:
            </p>
            <p className=" flex justify-center items-center text-sm font-bold text-gray-700 border-t-[2px] pt-2">
              {(dblOrderTotal ?? 0).toString() + " LKR" }
            </p>
          </div>
        </div>
      ) : (
        <p className="flex justify-center items-center mt-4 text-sm sm:text-base font-medium text-red-500">
          You have no Items in the Cart to checkout.
        </p>
      )}
    </div>
  );
};

export { CheckOutSummary };
