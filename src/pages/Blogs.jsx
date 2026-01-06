import BlogCard from "../components/BlogCard";
import supabase from "../supabase";

export default function Blogs({ blogs, getBlogs }) {
  // const [blogs, setBlogs] = useState([
  //   { id: 1, title: "Blog 1", description: "Lorem ipsum dolor sit amet" },
  //   { id: 2, title: "Blog 2", description: "Lorem ipsum dolor sit amet" },
  //   { id: 3, title: "Blog 3", description: "Lorem ipsum dolor sit amet" },
  // ]);

  const deleteBlog = async (id) => {
    // setBlogs(blogs.filter((b) => b.id !== id));
    const { error } = await supabase.from("blogs").delete().eq("id", id);
    // console.log(response);
    if (error) {
      console.log(error);
    } else {
      console.log("success");
    }
    getBlogs();
  };

  console.log(blogs);

  return (
    <div className="blogs-container">
      {blogs.length === 0 ? (
        <p>No blogs yet.</p>
      ) : (
        blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onDelete={deleteBlog} />
        ))
      )}
    </div>
  );
}
