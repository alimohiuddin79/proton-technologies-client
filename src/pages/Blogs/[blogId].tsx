import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';

interface BlogPageProps {
  image: string;
  title: string;
  createdAt: string;
  shortDesc: string;
  content: string;
}

// const blog = {
//   image: "/blog-1.jpg",
//   title: "Web Designs",
//   date: "02/08/2023",
//   shortDesc: "We create web designs that attracts the consumer",
//   content: <div><p>This is blog content</p></div>
// }

const BlogPage = () => {

  const { blogId } = useParams();
  const [blog, setBlog] = useState<BlogPageProps | null>(null);
  const [loading, setLoading] = useState(false);
  console.log(blogId);

  console.log(blog?.image);
  

  useEffect(() => {
    setLoading(true);
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${blogId}`);

        const data = response.data;
        return data;
      } catch (error) {
        console.error("Error fetching blog:", error);
        return null;
      }
    }

    fetchBlog()
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      })
  }, []);
  
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
        py-8
      '
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        blog !== null ? (
          <>
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
          {formatDate(blog.createdAt)}
        </div>
      </div>
      <div
        className='
          flex
          flex-col
          min-h-[30vh]
          text-white
        '
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
        </>
        ) : null
      )}
    </main>
  )
}

export default BlogPage