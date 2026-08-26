import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter email or Employee ID");
      return;
    }

    if (!password.trim()) {
      setMessage("Please enter password");
      return;
    }

    // Purana role hatao
    sessionStorage.removeItem("userRole");
    localStorage.removeItem("userRole");

    // Current selected role save karo
    const selectedRole =
      role === "manager" ? "manager" : "employee";

    sessionStorage.setItem("userRole", selectedRole);
    localStorage.setItem("userRole", selectedRole);

    sessionStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("isLoggedIn", "true");

    setMessage(
      selectedRole === "manager"
        ? "Manager login successful"
        : "Employee login successful"
    );

    setTimeout(() => {
      window.location.replace("/dashboard");
    }, 300);
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2>Welcome Back! 👋</h2>

        <p className="login-subtitle">
          Sign in to continue to your workspace
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Select Role</label>

            <div className="input-box">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="employee">
                  Employee
                </option>

                <option value="manager">
                  Manager
                </option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>Email or Employee ID</label>

            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your email or employee ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="input-box">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {message && (
            <div className="login-message">
              {message}
            </div>
          )}

          <button
            type="submit"
            className="signin-btn"
          >
            Sign In
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;