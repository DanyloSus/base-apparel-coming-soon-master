import React from "react";
import RightBlock from "./Elements/RightBlock";
import LeftBlock from "./Elements/LeftBlock";

const App = () => {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden overflow-y-auto flex">
      <LeftBlock />
      <RightBlock />
    </div>
  );
};

export default App;
