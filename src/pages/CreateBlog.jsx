import { useState } from "react";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    // console.log(title, description);
    if (!title || !description) {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);

    const { data, error: supabaseError } = await supabase
      .from("blogs")
      .insert({ title, description })
      .select();

    setLoading(false);

    if (data) {
      // console.log('data',data);
      
      setTitle("");
      setDescription("");
      setError(false);
      navigate("/");
    }

    if (supabaseError) {
      setError(true);
      return;
    }
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

      <button disabled={loading} onClick={handleSubmit} className="save-btn">
        {loading ? "Saving..." : "Save Blog"}
      </button>
    </div>
  );
}
