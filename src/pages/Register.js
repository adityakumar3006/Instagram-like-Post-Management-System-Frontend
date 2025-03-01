import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/auth/register", { username, email, password });
        navigate("/login");
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded my-2" required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded my-2" required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded my-2" required />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Register</button>
            </form>
        </div>
    );
};

export default Register;
