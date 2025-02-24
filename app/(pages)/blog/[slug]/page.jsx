import React from "react";
import posts from "@/app/data/posts";
import Link from "next/link";

function PostDetail({ params }) {
  const { slug } = params;
  const post = posts.find((post) => post.id === Number(slug));
  if (!post) {
    return <div>مقاله ای با این شناسه یافت نشد</div>;
  }
  return (
    <>
      <div className="flex flex-col gap-5 mb-40">
        <p>{post.title}</p>
        <p>{post.content}</p>
      </div>
      <div>
        <Link href="/coments">
          <button className="border rounded-xl bg-blue-900 text-white py-2 px-8">
            ارسال نظر
          </button>
        </Link>
      </div>
    </>
  );
}

export default PostDetail;
