import { XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const Modal = () => {
  return (
    <div>
      <div className="w-screen h-screen fixed inset-0 bg-[rgba(63, 69, 76, 0.8)]">
        <div className="w-[98%] min-h-[250px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-4 rounded-2xl shadow-[1px 1px 50px slate-600]">
          <div className="flex items-center justify-between mb-4 pb-2 border-b-[1px] border-slate-600">
            <h2 className="text-slate-200">title</h2>
            <button>
              <XCircleIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
