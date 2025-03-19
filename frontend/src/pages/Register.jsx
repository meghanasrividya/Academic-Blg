import React, { useState } from "react";
import { register } from "../api";
import "./Register.css"; // Import the CSS file for styling

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      alert("Registration successful!");
    } catch (error) {
      alert("Registration failed! Please try again.");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="register-title">Create an Account</h2>
        <input
          type="text"
          placeholder="Name"
          className="register-input"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="register-input"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="register-input"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
