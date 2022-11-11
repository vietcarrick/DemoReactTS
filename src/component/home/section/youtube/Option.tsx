import React from "react";
import OptionItem from "./OptionItem";



type Props = {
    onClick: () => void,
    isActive: boolean,
    title: string,
    content: string,
}

const Option = ({onClick, isActive, title, content}: Props) => {
  return (
    <div>
      <OptionItem
        title={title}
        content={content}
        onclick={onClick}
        isActive={isActive}
      />
    </div>
  );
};

export default Option;
