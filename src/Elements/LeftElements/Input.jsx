import React from "react";

const Input = () => {
  return (
    <form className=" flex mt-14 relative items-center">
      <input
        type="email"
        className=" border-solid border-dark-grayish-red border w-full opacity-70 py-4 px-5 rounded-full invalid:border-desaturated-red transition-all duration-500 ease-in-out invalid:border-[5px]"
        required
        placeholder="Email adress"
        pattern=".+@gmail\.com"
        title="gmail@gmail.com"
      />
      <input
        type="submit"
        value=">"
        className="bg-gradient-to-r from-linear-bg-two-100 to-linear-bg-two-900 rounded-full text-white absolute px-10 h-full right-0 text-3xl font-thin shadow-xl cursor-pointer hover:opacity-0  transition-all ease-in-out duration-500 hover:shadow-2xl z-10"
      />
      <input
        type="button"
        value=">"
        className="bg-gradient-to-r from-linear-bg-one-100 hover:to-linear-bg-one-900 rounded-full text-white absolute px-10 h-full right-0 text-3xl font-thin "
      />
    </form>
  );
};

export default Input;
