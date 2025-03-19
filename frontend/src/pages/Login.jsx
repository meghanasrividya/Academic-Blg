import React, { useState } from "react";
import { login } from "../api";
import "./Login.css"; // Import the CSS file for styling

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(form);
      localStorage.setItem("token", data.token);
      alert("Login successful!");
    } catch (error) {
      alert("Login failed! Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
