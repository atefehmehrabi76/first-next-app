import React from 'react';
import posts from "@/app/data/posts";
import Link from 'next/link';

function Home() {
  return (
    <div className=''>
        <h1 className='text-center mb-12 text-5xl'>لیست مقالات بلاگ</h1>
        <ul className='flex gap-20 justify-center'>
            {
                posts.map((post)=>(
                    <li key={post.id} className='border rounded-lg bg-blue-900 text-white py-3 w-[180px] text-center'>
                        <Link href={`/blog/${post.id}`}>
                           {post.title}
                        </Link>
                    </li>
                ))
            }
        </ul>

    </div>
  )
}

export default Home;