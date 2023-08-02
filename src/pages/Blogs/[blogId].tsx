import React from 'react';
import { useParams } from 'react-router-dom';

interface BlogPageProps {
  image: string;
  title: string;
  date: string;
  shortDesc: string;
  content: string;
}

const blog = {
  image: "/blog-1.jpg",
  title: "Web Designs",
  date: "02/08/2023",
  shortDesc: "We create web designs that attracts the consumer",
  content: <div><p>This is blog content</p></div>
}

const BlogPage = () => {

  const { blogId } = useParams();
  console.log(blogId);
  
  return (
    <main
      className='
        max-w-screen-xl
        w-full
        mx-auto
        flex
        flex-col
        gap-8
        px-6
        xl:px-0
      '
    >
      <div
        className='
          w-full
          h-[468px]
        '
      >
        <img
          src={blog.image}
          alt={blog.title}
          className='
            w-full
            h-full
            rounded-2xl
          '
        />
      </div>
      <div
        className='
          flex
          flex-wrap
          justify-between
          gap-8
        '
      >
        <div
          className='
            text-white
            text-2xl
            font-semibold
          '
        >
          {blog.title}
        </div>
        <div
          className='
            text-slate-500
            text-xl
            font-light
          '
        >
          {blog.date}
        </div>
      </div>
      <div
        className='
          flex
          flex-col
          min-h-[30vh]
          text-white
        '
      >
        {blog.content}
      </div>
    </main>
  )
}

export default BlogPage