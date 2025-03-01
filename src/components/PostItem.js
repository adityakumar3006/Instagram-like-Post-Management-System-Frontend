import React from "react";

const PostItem = ({ post }) => {
    return (
        <div className="border rounded p-4 shadow-md">
            <img src={post.imageUrl} alt={post.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-bold my-2">{post.title}</h2>
            <p>{post.description}</p>
        </div>
    );
};

export default PostItem;
