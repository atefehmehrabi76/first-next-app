import React from "react";
import posts from "@/app/data/posts";
import Link from "next/link";

function PostDetail({ params }) {
  const { slug } =params;
  console.log("slug:", slug);

  const post = posts.find((post) => post.id === Number(slug));
  if (!post) {
    return <div>مقاله ای با این شناسه یافت نشد</div>;
  }
  return (
    <>
      <div className="flex flex-col gap-5 mb-40">
        <b>{post.title}</b>
        <p>{post.content}</p>
      </div>
      <div>
        <Link key={post.id} href={`/coments/${post.id}`}>
          <button className="border rounded-xl bg-blue-900 text-white py-2 px-8">
            ارسال نظر
          </button>
        </Link>
      </div>
    </>
  );
}

export default PostDetail;
