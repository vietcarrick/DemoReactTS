import React from "react";

type Props = {
  image: string;
  name: string;
};

const DropdownItem = (props: Props) => {
  return (
    <div>
      <div className="px-2 py-1 border">
        <img src={props.image} alt="" />
        <span>{props.name}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default DropdownItem;
