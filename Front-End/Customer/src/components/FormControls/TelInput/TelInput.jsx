import { useId } from "react";
import { useState } from "react";
import uniqid from "uniqid";

/**
 *
 * @param {Object} props
 * @param {string} props.strFieldName
 * @param {boolean} props.booIsRequired
 * @param {function(string):void} props.onValueChange
 * @param {string} props.strInitialValue
 * @param {string} props.strHelpText
 * @param {string} props.strPlaceHolder
 * @returns {JSX.Element}
 */
const TelInput = ({
  strFieldName,
  booIsRequired = false,
  onValueChange,
  strInitialValue = "",
  strHelpText = "",
  strPlaceHolder = " ",
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
          <input
            id={strFieldId}
            required={booIsRequired}
            className="peer text-sm rounded-md border-[1px] border-solid shadow-inner p-1 pl-2 w-full invalid:border-red-500 invalid:placeholder-shown:border-[#e5e7eb]"
            type="tel"
            autoComplete="none"
            placeholder={strPlaceHolder.length > 0 ? strPlaceHolder : " "}
            onChange={handleValueChange}
            defaultValue={strInitialValue}
          />
          <span className=" self-start relative peer-invalid:after:absolute peer-invalid:after:whitespace-nowrap peer-invalid:after:text-white   peer-invalid:after:text-[10px] peer-invalid:after:top-[-23px] peer-invalid:after:py-[2px] peer-invalid:after:px-2 peer-invalid:after:rounded-md peer-invalid:after:align-top hidden peer-invalid:inline peer-invalid:after:bg-red-500  peer-invalid:peer-placeholder-shown:after:bg-gray-600 peer-invalid:after:content-['invalid_format'] peer-invalid:peer-placeholder-shown:after:content-['required'] peer-invalid:after:left-[-79px] peer-invalid:peer-placeholder-shown:after:left-[-55px]"></span>
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

export { TelInput };
