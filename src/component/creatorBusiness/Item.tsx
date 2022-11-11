import React from "react";

type Props = {
    image: string;
    title: string,
    description: string,
}

const Item = ({image, title, description}: Props) => {
  return (
    <div className="max-w-[376px] px-4">
      <div className="w-full">
        <img
          src={image}
          alt=""
        />
      </div>
      <div className="w-[95%] h-[370px] p-6 bg-white mx-auto translate-y-[-50px] rounded">
        <h4 className="mb-3 text-[20px] leading-[25px] text-[#0F2137] font-medium">
          {title}
        </h4>
        <p className="text-[15px] leading-7 text-[#6B7280]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Item;
