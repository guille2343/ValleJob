import React from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = ({ user, logout }) => {
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
        {!user && (
          <>
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/register">Registrarse</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            <button onClick={logout}>Cerrar Sesión</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
