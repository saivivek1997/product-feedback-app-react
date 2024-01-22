import React from "react";

function MenuIconSvg({ stroke }) {
  return (
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 6l4-4 4 4"
        stroke={stroke ? stroke : "#4661e6"}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default MenuIconSvg;
