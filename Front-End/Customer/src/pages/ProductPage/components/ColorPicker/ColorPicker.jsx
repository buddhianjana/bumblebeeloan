import { getRadioButton } from "./ColorPicker.util";

/**
 *
 * @param {object} props
 * @param {Object[]} props.arrColorOptions
 * @param {string} props.arrColorOptions.value
 * @param {string} props.arrColorOptions.name
 * @param {function(string,string):void} props.handleClick
 * @returns {JSX.Element}
 */
const ColorPicker = ({ arrColorOptions, handleClick }) => {
  return (
    <fieldset className="mt-4">
      <div
        data-testid="colorpicker-container"
        className="flex items-center space-x-3"
      >
        {arrColorOptions.map((ObjColorOption, index) => {
          return getRadioButton(
            index,
            ObjColorOption.value,
            ObjColorOption.name,
            handleClick
          );
        })}
      </div>
    </fieldset>
  );
};
export { ColorPicker };
