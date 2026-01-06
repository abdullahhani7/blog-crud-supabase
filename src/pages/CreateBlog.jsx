import { useState } from "react";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log(title, description);
  };

  return (
    <div className="form-container">
      <h2>Create a new Blog</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Write your title..."
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Write your description..."
      />
      <p style={{color:'red', fontSize:"12px"}}>* please fill all the field</p>
      <button  onClick={handleSubmit} className="save-btn">
        Save Blog
      </button>
    </div>
  );
}
