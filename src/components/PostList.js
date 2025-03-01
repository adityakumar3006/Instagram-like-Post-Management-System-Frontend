import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postSlice";

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className="p-4">
            {posts.map((post) => (
                <div key={post._id} className="p-4 border border-gray-300 rounded mb-4">
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <img src={`http://localhost:5000${post.imageUrl}`} alt="" className="w-64 h-64" />
                    <p>{post.description}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
