import { memo } from "react";
// import Trash from "../assets/icons/Trash";

function Counter({ counter, handleIncrement, handleDelete }) {
  const { id, title ,count } = counter;

  console.log("rerender id:", id);

  return (
    <>
      <div className="w-96 grid grid-cols-7">

        <span className="col-span-3 font-bold mr-2">{title}</span>
        <div>
          <span
            className={`text-lg mr-4 ${
              count === 0 ? "bg-yellow-300" : "bg-cyan-300"
            }`}
          >
            {count}
          </span>
        </div>

        <div>
          <button
            onClick={() => handleIncrement(id)}
            className="btn btn-primary btn-xs"
          >
            +
          </button>
        </div>

        <div>
          <button
            onClick={() => handleDelete(id)}
            className="btn btn-error btn-xs  bg-white"
          >
            <i className="fa-solid fa-trash text-red-600 bg-white"></i>
          </button>
        </div>
        
      </div>
    </>
  );
}

export default memo(Counter);
