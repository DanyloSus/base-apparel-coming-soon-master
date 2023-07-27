import React from "react";
import BG from "./LeftElements/BG";
import Logo from "./LeftElements/Logo";
import Text from "./LeftElements/Text";
import Input from "./LeftElements/Input";

const LeftBlock = () => {
  return (
    <div className="w-[57%] relative overflow-auto">
      <BG />
      <div className=" ml-[164px] mr-[220px] mt-[64px] mb-[60px] z-10 relative ">
        <Logo />
        <Text />
        <Input />
      </div>
    </div>
  );
};

export default LeftBlock;
