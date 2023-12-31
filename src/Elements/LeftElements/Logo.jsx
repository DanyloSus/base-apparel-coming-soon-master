import React from "react";

const Logo = () => {
  return (
    <div className="flex">
      <img
        src="logo.svg"
        alt="logo"
        className="mobile:h-5 mobile:mb-[25px] logo-anim anim"
      />
    </div>
  );
};

export default Logo;
