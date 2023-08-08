import { Link } from 'react-router-dom';

import { useEffect, useLayoutEffect, useState } from "react"
import Aos from "aos";
import "aos/dist/aos.css";
import axios from 'axios';


type Blog = {
    _id: string;
    title: string;
    createdAt: string;
    image: string;
    shortDesc: string;
}

const BlogSection = () => {

    useLayoutEffect(() => {
        const timeout = setTimeout(() => {
            Aos.init();
          }, 10);
      
          return () => clearTimeout(timeout);
    }, []);
    
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchBlogs = async () => {
          try {
            const response = await axios.get("https://proton-technologies-server-puce.vercel.app/api/blogs");
            const data = response.data;
            const slicedData = data.slice(0, 3); // Slice the data array to get the first 3 items
            return slicedData;
          } catch (error) {
            console.error("Error fetching blogs:", error);
            return [];
          }
        };
    
        fetchBlogs()
          .then((slicedData) => {
            setBlogs(slicedData);
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
          });
      }, []);

    // const blogs = [
    //     {
    //         image: '/blog-1.jpg',
    //         title: 'Web Designs',
    //         shortDesc: 'We create web designs that attracts the consumer',
    //         href: '/blogs/web-designs',
    //     },
    //     {
    //         image: '/blog-2.jpg',
    //         title: 'UI/UX Designs',
    //         shortDesc: 'We design best ui/ux designs according to you requirement as soon as possible',
    //         href: '/blogs/uiux-designs'
    //     },
    //     {
    //         image: '/blog-3.jpg',
    //         title: 'See Here Projects',
    //         shortDesc: "Let's check the projects which attracts the users",
    //         href: '/blogs/projects'
    //     },
    // ];
  return (
    <section
      id="blogs"
      className="
            flex
            flex-col
            gap-12
            py-16
            px-8
            xl:px-0
            max-w-screen-xl 
            w-full 
            mx-auto
        "
    >
        <div
            className='
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-8
            '
        >
            {blogs.map((blog: Blog, index) => (
                <Link
                    to={`/blogs`}
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
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay={index * 200}
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
    </section>
  )
}

export default BlogSection