import { useLayoutEffect } from "react";
import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

/**
 *
 * @param {Object} props
 * @param {string} props.side
 * @param {JSX.Element} props.children
 * @param {string} props.strPortalDivId
 * @param {string} props.strMaxWidth
 * @param {function():void} props.onClosePopUp
 * @param {string} props.strTitle
 * @returns {JSX.Element}
 */
const SidePopUp = ({
  side,
  children,
  strPortalDivId,
  // @ts-ignore
  strMaxWidth = "fit-content",
  onClosePopUp,
  strTitle,
}) => {
  const redDivContainer = useRef(null);
  const redDivShade = useRef(null);
  //const el = document.createElement("div");

  useLayoutEffect(() => {
    // @ts-ignore
    redDivShade.current.scrollIntoView({ behavior: "smooth" });

    //setTimeout(() => {
    // @ts-ignore
    redDivContainer.current.classList.remove(
      side === "left" ? "translate-x-[-100%]" : "translate-x-full"
    );
    // @ts-ignore
    redDivContainer.current.classList.add("translate-x-0");
    //}, 1);
  }, [side]);

  const onClose = () => {
    // @ts-ignore
    redDivContainer.current.classList.remove("translate-x-0");

    // @ts-ignore
    redDivContainer.current.classList.add(
      side === "left" ? "translate-x-[-100%]" : "translate-x-full"
    );

    setTimeout(() => {
      onClosePopUp();
    }, 700);
  };

  return ReactDOM.createPortal(
    <div
      id="shade-div"
      ref={redDivShade}
      onClick={(e) => {
        // @ts-ignore
        if (e.target.id === redDivShade.current.id) {
          onClose();
        }
      }}
      data-testid="div-sidepopup"
      className={
        "overflow-hidden absolute top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 z-50 flex " +
        (side === "left" ? "justify-start" : "justify-end")
      }
    >
      <div
        ref={redDivContainer}
        className={
          "relative overflow-x-hidden max-h-screen h-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto max-w-xs sm:max-w-md transform transition ease-in-out duration-700 " +
          (side === "left" ? "translate-x-[-100%]" : "translate-x-full")
        }
        //style={{ maxWidth: strMaxWidth }}
      >
        <div className="px-4 sm:px-6 pt-5 pb-6 flex  ">
          {(() => {
            if (strTitle && strTitle.length > 0) {
              return (
                <h2 className="flex-1 text-lg font-medium text-gray-900">
                  {strTitle}
                </h2>
              );
            }
            return null;
          })()}

          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
          >
            <svg
              className="h-6 w-6"
              x-description="Heroicon name: outline/x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className=" flex flex-col py-4 ">{children}</div>

          <div className="border-t border-gray-200 py-6 px-4 space-y-6">
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    // @ts-ignore
    document.getElementById(strPortalDivId)
  );
};

export { SidePopUp };
