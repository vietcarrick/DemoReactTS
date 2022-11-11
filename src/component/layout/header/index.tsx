import React from "react";
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";
import Full from "../Full";

const Header = () => {
  return (
      <Full style={"w-auto flex justify-between items-center px-[50px] py-5 mx-[-16px] fixed bg-white left-0 right-0 z-50 shadow-[0_2px_8px_0px_rgba(0,0,0,0.1)"}>
        <Left />
        <Center />
        <Right />
      </Full>
  );
};

export default Header;
