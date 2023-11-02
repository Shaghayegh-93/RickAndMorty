import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  bg-slate700 p-4 rounded-2xl mb-4 text-white">
      <h1 className="text-slate300 font-bold">Logo</h1>
      <input
        className="py-3 px-4 rounded-lg text-slate100 bg-slate500 text-base"
        type="text"
        placeholder="Serach..."
      />
      <p className="text-slate400">found x result </p>
      <button className="relative  text-rose500">
        <HeartIcon className="w-8 h-8" />
        <span className="absolute text-xs top-0 -right-1 h-4 leading-4 text-center  bg-rose500 text-white rounded-[50%]  py-[1px] px-[4px]  flex items-center justify-center">
          1
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
