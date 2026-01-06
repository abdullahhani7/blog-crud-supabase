import { useParams } from "react-router-dom";

export default function EditBlog() {
  const { id } = useParams();
 

  return (
    <div className="form-container">
      <h2>Edit Blog #{id}</h2>

      <input placeholder="Edit title..." />
      <textarea placeholder="Edit description..." />

      <button className="save-btn">Update Blog</button>
    </div>
  );
}
