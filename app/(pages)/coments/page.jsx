"use client";
import Button from "@/app/components/Button";
import React, { useEffect, useState } from "react";

function CommentPage() {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("localStorage Available", localStorage);
      const savedComments = localStorage.getItem("Comments");
      console.log("Saved Comments:", savedComments);
      if (savedComments) {
       setComments( JSON.parse(savedComments))
      }
    }
  }, []);

  const addComment = (e) => {
    e.preventDefault();
    if (user.trim() === "" || comment.trim() === "") return;
    const newComments = [...comments, { user, comment }];
    setComments(newComments);
    if (typeof window !== "undefined") {
      localStorage.setItem("Comments", JSON.stringify(newComments));
    }
    setUser("");
    setComment("");
  };

  return (
    <>
      <form className="mx-[50px] my-[auto] p-5 w-[600px] h-[400px] flex flex-col gap-10 bg-white border border-slate-400 rounded-lg ">
        <input
          onKeyUp ={(e) => {
            setUser(e.target.value.trim());
          }}
          type="text"
          value={user}
          placeholder="نام کاربری خود را وارد کنید"
          className="w-[250px] shadow-lg shadow-slate-400 p-2 border border-slate-400 rounded-lg"
        />
        <textarea
          onChange={(e) => setComment(e.target.value.trim())}
          type="text"
          value={comment}
          placeholder="نظر خود را بنویسید"
          className="shadow-lg shadow-slate-400 p-2 border border-slate-400 rounded-lg"
        />
        <Button handleClick={addComment} />
      </form>

      {comments.map((c, index) => {
        return (
          <div
            key={index}
            className="bg-white w-[50%] border border-slate-400 rounded-lg mt-20 mx-40 p-2"
          >
            <p className="mb-2">
              <strong>نام کاربری :</strong> {c.user}
            </p>
            <p className="px-3">
              <strong>نظر کاربر :</strong> {c.comment}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default CommentPage;
