import { useState } from "react";
import { useToast } from '@chakra-ui/react'


import { useLayoutEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";


const ContactUs = () => {

    useLayoutEffect(() => {
        const timeout = setTimeout(() => {
            Aos.init();
          }, 10);
      
          return () => clearTimeout(timeout);
    }, []);

    const toast = useToast();
    const [fields, setFields] = useState({
        name: '',
        email: '',
        subject: '',
        comment: '',
    });

    // const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFields((prevFields) => ({
            ...prevFields, [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(fields);
        toast({
            title: "Email Sent.",
            description: "We've contact you soon.",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top',
        });
    }

  return (
    <section
      id="contact-us"
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
        <div
            className='
                flex
                flex-col
                text-white
                text-center
                gap-6
            '
        >
            <div
                className='
                    text-4xl
                    uppercase
                '
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                Contact Us
            </div>
            <div
                className='
                    text-xl
                '
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
            >
                Get in touch with us
            </div>
        </div>
        <form onSubmit={handleSubmit}>
            <div
                className='
                    flex
                    flex-col
                    justify-center
                    gap-12
                '
            >
                <div
                    className='
                        flex
                        flex-wrap
                        md:flex-nowrap
                        gap-x-8
                        gap-y-12
                    '
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="400"
                >
                    <input
                        required
                        type='text'
                        name='name'
                        value={fields.name}
                        onChange={handleChange}
                        placeholder='Your Name'
                        className='
                            w-full
                            md:w-1/2
                            p-3
                            border-b-2
                            border-blue-500
                            text-center
                            text-xl
                            bg-transparent
                            outline-none
                            text-white
                        '
                    />
                    <input
                        required
                        type='email'
                        name='email'
                        value={fields.email}
                        onChange={handleChange}
                        placeholder='Your Email'
                        className='
                            w-full
                            md:w-1/2
                            p-3
                            border-b-2
                            border-blue-500
                            text-center
                            text-xl
                            bg-transparent
                            outline-none
                            text-white
                        '
                    />
                </div>
                <input
                    required
                    type='text'
                    name='subject'
                    value={fields.subject}
                    onChange={handleChange}
                    placeholder='Your Subject'
                    className='
                        w-full
                        p-3
                        border-b-2
                        border-blue-500
                        text-center
                        text-xl
                        bg-transparent
                        outline-none
                        text-white
                    '
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="600"
                />
                <input
                    required
                    type='text'
                    name='comment'
                    value={fields.comment}
                    onChange={handleChange}
                    placeholder='Your Comment'
                    className='
                        w-full
                        p-3
                        border-b-2
                        border-blue-500
                        text-center
                        text-xl
                        bg-transparent
                        outline-none
                        text-white
                    '
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="800"
                />
                <button
                    type="submit"
                    className="
                        bg-blue-500
                        text-white
                        text-xl
                        uppercase
                        hover:bg-primary-1
                        rounded-full
                        px-10
                        py-3
                        max-w-fit
                        mx-auto
                    "
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="1000"
                >
                    Submit
                </button>
            </div>
        </form>
    </section>
  )
}

export default ContactUs