import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";

export default function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/create" className="header-logo">
          <h2>Blog</h2>
        </Link>

        <Link to="/create">
          <button className="create-btn">Create New</button>
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </BrowserRouter>
  );
}
