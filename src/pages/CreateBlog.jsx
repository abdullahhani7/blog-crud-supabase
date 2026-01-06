import { useState } from "react";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    // console.log(title, description);
    if (title === "" || description === "") {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <div className="form-container">
      <h2>Create a new Blog</h2>

      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError(false);
        }}
        placeholder="Write your title..."
      />
      <textarea
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          setError(false);
        }}
        placeholder="Write your description..."
      />
      {error && (
        <p style={{ color: "red", fontSize: "12px" }}>
          * please fill all the field
        </p>
      )}

      <button onClick={handleSubmit} className="save-btn">
        Save Blog
      </button>
    </div>
  );
}
