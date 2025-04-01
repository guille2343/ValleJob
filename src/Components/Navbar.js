import React from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <div>
        <h1>VALLEJOB</h1>
        {user && <p className="username">{user.username}</p>}
      </div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/jobs">Ofertas</Link>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
        <li>
          <Link to="/register">Registrarse</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
