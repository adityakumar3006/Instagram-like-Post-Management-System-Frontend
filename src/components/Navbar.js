import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    return (
        <nav className="bg-blue-600 p-4 flex justify-between">
            <Link to="/" className="text-white font-bold">Instagram Clone</Link>
            {token ? (
                <button onClick={() => dispatch(logout())} className="text-white">Logout</button>
            ) : (
                <Link to="/login" className="text-white">Login</Link>
            )}
        </nav>
    );
};

export default Navbar;
