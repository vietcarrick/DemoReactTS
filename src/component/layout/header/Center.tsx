/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { _Center } from "./Header";

const Center = () => {
  return (
    <div className="flex">
      {_Center.map((item: string, index: number) => (
        <div className="mx-[7px]">
          <a
            className="font-medium text-base text-[#090B17]"
            key={index}
            href="#"
          >
            {item}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Center;
