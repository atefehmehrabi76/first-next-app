"use client";
import Button from "@/app/components/Button";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function CommentPage() {
  const id = usePathname().split('/').pop();
  console.log(id);
  
  
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");
  const [comments, setComments] = useState([]);

  const userHandleChange = (e) => {
    setUser(e.target.value);
  };

  const commentHandleChange = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedComments = localStorage.getItem(`comments-${id}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    }
  }, [id]);

  const addComment = (e) => {
    e.preventDefault();
    if (user.trim() === "" || comment.trim() === "") return;
    const newComments = [...comments, { user, comment }];
    setComments(newComments);
    if (typeof window !== "undefined") {
      localStorage.setItem(`comments-${id}`, JSON.stringify(newComments));
    }
    setUser("");
    setComment("");
  };

  return (
    <>
      <form className="mx-[50px] my-[auto] p-5 w-[600px] h-[400px] flex flex-col gap-10 bg-white border border-slate-400 rounded-lg ">
        <input
          onChange={userHandleChange}
          type="text"
          id="userID"
          value={user}
          placeholder="نام کاربری خود را وارد کنید"
          className="w-[250px] shadow-lg shadow-slate-400 p-2 border border-slate-400 rounded-lg outline-none"
        />
        <textarea
          onChange={commentHandleChange}
          type="text"
          id="commentID"
          value={comment}
          placeholder="نظر خود را بنویسید"
          className="shadow-lg shadow-slate-400 p-2 border border-slate-400 rounded-lg outline-none"
        />
        <Button handleClick={addComment} />
      </form>

      {comments.length === 0 ? (
        <p className="mt-10">هنوز نظری ثبت نشده است!</p>
      ) : (comments.map((c, index) => {
        return (
          <div
            key={index}
            className="bg-white w-[50%] border border-slate-400 rounded-lg mt-10 mx-40 p-2"
          >
            <p className="mb-2">
              <strong>نام کاربری :</strong> {c.user}
            </p>
            <p className="px-3">
              <strong>نظر کاربر :</strong> {c.comment}
            </p>
          </div>
        );
      }))}
    </>
  );
}

export default CommentPage;
