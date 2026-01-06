import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import supabase from "./supabase";
import { useEffect, useState } from "react";

export default function App() {
  // console.log(supabase);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const { data, error } = await supabase.from("blogs").select();
      // console.log(data);
      if (error) {
        return alert(error);
      }
      if (data) {
        setBlogs(data);
      }
    };
    getBlogs();
  }, [blogs]);

  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/" className="header-logo">
          <h2>Blog</h2>
        </Link>

        <Link to="/create">
          <button className="create-btn">Create New</button>
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Blogs blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </BrowserRouter>
  );
}
