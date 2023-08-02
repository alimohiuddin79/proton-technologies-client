import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiFillStar } from "react-icons/ai";

import Slider from "react-slick";

import { useLayoutEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slideToShow: 1,
  slidesToScroll: 1,
};

const clients = [
  {
    image: "/client-1.jpg",
    name: "Sarah",
    review:
      "Proton Technologies has been a game-changer for my business! Their web development expertise transformed my website into a stunning online platform. The app they developed is simply top-notch, providing seamless user experience. The logo maker gave my brand a fresh identity, and their branding services added a professional touch. I'm beyond impressed with their creativity and dedication to excellence. With Proton Technologies, I found a reliable partner for all my digital needs. Highly recommended!",
  },
  {
    image: "/client-2.jpg",
    name: "Joshua",
    review:
      "Proton Technologies has been instrumental in taking my business to new heights! Their web development services resulted in a modern and user-friendly website that captivated my customers. The app they crafted is nothing short of exceptional, offering unmatched functionality. The logo maker produced a stunning brand symbol, and their branding services added a touch of professionalism. Working with Proton Technologies was a game-changer for my business success. Highly commend their expertise!",
  },
  {
    image: "/client-3.jpg",
    name: "Michael",
    review:
      "I recently engaged Proton Technologies for various services, and I must say, I'm thoroughly impressed! Their web development skills brought my vision to life, creating a seamless and user-friendly site. The app they developed exceeded all expectations, and the logo they designed perfectly represents my brand. Their branding expertise has given my business a professional edge. Overall, Proton Technologies is a one-stop-shop for exceptional digital solutions! Highly recommended!",
  },
];

const Reviews = () => {
  
  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
        Aos.init();
      }, 10);
  
      return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="reviews"
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
        Client Reviews
      </h1>
      <div
        className="
                px-12
                w-full
            "
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="500"
      >
        <Slider {...settings}>
          {clients.map((client) => (
            <div
              className="
                            px-8
                        "
              key={client.name}
            >
              <div
                className="
                            flex
                            flex-col
                            justify-center
                            items-center
                            mx-auto
                            bg-black/25
                            rounded-2xl
                            text-white
                            text-center
                            py-8
                        "
              >
                <div
                  className="
                                w-32
                                h-32
                                rounded-full
                                border-2
                                p-2
                                border-primary-1
                            "
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="
                                    w-full
                                    h-full
                                    rounded-full
                                    object-cover
                                "
                  />
                </div>
                <h1
                  className="
                                text-2xl
                                mt-3
                            "
                >
                  {client.name}
                </h1>
                <p
                  className="
                                text-base
                                w-[86%]
                                md:w-[70%]
                                mt-5
                            "
                >
                  {`"${client.review}"`}
                </p>
                <div
                  className="
                                flex
                                gap-2
                                items-center
                                text-lg
                                text-white/70
                                mt-3
                            "
                >
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
