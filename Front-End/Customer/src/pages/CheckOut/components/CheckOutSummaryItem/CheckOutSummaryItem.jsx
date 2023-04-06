import { CartItem } from "../../../../models/";

/**
 *
 * @param {Object} props
 * @param {CartItem} props.objCartItem
 * @returns {JSX.Element}
 */
const CheckOutSummaryItem = ({ objCartItem }) => {
  return (
    <li className="grid grid-cols-[80%_20%] border-b border-b-gray-100 pb-2">
      <div className="flex gap-3">
        <div className="h-auto w-11 sm:w-16 flex-shrink-0 overflow-hidden rounded-md ">
          <img
            src={objCartItem.strPicturePath}
            alt={objCartItem.strProductName}
          />
        </div>
        <div className="flex flex-col justify-center">
          <p
            title={objCartItem.strProductName}
            className="block text-sm font-medium text-gray-700"
          >
            {objCartItem.strProductName.substring(0, 27) + "..."}
          </p>
          <p className="block text-sm font-light text-gray-700">
            {objCartItem.arrVariationValues.join(", ").toUpperCase()}
          </p>
          <p className="block font-bold text-gray-700">
            {"x" + objCartItem.intQuatity.toString()}
          </p>
        </div>
      </div>
      <p className="flex justify-center items-center text-sm font-medium text-gray-700">
        {(objCartItem.dblUnitPrice * objCartItem.intQuatity).toString() + " LKR" }
      </p>
    </li>
  );
};
export { CheckOutSummaryItem };
