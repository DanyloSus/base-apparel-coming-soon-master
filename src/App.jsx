import React from "react";
import RightBlock from "./Elements/RightBlock";
import LeftBlock from "./Elements/LeftBlock";
import MobileBlock from "./Elements/MobileBlock";

const App = () => {
  return (
    <>
      <div className="min-h-screen w-screen overflow-x-hidden overflow-y-auto flex mobile:hidden">
        <LeftBlock />
        <RightBlock />
      </div>
      <div className="overflow-x-hidden overflow-y-auto min-h-screen w-screen flex-col items-center hidden mobile:flex">
        <MobileBlock />
      </div>
    </>
  );
};

export default App;
