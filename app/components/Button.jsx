import React from "react";

function Button({ handleClick }) {
  return (
    <div>
      <button
        onClick={handleClick}
        className="border rounded-xl bg-blue-900 text-white py-2 px-5 w-[150px] relative right-[37~0px] top-[170px]"
      >
        ثبت نظر
      </button>
    </div>
  );
}

export default Button;
