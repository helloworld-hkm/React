import Home from "./page/Home";
import About from "./page/About";
import Profile from "./page/Profile";
import NotFound from "./page/NotFound";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./page/Login";
import BlogList from "./page/BlogList";
import Blog from "./page/Blog";
import "./index.css";
function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={isLogin ? <Profile /> : <Navigate to="/" />}
        />
        <Route path="/login" element={<Login />} />

        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:title" element={<Blog />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
