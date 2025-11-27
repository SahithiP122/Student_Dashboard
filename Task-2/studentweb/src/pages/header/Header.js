import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div style={{ textAlign: "center", width: "100%", marginTop: "0px", color: "white" }}><h1>Student Fee Dashboard</h1></div>
      <nav className="headerb">
        <Link to="/" className="mx-2">Dashboard</Link>
        <Link to="/student" className="mx-2">Add Student</Link>
      </nav>
    </header>
  );
};

export default Header;
