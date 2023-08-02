import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';

const Admin = () => {
    const navigate = useNavigate();
    const toast = useToast();

    const [fields, setFields] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFields((prevFields) => ({
            ...prevFields, [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/auth', {
              email: fields.email,
              password: fields.password,
            });

            console.log(response);
            
        
            // Process the response as needed (e.g., check for successful login, handle errors, etc.)
        
            toast({
              title: 'Logged In',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
        
            navigate('/');
          } catch (error) {
            // Handle errors, e.g., display error messages to the user, etc.
            toast({
              title: 'Login Failed',
              description: 'Please check your email and password.',
              status: 'error',
              duration: 5000,
              isClosable: true,
            });
          }
        };

        
  return (
    <form onSubmit={handleSubmit}>
    <main
        className='
            max-w-screen-xl
            w-full
            mx-auto
            flex
            justify-center
            items-center
            min-h-[60vh]
        '
    >
            <div
                className='
                    flex
                    flex-col
                    max-w-md
                    w-full
                    gap-6
                    px-5
                    py-8
                    mb-8
                    rounded-2xl
                    bg-black/25
                    text-white
                    border-2
                    border-slate-500
                    shadow-lg
                '
            >
                <h1
                    className='
                        text-3xl
                        font-bold
                        text-center
                    '
                >
                    Admin Login
                </h1>
                <div
                    className='
                        w-full
                        flex
                        flex-col
                        gap-4
                    '
                >
                    <label
                        htmlFor="email"
                        className='
                            text-xl
                            font-medium
                        '
                    >
                        Email
                    </label>
                    <input
                        type='email'
                        required
                        name='email'
                        value={fields.email}
                        onChange={handleChange}
                        className='
                            py-2
                            px-4
                            bg-white/20
                            border-2
                            border-slate-500
                            w-full
                            text-xl
                            rounded-xl
                            outline-none
                        '
                    />
                </div>
                <div
                    className='
                        w-full
                        flex
                        flex-col
                        gap-4
                    '
                >
                    <label
                        htmlFor="password"
                        className='
                            text-xl
                            font-medium
                        '
                    >
                        Password
                    </label>
                    <input
                        type='password'
                        required
                        name='password'
                        value={fields.password}
                        onChange={handleChange}
                        className='
                            py-2
                            px-4
                            bg-white/20
                            border-2
                            border-slate-500
                            w-full
                            text-xl
                            rounded-xl
                            outline-none
                        '
                    />
                </div>
                <button
                    className='
                        text-2xl
                        font-semibold
                        rounded-2xl
                        py-3
                        px-6
                        bg-zinc-300
                        transition
                        duration-300
                        hover:bg-zinc-500
                        text-slate-700
                        mt-5
                    '
                    type='submit'
                >
                    Sign In
                </button>
            </div>
    </main>
    </form>
  )
}

export default Admin