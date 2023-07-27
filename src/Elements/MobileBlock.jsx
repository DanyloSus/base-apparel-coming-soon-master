import React from "react";
import Logo from "./LeftElements/Logo";
import Input from "./LeftElements/Input";
import Text from "./LeftElements/Text";

const MobileBlock = () => {
  return (
    <div className=" text-center">
      <div className="pt-[32px] px-[32px]">
        <Logo />
      </div>
      <div className="relative h-[220px] w-screen">
        <img
          src="./hero-mobile.jpg"
          alt="hero mobile"
          className="absolute w-screen h-full object-cover overflow-x-visible object-left-top"
        />
      </div>
      <div className=" pb-[92px] px-[32px]">
        <Text />
        <Input />
      </div>
    </div>
  );
};

export default MobileBlock;
