import PropTypes from "prop-types";
import React, { useReducer } from "react";
import union from "../../img/union.svg";

export const Component = ({ property1, className, pullDataClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "group-30",
    tooltipVisible: false, // Tooltip visibility
  });

  return (
    <div
      className={`${state.property1 === "group-30" ? "border border-solid" : ""} ${
        state.property1 === "group-30" ? "border-black" : ""
      } w-[122px] h-[47px] rounded-[23.5px] bg-black relative flex items-center justify-center ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`[font-family:'Poppins',Helvetica] text-xs font-semibold text-white text-center leading-[normal] ${
          pullDataClassName
        }`}
      >
        Pull Data
      </div>

      {state.tooltipVisible && (
        <div
          className="absolute top-[25px] left-0 w-[126px] h-[88px] flex flex-col items-center justify-center"
          style={{ zIndex: 10 }}
        >
          <img className="w-full h-full" alt="Union" src={union} />
          <p className="absolute text-black text-sm [font-family:'Poppins',Helvetica] text-center mt-2">
            Pull your data from AppFolio
          </p>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        tooltipVisible: true, // Show the tooltip on hover
      };

    case "mouse_leave":
      return {
        ...state,
        tooltipVisible: false, // Hide the tooltip on mouse leave
      };

    default:
      return state;
  }
}

Component.propTypes = {
  property1: PropTypes.oneOf(["group-30", "group-1410082888"]),
};
