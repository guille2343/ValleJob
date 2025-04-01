import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Register.css";

const Register = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { username, email, password };

    try {
      const response = await fetch("http://localhost:5001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setUser(newUser);
        alert("Usuario registrado con éxito");
        navigate("/jobs");
      } else {
        alert("Error al registrar el usuario");
      }
    } catch (error) {
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <div className="register">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre de Usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
