import React from "react";

const Text = () => {
  return (
    <div className="text-soft-red mt-[140px] text-7xl font-light mobile:text-4xl mobile:mt-[60px]">
      <h1 className=" tracking-[15px]">
        WE'RE
        <span className="text-dark-grayish-red font-bold"> COMING SOON</span>
      </h1>
      <p className=" text-base mt-5 mobile:text-[14px] mobile:font-[400] mobile:mt-2">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals
      </p>
    </div>
  );
};

export default Text;
