import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import JobList from "./Components/JobList";
import Login from "./Components/Login";
import Register from "./Components/Register";

const App = () => {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
