import { FaPaintbrush } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { FaPlayCircle } from "react-icons/fa";
import { BsFlagFill } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { ImMobile } from "react-icons/im";

import { useLayoutEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";



const OurServices = () => {

    useLayoutEffect(() => {
        const timeout = setTimeout(() => {
            Aos.init();
          }, 10);
      
          return () => clearTimeout(timeout);
    }, []);
    
    const services = [
        {
            icon: <FaPaintbrush />,
            title: 'Graphic Designing',
            content: 'With the use of the latest technologies in graphical advancements, our team is highly equipped to provide the best professional graphic designing services to make your brand stand apart in the industry that you are operating in with the state of the art creativity, design and high definition visualization.'
        },
        {
            icon: <RiComputerLine />,
            title: 'Website Development',
            content: 'It is important to have a website that speaks for your brand as websites are the first point of contact for prospective customers. It should be of a quality that provides excellent user experience. While designing a website for you, we make sure to keep an imperative, determined and strategic approach that is well thought which will later offer their own potential customers an easy, friendly and first class user experience.'
        },
        {
            icon: <FaPlayCircle />,
            title: 'Animation',
            content: 'Our animation team is trained to provide you with the animation of your choice. Be it as simple as a 2D animation to isometric explainer videos or even as big as a whiteboard and 3D animation. We have creative minded people to make sure that your concept is visualized in such a way that will leave your clients happy and assured.'
        },
        {
            icon: <BsFlagFill />,
            title: 'Social Media Marketing',
            content: 'It is our top priority to make sure that your social media marketing is up to date with all the latest trends and content in order to make your business stand out. From Reels to carousels, engaging content curation to an aesthetic social media theme, our main goal is to make your business receives the vitality and reach it deserves.'
        },
        {
            icon: <TfiWrite />,
            title: 'Content Writing',
            content: 'Writing content that is catchy, relevant and trendy is what sells. That can be in the form of writing articles, blogs, web content as well as storyboards, video content, reviews. Our team is has the most creative writers who will cater to your content needs. Our main aim is to cater to different businesses with distinctive goals from all industries. The content that our team provides is conceptualized and written in such a way that targets your audiences.'
        },
        {
            icon: <ImMobile />,
            title: 'App Development',
            content: "Everyone is online and that too from their phones. Switching from one app to another, that is how today's world works. Our application development comprises procuring and creating custom applications of your choice, IOS and Android Both! Our team comprises of the professional that will guide you in a step by step process of making sure you get the mobile application of your choice and that suits your business the best."
        }
    ]
  return (
    <section
      id="services"
      className="
            flex
            flex-col
            gap-14
            py-16
            px-6
            xl:px-0
            max-w-screen-xl 
            w-full 
            mx-auto
        "
    >
        <h1
            className="
                text-4xl
                font-semibold
                uppercase
                text-white
                text-center
            "
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            Our Services
        </h1>
        <div
            className="
                relative
                grid
                grid-cols-1
                lg:grid-cols-2
                xl:grid-cols-3
                gap-14
            "
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="500"
        >
            {services.map((service) => (
                    <div
                        className={`
                            max-h-[568px]
                            md:max-h-[442px]
                            flex
                            flex-col
                            gap-5
                            px-8
                            py-10
                            relative
                            text-white
                            rounded-3xl
                            border-2
                            border-slate-500
                            h-full
                            transition-all
                            duration-500
                            hover:scale-110
                        `}
                        key={service.title}
                    >
                        <div
                            className="
                                text-4xl
                                text-center
                                mx-auto
                            "
                        >
                            {service.icon}
                        </div>
                        <div
                            className="
                                text-3xl
                                font-semibold
                            "
                        >
                            {service.title}
                        </div>
                        <div
                            className="
                                text-base
                                text-justify
                            "
                        >
                            {service.content}
                        </div>
                    </div>
            ))}
        </div>
    </section>
  )
}

export default OurServices