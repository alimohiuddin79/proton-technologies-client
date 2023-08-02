import { useLayoutEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";


const HeroSection = () => {

    useLayoutEffect(() => {
        const timeout = setTimeout(() => {
            Aos.init();
          }, 10);
      
          return () => clearTimeout(timeout);
    }, []);
  return (
    <section
        id='home'
        className='
            flex
            flex-wrap
            items-center
            py-16
            px-6
            xl:px-0
            gap-y-8
            max-w-screen-xl 
            w-full 
            mx-auto
        '
    >
        <div
            className='
                w-full
                md:w-1/2
                flex
                flex-col
                gap-8
                text-white
            '
            data-aos='fade-right'
            data-aos-duration='2000'
        >
            <h1
                className='
                    text-3xl
                    font-semibold
                '
            >
                LEADING THE DIGITAL WORLD
            </h1>
            <h3
                className='
                    text-2xl
                    font-medium
                '
            >
                WE BRING YOUR VISION TO LIFE
            </h3>
            <p
                className='
                    text-base
                    font-normal
                '
            >
                Proton technologies is a software house that serves the aim of providing the best services to all our customers. We provide state of the art services to our clientele which includes innovative creatives, the latest graphic designing, trendy social media marketing, catchy animation, content writing and website development services. Our primary purpose is to help our clients to grow and excel in their respective fields while achieving their professional goals.
            </p>
            <a 
                href="#contact-us"
                className='
                    rounded-full
                    text-lg
                    text-white
                    px-6
                    py-2
                    bg-blue-500
                    hover:bg-primary-1
                    transition-colors
                    duration-300
                    uppercase
                    max-w-fit
                '
            >
                Start Project
            </a>
        </div>
        <div
            className='
                w-full
                flex
                md:w-1/2
          '
          data-aos='fade-left'
          data-aos-duration='2000'
        >
            <img
                src='/banner.png'
                alt='banner'
                className='
                    w-full
                '
            />
        </div>
    </section>
  )
}

export default HeroSection