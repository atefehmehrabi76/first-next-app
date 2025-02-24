"use client";
import Button from "@/app/components/Button";
import React, { useEffect, useState } from "react";

function CommentPage() {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");
  const [outPut, setOutPut] = useState("");
  const addComment = () => {
    setOutPut(`user:${user} , comment :${comment}`);
  };
  // useEffect(() => {
  //   addComment();
  // }, []);
  return (
    <>
      <form className="mx-[50px] my-[auto] p-5 w-[600px] h-[400px] flex flex-col gap-10 bg-white ">
        <input
          onKeyUp={(e) => {
            setUser(e.target.value);
          }}
          type="text"
          placeholder="نام کاربری خود را وارد کنید"
          className="w-[250px]"
        />
        <input
          onKeyUp={(e) => setComment(e.target.value)}
          type="text"
          placeholder="نظر خود را بنویسید"
          className=""
        />
        <Button handleClick={addComment} />
      </form>
      <div>{outPut}</div>
    </>
  );
}

export default CommentPage;
