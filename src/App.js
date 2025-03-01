
import React, { useState, useEffect } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get("https://instagram-like-post-management-system-g5zj.onrender.com/posts");
    setPosts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    if (editingPost) {
      await axios.put(`https://instagram-like-post-management-system-g5zj.onrender.com/posts/${editingPost._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else {
      await axios.post("https://instagram-like-post-management-system-g5zj.onrender.com/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }
    setTitle("");
    setDescription("");
    setImage(null);
    setEditingPost(null);
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://instagram-like-post-management-system-g5zj.onrender.com/posts/${id}`);
    fetchPosts();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="flex justify-center mb-6">
        <img src="data:image/jpeg;base64,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" alt="Instagram Logo" className="h-16" />
      </div>
      <div className="container mx-auto p-6 bg-white rounded shadow-lg max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-center">Instagram-like Post System</h1>
        <form className="mb-6" onSubmit={handleSubmit}>
          <input className="border p-2 w-full mb-2" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <textarea className="border p-2 w-full mb-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          <input className="border p-2 w-full mb-2" type="file" onChange={(e) => setImage(e.target.files[0])} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full" type="submit">{editingPost ? "Update Post" : "Create Post"}</button>
        </form>

        <h2 className="text-2xl font-semibold mb-4">Posts</h2>
        <div className="overflow-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          {posts.map((post) => (
            <div key={post._id} className="border p-6 rounded shadow-lg w-full mb-4">
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="mb-4 text-lg">{post.description}</p>
              {post.image && <img src={`https://instagram-like-post-management-system-g5zj.onrender.com/${post.image}`} alt={post.title} className="w-full max-h-[500px] object-cover rounded" />}
              <div className="mt-4 flex justify-between">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => { setTitle(post.title); setDescription(post.description); setEditingPost(post); }}>Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDelete(post._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
