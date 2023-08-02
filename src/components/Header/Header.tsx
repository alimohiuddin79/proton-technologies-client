import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from '@chakra-ui/react';

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

import { useLayoutEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";

const sections = [
    {
        name: 'Home',
        id: '#home',
    },
    {
        name: 'About',
        id: '#about',
    },
    {
        name: 'Services',
        id: '#services',
    },
    {
        name: 'Portfolio',
        id: '#portfolio',
    },
    {
        name: 'Reviews',
        id: '#reviews',
    },
    {
        name: 'Blogs',
        id: '#blogs',
    },
    {
        name: 'Contact Us',
        id: '#contact-us',
    },
];
const Header = () => {
    useLayoutEffect(() => {
        const timeout = setTimeout(() => {
            Aos.init();
          }, 10);
      
          return () => clearTimeout(timeout);
    }, []);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleMenuClick = (event: any, id: string) => {
        event.preventDefault();
        const targetSection = document.querySelector(id);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
    };

  return (
    <>
    <header
        className='
            max-w-screen-xl
            w-full
            mx-auto
            py-10
            flex
            justify-between
            items-center
            px-6
            xl:px-0
        '
        data-aos="fade-down"
        data-aos-duration="2000"
    >
        <Link to={'/'}>
            <img 
                src="/logo.png" 
                alt="proton-logo" 
            />
        </Link>
        <div
            className="
                text-4xl
                text-slate-300
                p-2
                border
                border-slate-300
                rounded-xl
                block
                lg:hidden
            "
            onClick={onOpen}
        >
            <GiHamburgerMenu />
        </div>
        <nav
            className='
                hidden
                lg:flex
                items-center
                gap-4
            '
        >
            {sections.map((section, index) => (
                <a
                    key={section.id}
                    className={`
                        uppercase
                        text-white
                        text-lg
                        transition-all
                        duration-300
                        cursor-pointer
                        ${index === 6 ? 'bg-primary-1 px-4 py-2 rounded-full hover:tracking-widest ease-in  text-white' : 'hover:text-primary-1'}
                    `}
                    href={section.id}
                    onClick={(e) => handleMenuClick(e, section.id)}
                >
                    {section.name}
                </a>
            ))}
        </nav>
    </header>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody
            px={'6'}
            py={'8'}
          >
            <nav
            className='
                flex
                flex-col
                gap-4
            '
        >
            {sections.map((section, index) => (
                <a
                    key={section.id}
                    className={`
                        uppercase
                        text-lg
                        transition-all
                        duration-300
                        cursor-pointer
                        max-w-fit
                        ${index === 6 ? 'bg-primary-1 px-4 py-2 rounded-full hover:tracking-widest ease-in  text-white' : 'hover:text-primary-1 hover:tracking-widest'}
                    `}
                    href={section.id}
                    onClick={(e) => handleMenuClick(e, section.id)}
                >
                    {section.name}
                </a>
            ))}
        </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header