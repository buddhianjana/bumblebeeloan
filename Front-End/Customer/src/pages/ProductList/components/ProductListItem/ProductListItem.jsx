import { Link } from "react-router-dom";
import { Product } from "../../../../models";

/**
 *
 * @param {object} props
 * @param {Product} props.objProduct
 * @returns {JSX.Element}
 */
const ProductListItem = ({ objProduct }) => {
  return (
    <div className="group relative flex flex-col h-full">
      <div className="flex-1 flex items-center justify-center">
        <Link
          to={"../product/" + objProduct.strId}
          state={objProduct}
          className="flex items-center bg-white rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-auto"
        >
          <img
            src={objProduct.strImagePath}
            alt={objProduct.strTitle}
            className="object-center sm:h-auto sm:max-w-[160px]"
          />
        </Link>
      </div>

      <div className="mt-4 flex flex-col justify-between">
        <h3 className="text-sm text-gray-700">
          <Link to={"../product/" + objProduct.strId} state={objProduct}>
            {objProduct.strTitle}
          </Link>
        </h3>
        {/* <p className="mt-1 text-sm text-gray-500">Black</p> */}

        <p className="text-sm font-medium text-gray-900">
          { objProduct.fltPrice.toString() + " LKR" }
        </p>
      </div>
    </div>
  );
};
export { ProductListItem };
