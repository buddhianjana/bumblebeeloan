import { getActiveStars, getDeactiveStars } from "./ProductReview.util";

/**
 *
 * @param {object} props
 * @param {number} props.intAverageStars
 * @param {number} props.intQuantity
 * @returns
 */
const ProductReview = ({ intAverageStars, intQuantity }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {intAverageStars > 0 && intAverageStars <= 5
          ? getActiveStars(intAverageStars)
          : null}
        {5 - intAverageStars > 0 ? getDeactiveStars(5 - intAverageStars) : null}
      </div>
      <p className="ml-3 text-sm font-medium text-color_primary">
        {intQuantity + " reviews"}
      </p>
    </div>
  );
};
export { ProductReview };
