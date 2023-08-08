import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import { useEffect, useState } from "react";

import "aos/dist/aos.css";
import BlogPage from "./pages/Blogs/[blogId]";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateBlog from "./pages/Blogs/CreateBlog";
import EditBlogPage from "./pages/Blogs/[editBlogId]";
import Blogs from "./pages/Blogs/Blogs";

const colors = ["#03045e", "#00b4d8", "#d90429", "#ffb703", "#fb8500", "#80ed99", "#a5a58d"];
const numBalls = 60;

function getViewportWidth() {
  return window.innerWidth;
}

const App = () => {
  const location = useLocation(); // Get the current location
  const isHomePage = location.pathname === "/"; // Check if the current page is the Home page

  const [balls, setBalls] = useState([]);
  const [viewportWidth, setViewportWidth] = useState(getViewportWidth());

  useEffect(() => {
    // Function to handle viewport width change
    const handleResize = () => {
      setViewportWidth(getViewportWidth());
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isHomePage) {
      // Ball creation logic
      const newBalls: any = [];
      for (let i = 0; i < numBalls; i++) {
        const ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];

        const ballSize = Math.random();
        ball.style.width = `${ballSize}em`;
        ball.style.height = `${ballSize}em`;

        const maxLeftPosition = 100 - ballSize;
        ball.style.left = `${Math.floor(Math.random() * maxLeftPosition)}%`;

        if (window.innerHeight <= 790) {
          if (viewportWidth <= 640) {
            ball.style.top = `${Math.floor(Math.random() * 1400)}%`;
          } else if (viewportWidth <= 768) {
            ball.style.top = `${Math.floor(Math.random() * 1280)}%`;
          } else if (viewportWidth <= 1024) {
            ball.style.top = `${Math.floor(Math.random() * 1000)}%`;
          } else {
            ball.style.top = `${Math.floor(Math.random() * 760)}%`;
          }
        } else {
          if (viewportWidth <= 640) {
            ball.style.top = `${Math.floor(Math.random() * 840)}%`;
          } else if (viewportWidth <= 768) {
            ball.style.top = `${Math.floor(Math.random() * 720)}%`;
          } else if (viewportWidth <= 1024) {
            ball.style.top = `${Math.floor(Math.random() * 640)}%`;
          } else {
            ball.style.top = `${Math.floor(Math.random() * 400)}%`;
          }
        }
        

        ball.style.transform = `scale(${Math.random()})`;

        newBalls.push(ball);
      }

      // Append balls to the DOM
      newBalls.forEach((ball: any) => document.body.append(ball));

      // Animation keyframes
      newBalls.forEach((el: any, i: number) => {
        const to = {
          x: Math.random() * (i % 2 === 0 ? -11 : 11),
          y: Math.random() * 12,
        };

        const anim = el.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` },
          ],
          {
            duration: (Math.random() + 1) * 2000,
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out",
          }
        );
      });

      // Update state with the new balls
      setBalls(newBalls);

      // Clean up function to remove balls when the component unmounts
      return () => {
        newBalls.forEach((ball: any) => ball.remove());
      };
    }
  }, [viewportWidth, isHomePage]);

  return (
    <>
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/dashboard/create-blog" element={<CreateBlog />} />
          <Route path="/admin/login" element={<Admin />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<BlogPage />} />
          <Route path="/admin/dashboard/edit-blog/:editBlogId" element={<EditBlogPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
