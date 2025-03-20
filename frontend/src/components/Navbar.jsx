import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Academic Blog</Link>
        <div className="links">
          <Link to="/register" className="link">Register</Link>
          <Link to="/login" className="link">Login</Link>
          <Link to="/posts" className="link">Posts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;