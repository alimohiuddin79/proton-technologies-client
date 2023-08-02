import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useLayoutEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";

const sections = [
  {
    name: "Home",
    id: "#home",
  },
  {
    name: "About",
    id: "#about",
  },
  {
    name: "Services",
    id: "#service",
  },
  {
    name: "Portfolio",
    id: "#portfolio",
  },
  {
    name: "Contact Us",
    id: "#contact-us",
  },
];

const Footer = () => {

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
    <>
    <footer
      className="
            bg-black/30
            px-6
            py-8
            xl:px-0
        "
    >
      <div
        className="
            max-w-screen-xl
            w-full
            mx-auto
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-y-8
        "
      >
        <div
            
        >
          <Link to={'/'}>
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div
          className="
                flex
                flex-col
                gap-6
            "
        >
          <div
            className="
                    flex
                    flex-col
                    gap-6
                    text-white
                "
          >
            <div className="font-semibold text-lg">Address</div>
            <div
              className="
                        font-medium
                        text-base
                    "
            >
              Kashif Center, Sharah-e-Faisal, Karachi.
            </div>
          </div>
          <div
            className="
                    flex
                    flex-col
                    gap-6
                    text-white
                "
          >
            <div className="font-semibold text-lg">Email</div>
            <div
              className="
                        font-medium
                        text-base
                    "
            >
              info@protontechnologies.com.pk
            </div>
          </div>
        </div>
        <div
          className="
                flex
                flex-col
                gap-6
                text-white
            "
        >
          <div
            className="
                    text-lg
                    font-semibold
                "
          >
            Navigation
          </div>
          <div
            className="
                    flex
                    flex-col
                    gap-3
                "
          >
            {sections.map((section) => (
              <a
                href={section.id}
                key={section.id}
                className="
                            transition-all
                            duration-300
                            hover:text-primary-1
                            hover:tracking-wider
                        "
                onClick={(e) => handleMenuClick(e, section.id)}
              >
                {section.name}
              </a>
            ))}
            <Link
                to={'/privacy-policy'}
                className="
                            transition-all
                            duration-300
                            hover:text-primary-1
                            hover:tracking-wider
                        "
              >
                Privacy Policy
              </Link>
          </div>
        </div>
        <div
            className="
                flex
                flex-col
                gap-6
                text-white
            "
        >
            <div
                className="
                    text-lg
                    font-semibold
                "
            >
                Social Links
            </div>
            <div
                className="
                    flex
                    items-center
                    gap-3
                "
            >
                <a
                    className="
                        text-white
                        text-2xl
                        p-2
                        transition-all
                        duration-500
                        hover:bg-primary-1
                        hover:p-4
                        rounded-lg
                    "
                    href="https://www.facebook.com/protontechno"
                >
                    <BsFacebook />
                </a>
                <a
                    className="
                        text-white
                        text-2xl
                        p-2
                        transition-all
                        duration-500
                        hover:bg-primary-1
                        hover:p-4
                        rounded-lg
                    "
                    href="https://www.instagram.com/protontechnologiespakistan/?utm_source=qr"
                >
                    <AiOutlineInstagram />
                </a>
                <a
                    className="
                        text-white
                        text-2xl
                        p-2
                        transition-all
                        duration-500
                        hover:bg-primary-1
                        hover:p-4
                        rounded-lg
                    "
                    href="https://www.linkedin.com/company/86462255/admin/"
                >
                    <AiFillLinkedin />
                </a>
            </div>
        </div>
      </div>
    </footer>
    <div
        className="
            border-t-2
            border-white
            py-4
            bg-black/30
            px-6
            xl:px-0
            text-center
            text-white
            text-base
        "
      >
        Copyright © 2023 PROTON TECHNOLOGIES
      </div>
    </>
  );
};

export default Footer;
