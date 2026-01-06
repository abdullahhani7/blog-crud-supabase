export default function CreateBlog() {
  return (
    <div className="form-container">
      <h2>Create a new Blog</h2>

      <input placeholder="Write your title..." />
      <textarea placeholder="Write your description..." />

      <button className="save-btn">Save Blog</button>
    </div>
  );
}
