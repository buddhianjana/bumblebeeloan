import { useState, useId } from "react";

/**
 *
 * @param {Object} props
 * @param {string} props.strFieldName
 * @param {boolean} props.booIsRequired
 * @param {function(string):void} props.onValueChange
 * @param {string} props.strSelectedValue
 * @param {string} props.strHelpText
 * @param {string} props.strUnselectedText
 * @param {Object[]} props.arrValues
 * @param {string} props.arrValues.name
 * @param {string} props.arrValues.value
 * @returns {JSX.Element}
 */
const SelectField = ({
  strFieldName,
  booIsRequired = false,
  onValueChange,
  strUnselectedText,
  strSelectedValue = "",
  strHelpText = "",
  arrValues,
}) => {
  const [strFieldId] = useState(useId());
  const handleValueChange = (e) => {
    onValueChange(
      e.currentTarget.checkValidity() ? e.currentTarget.value : null
    );
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor={strFieldId}
      >
        {strFieldName}
      </label>
      <div>
        <div className="flex">
          <select
            className="peer text-sm rounded-md border-[1px] border-solid shadow-inner p-1 pl-2 w-full invalid:border-[#e5e7eb]"
            name={strFieldId}
            id={strFieldId}
            required={booIsRequired}
            onChange={handleValueChange}
          >
            <option key={10000} value="">
              {strUnselectedText}
            </option>
            {arrValues.map((objValue, index) => {
              return (
                <option key={index} value={objValue.value}>
                  {objValue.name}
                </option>
              );
            })}
          </select>
          <span className=" self-start relative peer-invalid:after:absolute peer-invalid:after:whitespace-nowrap peer-invalid:after:text-white   peer-invalid:after:text-[10px] peer-invalid:after:top-[-23px] peer-invalid:after:py-[2px] peer-invalid:after:px-2 peer-invalid:after:rounded-md peer-invalid:after:align-top hidden peer-invalid:inline peer-invalid:after:bg-gray-600   peer-invalid:after:content-['required'] peer-invalid:after:left-[-55px]"></span>
        </div>
        {strHelpText && strHelpText.length ? (
          <label htmlFor={strFieldId} className="mt-2 text-xs text-gray-600">
            {strHelpText}
          </label>
        ) : null}
      </div>
    </div>
  );
};

export { SelectField };
