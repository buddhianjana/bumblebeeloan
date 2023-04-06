import { getRadioButton } from "./SizePicker.util";

/**
 *
 * @param {object} props
 * @param {Object[]} props.arrSizeOptions
 * @param {string} props.arrSizeOptions.value
 * @param {string} props.arrSizeOptions.name
 * @param {function(string,string):void} props.handleClick
 * @returns {JSX.Element}
 */
const SizePicker = ({ arrSizeOptions, handleClick }) => {
  return (
    <fieldset className="mt-4">
      <legend className="sr-only">Choose a size</legend>
      <div className="grid grid-cols-3 gap-4">
        {arrSizeOptions.map((sizeOption, index) => {
          return getRadioButton(
            index,
            sizeOption.value,
            sizeOption.name,
            handleClick
          );
        })}
      </div>
    </fieldset>
  );
};

export { SizePicker };
