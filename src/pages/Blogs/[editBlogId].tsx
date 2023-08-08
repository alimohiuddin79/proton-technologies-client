import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useParams, useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { useToast } from '@chakra-ui/react';
import { AuthContext } from "../../providers/AuthProvider";

interface BlogPageProps {
    image: string;
    title: string;
    createdAt: string;
    shortDesc: string;
    content: string;
  }

const EditBlogPage = () => {

    const { editBlogId } = useParams();
    const [fields, setFields] = useState({
        title: '',
        image: '',
        shortDesc: '',
        content: '',
    });
    const [loading, setLoading] = useState(false);
    console.log(editBlogId);

  const [imageValidationError, setImageValidationError] = useState("");

  const authContext = useContext(AuthContext);

    const navigate = useNavigate();

    const toast = useToast();

    useEffect(() => {
      if (authContext?.user === null) {
          navigate('/admin/login');
      } 
  }, [authContext?.user, navigate]);

    useEffect(() => {
      setLoading(true);
      const fetchBlog = async () => {
        try {
          const response = await axios.get(`https://proton-technologies-server-puce.vercel.app/api/blogs/${editBlogId}`);
  
          const data = response.data;
          return data;
        } catch (error) {
          console.error("Error fetching blog:", error);
          return null;
        }
      }
  
      fetchBlog()
        .then((data) => {
          setFields((prevFields) => ({
            ...prevFields,
            title: data.title,
            image: data.image,
            shortDesc: data.shortDesc,
            content: data.content,
          }))
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        })
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFields((prevFields) => ({
            ...prevFields,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(editorRef.current.getContent());
        
        if (fields.image === "") {
            setImageValidationError("Please Upload image");
        } else {
            if (editorRef.current) {
                setFields((prevFields) => ({
                    ...prevFields,
                    content: editorRef.current.getContent(),
                }))
                console.log(fields);

                try {
                  const response = await axios.put(`https://proton-technologies-server-puce.vercel.app/api/blogs/${editBlogId}`, {
                    title: fields.title,
                    image: fields.image,
                    shortDesc: fields.shortDesc,
                    content: editorRef.current.getContent(),
                }, {
                    withCredentials: true,
                });
                  console.log(response.data);

                  if (response.status === 200 || response.status === 201) {
                    toast({
                      title: 'Blog Updated',
                      description: 'Redirecting to Dashboard',
                      status: 'success',
                      duration: 5000,
                      isClosable: true,
                    });

                    navigate('/admin/dashboard');
                  }
                } catch (error) {
                  return null;
                }

            }
        }
    }

    const editorRef = useRef<any>(null);
    const cloudinaryRef = useRef<any>();
    const widgetRef = useRef<any>();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'deszolh0r',
            uploadPreset: 'e63kld95',
        }, function(error: any, result: any) {
            if (!error && result && result.event === "success") {
                // Get the image URL from the result object
                const imageUrl = result.info.url;
                setFields((prevFields) => ({
                    ...prevFields, image: imageUrl,
                }));
                console.log("Image URL:", imageUrl);
                // You might want to perform further actions with the URL here
            }
        });

    }, []);
  return (
    <main
      className="
            max-w-screen-xl
            w-full
            mx-auto
            flex
            flex-col
            px-6
            xl:px-0
            py-12
        "
    >
      <h1
        className="
                text-4xl
                text-white
                font-bold
                text-center
            "
      >
        Update Blog
      </h1>
      <div>
        <form onSubmit={handleSubmit}>
            <div
                className='
                    w-full
                    flex
                    flex-col
                    gap-8
                    py-8
                '
            >
                <div
                    className='
                        flex
                        flex-col
                        gap-4
                        w-full
                    '
                >
                    <div
                        className='
                            border-4
                            border-white
                            border-dashed
                            flex
                            justify-center
                            items-center
                            text-white
                            text-3xl
                            w-full
                            min-h-[264px]
                            cursor-pointer
                        '
                        onClick={() => widgetRef.current.open()}
                    >
                        {fields.image === "" ? 'Upload Image' : (
                            <img src={fields.image} alt='blog-image' />
                        )}
                    </div>
                    {imageValidationError !== "" && (
                        <div
                            className='
                                text-base
                                text-rose-500
                            '
                        >
                            {imageValidationError}
                        </div>
                    )}
                </div>
                <div
                    className='
                        w-full
                        flex
                        flex-col
                        gap-4
                        text-white
                    '
                >
                    <label htmlFor="title">Blog Title</label>
                    <input
                        type='text'
                        required
                        name='title'
                        placeholder='Web 3'
                        value={fields.title}
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
                        text-white
                    '
                >
                    <label htmlFor="shortDesc">Short Description</label>
                    <input
                        type='text'
                        required
                        name='shortDesc'
                        placeholder='Welcome to web 3 multiverse'
                        value={fields.shortDesc}
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
                <div className='w-full'>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue={fields.content}
                    init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                </div>
                <button
                    className='
                        font-medium
                        text-white
                        rounded-3xl
                        py-4
                        px-8
                        bg-white/20
                        hover:bg-white/30
                    '
                >
                    Update
                </button>
            </div>
        </form>
      </div>
    </main>
  )
}

export default EditBlogPage