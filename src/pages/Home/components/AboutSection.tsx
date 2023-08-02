import { useLayoutEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
        Aos.init();
      }, 10);
  
      return () => clearTimeout(timeout);
    }, []);

    const handleMenuClick = (event: any, id: string) => {
        event.preventDefault();
        const targetSection = document.querySelector(id);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
    };

  return (
    <section
      id="about"
      className="
            flex
            flex-col
            gap-12
            py-16
            px-6
            xl:px-0
        "
    >
      <div
        className="
                flex
                flex-wrap
                gap-y-8
                items-center
                max-w-screen-xl 
                w-full 
                mx-auto
            "
      >
        <div
          className="
                w-full
                flex
                md:w-1/2
          "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img
            src="/about.png"
            alt="banner"
            className="
                    w-[90%]
                "
          />
        </div>
        <div
          className="
                w-full
                md:w-1/2
                flex
                flex-col
                gap-8
                text-white
                md:pt-8
          "
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1
            className="
                    text-4xl
                    font-semibold
                    uppercase
                "
          >
            Why choose us?
          </h1>
          <p
            className="
                    text-base
                "
          >
            Attention to intricate detail, a thriving success plan with
            creativity and affordable pricing from our well experienced and
            equipped staff.
            <br />
            With the priority is to provide the best services to all of our
            clients, we make it essential for everyone in our team to understand
            our client’s requirements and needs from the scratch. Having the
            most experienced and professional staff, we promise to deliver
            quality work at the most reasonable prices. And that is because,
            when you work with us, you don’t only get our years of experience
            but also guaranteed success in every project.
          </p>
          <a
            href="#contact-us"
            className="
                    py-7
                    px-6
                    capitalize
                    border-l-4
                    border-blue-600
                    rounded-md
                    w-[60%]
                    text-xl
                    bg-white/10
                    hover:w-full
                    transition-all
                    duration-500
                "
                onClick={(e) => handleMenuClick(e, '#contact-us')}
          >
            Let's Start the Project!
          </a>
          <div
            className="
                    flex
                    gap-12
                    items-center
                "
          >
            <a
              href="#contact-us"
              className="
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
                    "
                    onClick={(e) => handleMenuClick(e, '#contact-us')}
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
      <div
        className="
            pattern
        "
      >
        <div
          className="
            max-w-screen-xl 
            w-full 
            mx-auto
            flex
            flex-col
            gap-8
            py-6
            pattern-content
          "
        >
        <div
            className="
                border-l-4
                border-dashed
                border-primary-1/75
                flex
                flex-col
                gap-6
                text-white
                w-full
                sm:w-[70%]
                lg:w-[60%]
                relative
                py-4
                pl-12
            "
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
        >
            <h1
                className="
                    text-primary
                "
            >
                VISION
            </h1>
            <p
                className="
                    text-base
                "
            >
                The aim to surpass the clients expectations by providing the best and intelligent services beyond the requirements and to help them grow with unwavering ethics.
            </p>
            <div
                className="
                    w-4
                    h-4
                    rounded-full
                    bg-primary-1/75
                    absolute
                    -bottom-6
                    -left-[10px]
                "
            />
        </div>
        <div
            className="
                border-l-4
                border-dashed
                border-primary-1/75
                flex
                flex-col
                gap-6
                text-white
                w-full
                sm:w-[70%]
                lg:w-[60%]
                relative
                py-4
                pl-12
            "
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="600"
        >
            <h1
                className="
                    text-primary
                "
            >
                MISSION
            </h1>
            <p
                className="
                    text-base
                "
            >
                Proton Technologies approach has been designed to provide top quality while implementing the most effective solutions to meet the needs of different companies and individual clients. We have a mission to become the largest organization where we can assist people regarding all the services in the digital realm.
            </p>
            <div
                className="
                    w-4
                    h-4
                    rounded-full
                    bg-primary-1/75
                    absolute
                    -bottom-6
                    -left-[10px]
                "
            />
        </div>
        <div
            className="
                border-l-4
                border-dashed
                border-primary-1/75
                flex
                flex-col
                gap-6
                text-white
                w-full
                sm:w-[70%]
                lg:w-[60%]
                relative
                py-4
                pl-12
            "
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="900"
        >
            <h1
                className="
                    text-primary
                "
            >
                Branding Identity
            </h1>
            <p
                className="
                    text-base
                "
            >
                Let your brand speak for itself. That is the motto we follow at Proton. We make sure that your brand is distinctive, unique and appealing to the extent that will make your audience remembers you. Our team of professional branding experts make sure to provide your brand with an image that it is worth it.
            </p>
            {/* <div
                className="
                    w-4
                    h-4
                    rounded-full
                    bg-primary-1/75
                    absolute
                    -bottom-6
                    -left-[10px]
                "
            /> */}
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
