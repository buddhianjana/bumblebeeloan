/**
 *
 * @module ComponentUtil_ColorPicker
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
      title={strValue}
      className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
    >
      <input
        required
        onClick={handleClick.bind(null, strValue, strName)}
        type="radio"
        name="color-choice"
        value={strValue}
        className="sr-only peer"
        aria-labelledby="color-choice-0-label"
      />
      <span
        aria-hidden="true"
        className="h-9 w-9 border border-black border-opacity-20 rounded-full peer-checked:border-white peer-checked:border-opacity-100 peer-checked:ring-color_primary peer-checked:ring-2 "
        style={{ backgroundColor: strName }}
      ></span>
    </label>
  );
};

export { getRadioButton };
