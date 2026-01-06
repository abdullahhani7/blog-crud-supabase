import { useEffect, useState } from "react";
import supabase from "../supabase";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBlog({ getBlogs }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const handleUpdate = async () => {
    // console.log(title, description);
    if (!title || !description) {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);

    const { data, error: supabaseError } = await supabase
      .from("blogs")
      .update({ title, description })
      .eq("id", id)
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
    getBlogs();
  };

  useEffect(() => {
    const getBlogs = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select()
        .eq("id", id)
        .single();
      console.log(data);
      if (error) {
        console.log(error);
      }
      if (data) {
        // setBlogs(data);
        setTitle(data.title);
        setDescription(data.description);
      }
    };
    getBlogs();
  }, [id]);

  return (
    <div className="form-container">
      <h2>Edit Blog #{}</h2>

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

      <button disabled={loading} onClick={handleUpdate} className="save-btn">
        {loading ? "Updating..." : "Update Blog"}
      </button>
    </div>
  );
}
