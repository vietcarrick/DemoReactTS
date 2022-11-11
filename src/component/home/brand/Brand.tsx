import React from "react";
import { _brand } from "./_Brand";

type Props = {
  title: string;
};

const Brand = ({ title }: Props) => {
  return (
    <div className="py-10">
      <p className="text-base text-black font-medium opacity-60 text-center mb-7">{title}</p>
      <div className="flex justify-center ">
      {_brand.map((item, index): React.ReactNode => {
        return (
          <div className="mx-4">
            <img src={item} alt="" key={item} />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Brand;
