import { useState } from "react";
import BlogCard from "../components/BlogCard";

export default function Blogs() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Blog 1", description: "Lorem ipsum dolor sit amet" },
    { id: 2, title: "Blog 2", description: "Lorem ipsum dolor sit amet" },
    { id: 3, title: "Blog 3", description: "Lorem ipsum dolor sit amet" },
  ]);

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <div className="blogs-container">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onDelete={deleteBlog} />
      ))}
    </div>
  );
}
