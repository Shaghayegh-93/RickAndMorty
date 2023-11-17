import { XCircleIcon } from "@heroicons/react/24/outline";

const Modal = ({ children, open, onOpen }) => {
  if (!open) return null;
  return (
    <div className="">
      <div
        className="w-screen h-screen fixed inset-0 bg-backdrop "
        onClick={() => onOpen(false)}
      ></div>
      <div className=" w-[50%] min-h-[250px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-4 rounded-2xl shadow-modalShadow">
        <div className="flex items-center justify-between mb-4 pb-2 border-b-[1px] border-slate-600">
          <h2 className="text-slate-200">title</h2>
          <button onClick={() => onOpen(false)}>
            <XCircleIcon className="w-8 h-8 text-red-500" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
