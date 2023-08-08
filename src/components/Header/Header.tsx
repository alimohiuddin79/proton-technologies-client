import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useToast,
  } from '@chakra-ui/react';

import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

import { useContext, useLayoutEffect } from "react"
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

    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.pathname);
    

    const authContext = useContext(AuthContext);
    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleMenuClick = (event: any, id: string) => {
        event.preventDefault();
        const targetSection = document.querySelector(id);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleLogout = () => {
        authContext?.setUser(null);
        localStorage.removeItem("authenticatedUser");
        // Process the response as needed (e.g., check for successful login, handle errors, etc.)
    
        toast({
          title: 'Logged Out',
          description: 'Redirecting to Home page',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
  
        console.log(authContext?.user);
        
        navigate('/');
    }

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
            {location.pathname !== '/admin/dashboard' && sections.map((section, index) => (
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
            {location.pathname === '/admin/dashboard' && authContext?.user !== null && (
                <>
                <Link
                    className={`
                        uppercase
                        text-lg
                        transition-all
                        duration-300
                        cursor-pointer
                        bg-primary-1 px-4 py-2 rounded-full hover:tracking-widest ease-in  text-white
                    `}
                    to={'admin/dashboard/create-blog'}
                >
                    Create Blog
                </Link>
                <button
                    className={`
                        uppercase
                        text-lg
                        transition-all
                        duration-300
                        cursor-pointer
                        bg-primary-1 px-4 py-2 rounded-full hover:tracking-widest ease-in  text-white
                        border-none
                    `}
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </>
            )}
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
            {location.pathname !== '/admin/dashboard' && sections.map((section, index) => (
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
            {location.pathname === '/admin/dashboard' && authContext?.user !== null && (
                <>
                <Link
                    className={`
                        uppercase
                        text-lg
                        transition-all
                        duration-300
                        cursor-pointer
                        bg-primary-1 px-4 py-2 rounded-full hover:tracking-widest ease-in  text-white
                        max-w-fit
                    `}
                    to={'admin/dashboard/create-blog'}
                >
                    Create Blog
                </Link>
                <button
                    className={`
                        uppercase
                        text-lg
                        transition-all
                        duration-300
                        cursor-pointer
                        bg-primary-1 px-4 py-2 rounded-full hover:tracking-widest ease-in  text-white
                        border-none
                        max-w-fit
                    `}
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </>
            )}
        </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header