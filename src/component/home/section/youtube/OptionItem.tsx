import React from "react";

type Props = {
  title: string;
  content: string;
  onclick: () => void;
  isActive: boolean;
};

const OptionItem = ({ title, content, onclick, isActive }: Props) => {
console.log(isActive)
  return (
    <div
      className={`border-l-4 px-3 mb-6 border-solid ${
        isActive ? "border-[#4F49F5]" : "border-[#ccc]"
      }`}
      onClick={onclick}
    >
      <h3 className="text-xl leading-[25px] text-[#0F2137] font-medium">{title}</h3>
      {isActive && (
        <p className="text-base leading-[28px] text-[#6B7280]">{content}</p>
      )}
    </div>
  );
};

export default OptionItem;
