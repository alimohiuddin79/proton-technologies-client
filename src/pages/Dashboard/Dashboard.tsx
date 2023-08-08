import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  TableContainer,
  useToast,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

import { BiEdit } from "react-icons/bi";
import { BiSolidTrashAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { formatDate } from "../../utils/formatDate";


type Blog = {
    _id: string;
    title: string;
    createdAt: string;
}

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();
  const authContext = useContext(AuthContext);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef<any>()

  useEffect(() => {
    if (authContext?.user === null) {
        navigate('/admin/login');
    } 
}, [authContext?.user, navigate]);

  useEffect(() => {
    setLoading(true);
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        const data = response.data;
        return data;
      } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
      }
    };

    fetchBlogs()
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const fetchAndUpdateBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/blogs");
      const data = response.data;
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]);
    }
  };
  

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
        withCredentials: true,
      });
      onClose();
      if (response.status === 200 || response.status === 201) {
        // Update the blogs after successful deletion
        fetchAndUpdateBlogs();
        toast({
          title: 'Blog Deleted',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }
      
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };
  

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
        Blog Dashboard
      </h1>
      <div
        className="
                w-full
                border-2
                border-slate-500
                shadow-lg
                rounded-2xl
                px-4
                py-6
                mt-8
            "
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <TableContainer bgColor={"transparent"} color={"white"}>
            <Table size="md">
              <Thead>
                <Tr>
                  <Th color={"whitesmoke"} fontWeight={"extrabold"}>
                    Title
                  </Th>
                  <Th color={"whitesmoke"} fontWeight={"extrabold"}>
                    Date
                  </Th>
                  <Th color={"whitesmoke"} fontWeight={"extrabold"}>
                    Actions by
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {blogs.map((blog: Blog) => (
                  <Tr key={blog._id}>
                    <Td>
                      <Link to={`/blogs/${blog._id}`}>
                        {blog.title}
                      </Link>
                    </Td>
                    <Td>{formatDate(blog.createdAt)}</Td>
                    <Td>
                        <div
                            className="
                                flex
                                gap-3
                                items-center
                            "
                        >
                          <Link 
                            to={`/admin/dashboard/edit-blog/${blog._id}`}
                            className="
                                text-2xl
                                text-slate-700
                                p-1
                                rounded-md
                                bg-slate-300
                                hover:bg-slate-100
                                cursor-pointer
                            "
                          >
                            <BiEdit />
                          </Link>
                            <div
                                className="
                                    text-2xl
                                    text-slate-700
                                    p-1
                                    rounded-md
                                    bg-slate-300
                                    hover:bg-slate-100
                                    cursor-pointer
                                "
                                onClick={onOpen}
                            >
                                <BiSolidTrashAlt />
                                <AlertDialog
                                    isOpen={isOpen}
                                    leastDestructiveRef={cancelRef}
                                    onClose={onClose}
                                  >
                                    <AlertDialogOverlay>
                                      <AlertDialogContent>
                                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                          Delete Customer
                                        </AlertDialogHeader>

                                        <AlertDialogBody>
                                          Are you sure? You want to delete this blog?.
                                        </AlertDialogBody>

                                        <AlertDialogFooter>
                                          <Button ref={cancelRef} onClick={onClose}>
                                            Cancel
                                          </Button>
                                          <Button colorScheme='red' onClick={() => handleDelete(blog._id)} ml={3}>
                                            Delete
                                          </Button>
                                        </AlertDialogFooter>
                                      </AlertDialogContent>
                                    </AlertDialogOverlay>
                                  </AlertDialog>
                              </div>
                        </div>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
