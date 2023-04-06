/**
 *
 * @module ComponentUtil_SizePicker
 */

/**
 *
 * @param {number} index
 * @param {string} strValue
 * @param {string} strName
 * @param {function(string,string):void} handleClick
 * @returns {JSX.Element}
 */
const getRadioButton = (index, strValue, strName, handleClick) => {
  return (
    <label
      key={index}
      className="relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer"
    >
      <input
        required
        onClick={handleClick.bind(null, strValue, strName)}
        className="sr-only peer"
        type="radio"
        name="size-choice"
        value={strValue}
        aria-labelledby="size-choice-1-label"
      />
      <span id="size-choice-1-label">{strName}</span>

      <span
        className="absolute -inset-px rounded-md pointer-events-none border-2 border-transparent peer-checked:border-color_primary"
        aria-hidden="true"
      ></span>
    </label>
  );
};

export { getRadioButton };
