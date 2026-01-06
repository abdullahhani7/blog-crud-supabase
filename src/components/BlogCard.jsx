import { Link } from "react-router-dom";

export default function BlogCard({ blog, onDelete }) {
  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>

      <div className="blog-actions">
        <button className="btn-delete" onClick={() => onDelete(blog.id)}>
          Delete
        </button>
        <Link to={`/edit/${blog.id}`}>
          <button className="btn-edit">Edit</button>
        </Link>
      </div>
    </div>
  );
}
