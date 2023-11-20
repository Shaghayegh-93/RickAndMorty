import React from "react";
import { LoaderIcon } from "react-hot-toast";

const Loader = () => {
  return (
    <div className="text-slate-300 flex items-center gap-4 ">
      <p>Data is Loading...</p>
      <LoaderIcon className="w-5 h-5" />
    </div>
  );
};

export default Loader;
