import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

type Blog = {
    _id: string;
    title: string;
    createdAt: string;
    image: string;
    shortDesc: string;
}

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchBlogs = async () => {
          try {
            const response = await axios.get("https://proton-technologies-server-puce.vercel.app/api/blogs");
            const data = response.data;
            return data;
          } catch (error) {
            console.error("Error fetching blogs:", error);
            return [];
          }
        };
    
        fetchBlogs()
          .then((data) => {
            setBlogs(data);
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
          });
      }, []);


  return (
    <main
      className="
            max-w-screen-xl
            w-full
            mx-auto
            flex
            flex-col
            px-6
            xl:px-0
            py-12
        "
    >
      <h1
        className="
                text-4xl
                text-white
                font-bold
                text-center
            "
      >
        Blogs
      </h1>
      <div
            className='
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-8
            '
        >
            {loading ? (
                <>
                    <p>Loading...</p>
                </>
            ) : blogs.map((blog: Blog, index) => (
                <Link
                    to={`/blogs/${blog._id}`}
                    key={blog._id}
                >
                    <div
                        className='
                            flex
                            flex-col
                            gap-4
                            text-white
                            text-center
                            group
                        '
                    >
                        <div>
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className='
                                    w-full
                                    rounded-lg
                                    transition-all
                                    duration-500
                                    group-hover:scale-105
                                '
                            />
                        </div>
                        <div
                            className='
                                text-3xl
                                font-medium
                            '
                        >
                            {blog.title}
                        </div>
                        <div
                            className='
                                text-base
                                font-medium
                                w-[86%]
                                mx-auto
                            '
                        >
                            {blog.shortDesc}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </main>
  )
}

export default Blogs