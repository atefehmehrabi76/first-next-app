import React from "react";

function Coment() {
  return (
    <form className="mx-[50px] my-[auto] p-5 w-[600px] h-[400px] flex flex-col gap-10 bg-white ">
      <input
        type="text"
        placeholder="نام کاربری خود را وارد کنید"
        className="w-[250px]"
      />
      <input type="text" placeholder="نظر خود را بنویسید" className="" />
      <button className="border rounded-xl bg-blue-900 text-white py-2 px-5 w-[150px] relative right-[37~0px] top-[170px]">
        ثبت نظر
      </button>
    </form>
  );
}

export default Coment;
