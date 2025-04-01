import React, { useState } from "react";
import "../Css/Login.css";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/users");
    const users = await response.json();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setUser(user);
      alert(`Bienvenido ${user.username}`);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
