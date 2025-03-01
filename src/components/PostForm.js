import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/postSlice";

const PostForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("image", image);
        dispatch(createPost(formData));
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
            <input type="text" placeholder="Title" className="p-2 w-full" onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Description" className="p-2 w-full" onChange={(e) => setDescription(e.target.value)} />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button type="submit" className="p-2 bg-blue-600 text-white">Post</button>
        </form>
    );
};

export default PostForm;
